import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Question } from '../types/question';
import { standardQuestions } from '../data/standardQuestions';
import { fullQuestions } from '../data/fullQuestions';
import { shuffleQuestions } from '../utils/shuffleQuestions';
import { DimensionResult, MBTIResult, TestRecord } from '../types/result';
import { personalities } from '../data/personalities';
import { SafeImage } from '../components/SafeImage';
import defaultImage from '../../public/images/mbti/default.png';
import Image from 'next/image';

type ResultType = {
  E: number;
  I: number;
  S: number;
  N: number;
  T: number;
  F: number;
  J: number;
  P: number;
};

const API_BASE = '';

export default function TestPage() {
  const router = useRouter();
  const { version, username } = router.query;
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, 'a' | 'b'>>({});
  const [imageError, setImageError] = useState(false);
  const [isOptionsReversed, setIsOptionsReversed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserProgress = async () => {
      if (!username) return;
      
      try {
        const response = await fetch(`${API_BASE}/api/test-records?username=${encodeURIComponent(username as string)}`);
        const records = await response.json();
        
        // 找到最新的未完成记录
        const latestIncompleteRecord = Array.isArray(records) ? 
          records.find(record => !record.completed) : null;
        
        if (latestIncompleteRecord) {
          // 如果有未完成的记录，加载进度
          setCurrentQuestion(latestIncompleteRecord.progress.currentQuestion);
          setAnswers(latestIncompleteRecord.progress.answers);
          if (latestIncompleteRecord.progress.questions) {
            setQuestions(latestIncompleteRecord.progress.questions);
          }
        } else {
          // 如果没有未完成的记录，创建新记录
          const shuffledQuestions = version === 'standard' ? 
            shuffleQuestions(standardQuestions) : 
            shuffleQuestions(fullQuestions);
          
          setQuestions(shuffledQuestions);
          
          await fetch(`${API_BASE}/api/test-records`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username,
              progress: {
                answers: {},
                currentQuestion: 0,
                version,
                questions: shuffledQuestions,
              },
              completed: false,
            }),
          });
        }
      } catch (error) {
        console.error('Error loading progress:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUserProgress();
  }, [username, version]);

  useEffect(() => {
    const saveProgress = async () => {
      if (!username || !questions.length) return;

      try {
        const progress = {
          answers,
          currentQuestion,
          version,
          questions, // 保存题目顺序
        };

        await fetch(`${API_BASE}/api/test-records`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            progress,
            completed: false,
          }),
        });
      } catch (error) {
        console.error('Error saving progress:', error);
      }
    };

    saveProgress();
  }, [answers, currentQuestion, username, version, questions]);

  const calculateDetailedResult = (): MBTIResult => {
    const result: ResultType = {
      E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0
    };

    Object.entries(answers).forEach(([questionIndex, answer]) => {
      const question = questions[parseInt(questionIndex)];
      const category = question.category;
      
      if (answer === 'a') {
        result[category.split('/')[0] as keyof ResultType] += 1;
      } else {
        result[category.split('/')[1] as keyof ResultType] += 1;
      }
    });

    const calculateDimension = (first: keyof ResultType, second: keyof ResultType): DimensionResult => {
      const total = result[first] + result[second];
      const firstPercentage = (result[first] / total) * 100;
      return {
        dimension: `${first}/${second}`,
        primary: firstPercentage >= 50 ? first : second,
        secondary: firstPercentage >= 50 ? second : first,
        percentage: firstPercentage >= 50 ? firstPercentage : 100 - firstPercentage,
        total
      };
    };

    const dimensions = {
      EI: calculateDimension('E', 'I'),
      SN: calculateDimension('S', 'N'),
      TF: calculateDimension('T', 'F'),
      JP: calculateDimension('J', 'P')
    };

    return {
      type: `${dimensions.EI.primary}${dimensions.SN.primary}${dimensions.TF.primary}${dimensions.JP.primary}`,
      dimensions
    };
  };

  const handleAnswer = async (answer: 'a' | 'b') => {
    const newAnswers = {
      ...answers,
      [currentQuestion]: answer
    };
    setAnswers(newAnswers);
    setCurrentQuestion(prev => prev + 1);
    setIsOptionsReversed(Math.random() < 0.5);

    if (currentQuestion === questions.length - 1) {
      try {
        const result = calculateDetailedResult();
        const personalityType = Object.values(result.dimensions)
          .map(dim => dim.primary)
          .join('');
        
        // 创建新的完成记录，包含完整的测试结果
        await fetch(`${API_BASE}/api/test-records`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            progress: {
              answers: newAnswers,
              currentQuestion: currentQuestion + 1,
              version,
              questions,
            },
            result: {
              dimensions: Object.values(result.dimensions),
              personalityType,
              detailedResult: result
            },
            completed: true,
            completedAt: new Date(),
          }),
        });
      } catch (error) {
        console.error('Error saving result:', error);
      }
    } else {
      try {
        await fetch(`${API_BASE}/api/test-records`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            progress: {
              answers: newAnswers,
              currentQuestion: currentQuestion + 1,
              version,
              questions,
            },
          }),
        });
      } catch (error) {
        console.error('Error saving progress:', error);
      }
    }
  };

  const formatDimensionLabel = (dim: DimensionResult) => {
    const labels: Record<string, string> = {
      'E/I': '外向 - 内向',
      'S/N': '感知 - 直觉',
      'T/F': '思维 - 情感',
      'J/P': '判断 - 知觉'
    };
    return labels[dim.dimension] || dim.dimension;
  };

  const formatPercentageDisplay = (dim: DimensionResult) => {
    return (
      <div className="flex justify-between items-center w-full text-sm">
        <span className="w-20 text-right">{Math.round(100 - dim.percentage)}%</span>
        <div className="flex-grow mx-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className={`bg-teal-500 h-2.5 rounded-full transition-all duration-300 progress-bar`}
              data-width={dim.percentage}
            ></div>
          </div>
        </div>
        <span className="w-20">{Math.round(dim.percentage)}%</span>
      </div>
    );
  };

  const handleStartNewTest = async () => {
    // 创建新的测试记录
    const shuffledQuestions = version === 'standard' ? 
      shuffleQuestions(standardQuestions) : 
      shuffleQuestions(fullQuestions);
    
    setQuestions(shuffledQuestions);
    setCurrentQuestion(0);
    setAnswers({});
    
    try {
      await fetch(`${API_BASE}/api/test-records`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          progress: {
            answers: {},
            currentQuestion: 0,
            version,
            questions: shuffledQuestions,
          },
          completed: false,
          startedAt: new Date(),
        }),
      });
    } catch (error) {
      console.error('Error creating new test:', error);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-lg">加载中...</p>
        </div>
      </div>
    );
  }

  if (!username) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">错误</h2>
          <p className="text-gray-600 mb-4">请先输入用户名再开始测试。</p>
          <button
            onClick={() => router.push('/')}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            返回首页
          </button>
        </div>
      </div>
    );
  }

  if (currentQuestion >= questions.length) {
    const result = calculateDetailedResult();
    const personality = personalities[result.type];

    if (!personality) {
      return (
        <div className="container mx-auto px-4 py-8 max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">出错了</h2>
          <p>无法找到对应的性格类型信息</p>
          <div className="space-y-4">
            <button
              onClick={handleStartNewTest}
              className="w-full px-4 py-3 bg-teal-500 text-white rounded hover:bg-teal-600 transition-colors"
            >
              重新测试
            </button>
            <button
              onClick={() => router.push('/')}
              className="w-full px-4 py-3 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
            >
              返回首页
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">测试完成！</h2>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex flex-col items-center mb-8">
            <div className="relative w-32 h-32 mb-4 overflow-hidden rounded-full">
              <Image
                src={personality.image}
                alt={`${personality.code} - ${personality.nickname}`}
                width={128}
                height={128}
                className="object-cover rounded-full"
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
            <p className="text-2xl font-bold">
              你的MBTI类型是：{result.type}
            </p>
            <p className="text-xl text-gray-600 mt-2">
              {personality.nickname} ({personality.title})
            </p>
          </div>

          <div className="space-y-6 mb-8">
            {Object.entries(result.dimensions).map(([key, dim]) => (
              <div key={key} className="flex flex-col space-y-2">
                <div className="text-lg font-medium tracking-widest">
                  {dim.secondary} - {dim.primary}
                </div>
                <div className="font-mono text-xl tracking-widest">
                  {Math.round(100 - dim.percentage)}%  -  {Math.round(dim.percentage)}%
                </div>
                <div className="text-gray-600">
                  {formatDimensionLabel(dim)}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6 mt-8 border-t pt-6">
            <div>
              <h3 className="text-xl font-bold mb-3">性格概述</h3>
              <p className="text-gray-700">{personality.description}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">性格特点</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-green-600 mb-2">优势</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {personality.characteristics.strengths.map((strength, index) => (
                      <li key={index} className="text-gray-700">{strength}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-red-600 mb-2">劣势</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {personality.characteristics.weaknesses.map((weakness, index) => (
                      <li key={index} className="text-gray-700">{weakness}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">适合的职业</h3>
              <div className="flex flex-wrap gap-2">
                {personality.career.map((job, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded">
                    {job}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">人际关系</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">优势</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {personality.relationships.strengths.map((strength, index) => (
                      <li key={index} className="text-gray-700">{strength}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-purple-600 mb-2">建议</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {personality.relationships.advice.map((advice, index) => (
                      <li key={index} className="text-gray-700">{advice}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 mt-6">
          <button
            onClick={handleStartNewTest}
            className="w-full px-4 py-3 bg-teal-500 text-white rounded hover:bg-teal-600 transition-colors"
          >
            重新测试
          </button>
          <button
            onClick={() => router.push('/')}
            className="w-full px-4 py-3 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          >
            返回首页
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 bg-white rounded-lg shadow-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-lg font-semibold">问题 {currentQuestion + 1} / {questions.length}</p>
          <p className="text-sm text-gray-600">
            预计剩余时间: {Math.ceil((questions.length - currentQuestion - 1) * 0.25)} 分钟
          </p>
        </div>
        <div className="text-xs text-gray-500 mb-2">
          Debug: Progress = {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
        </div>
        <div className="w-full bg-gray-200 rounded-lg h-4">
          <div 
            className="bg-blue-600 h-4 rounded-lg transition-all duration-300"
            style={{ width: `${Math.round(((currentQuestion + 1) / questions.length) * 100)}%` }}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mt-4">
        <p className="text-lg mb-6">{questions[currentQuestion].text}</p>
        <div className="space-y-4">
          {isOptionsReversed ? (
            <>
              <button
                className="w-full p-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => handleAnswer('b')}
              >
                {questions[currentQuestion].options.b}
              </button>
              <button
                className="w-full p-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => handleAnswer('a')}
              >
                {questions[currentQuestion].options.a}
              </button>
            </>
          ) : (
            <>
              <button
                className="w-full p-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => handleAnswer('a')}
              >
                {questions[currentQuestion].options.a}
              </button>
              <button
                className="w-full p-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => handleAnswer('b')}
              >
                {questions[currentQuestion].options.b}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
} 