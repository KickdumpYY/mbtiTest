import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { TestRecord } from '../types/result';
import { personalities } from '../data/personalities';

const API_BASE = '';

export default function HomePage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [searchUsername, setSearchUsername] = useState('');
  const [searchResult, setSearchResult] = useState<TestRecord | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<TestRecord[]>([]);

  const handleStartTest = (version: string) => {
    if (!username.trim()) {
      setError('请输入用户名');
      return;
    }
    router.push(`/test?version=${version}&username=${encodeURIComponent(username)}`);
  };

  const handleSearch = async () => {
    if (!searchUsername) {
      setError('请输入用户名');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/api/test-records?username=${encodeURIComponent(searchUsername)}`);
      const data = await response.json();
      setSearchResults(Array.isArray(data) ? data : [data].filter(Boolean));
      setError('');
    } catch (error) {
      console.error('Error searching records:', error);
      setError('查询失败，请重试');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8 text-center">MBTI 性格测试</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">开始新测试</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            用户名
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError('');
            }}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="请输入用户名"
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>

        <div className="space-y-4">
          <button
            onClick={() => handleStartTest('standard')}
            disabled={!username.trim()}
            className={`w-full px-4 py-3 text-white rounded transition-colors ${
              username.trim() 
                ? 'bg-blue-500 hover:bg-blue-600' 
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            开始标准版测试（92题，约15-20分钟）
          </button>
          <button
            onClick={() => handleStartTest('full')}
            disabled={!username.trim()}
            className={`w-full px-4 py-3 text-white rounded transition-colors ${
              username.trim() 
                ? 'bg-green-500 hover:bg-green-600' 
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            开始完整版测试（144题，约25-30分钟）
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-lg font-semibold text-blue-700">上次做一半？</p>
          <p className="text-blue-600">在下方用名字查询，继续测试吧！</p>
        </div>
        
        <h2 className="text-xl font-bold mb-4">查询历史记录</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            输入用户名查询历史记录
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={searchUsername}
              onChange={(e) => setSearchUsername(e.target.value)}
              className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="请输入用户名"
            />
            <button
              onClick={handleSearch}
              disabled={loading}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors disabled:bg-gray-400"
            >
              查询
            </button>
          </div>
        </div>

        {loading && (
          <div className="text-center py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          </div>
        )}

        {searchUsername && !loading && searchResults.length === 0 && (
          <div className="border-t pt-4">
            <div className="bg-gray-50 border-l-4 border-gray-500 p-4">
              <p className="font-semibold text-gray-700">您还没测试过哦！</p>
              <p className="text-gray-600">请在上方开始测试！</p>
            </div>
          </div>
        )}

        {searchResults.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">测试历史记录</h3>
            <div className="space-y-4">
              {searchResults.map((record, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-4">
                        {record.result?.type && (
                          <div className="relative w-16 h-16">
                            <Image
                              src={`/mbtiTest/images/${record.result.type.toLowerCase()}.png`}
                              alt={`MBTI ${record.result.type} 类型图片`}
                              fill
                              style={{ objectFit: 'contain' }}
                            />
                          </div>
                        )}
                        <div>
                          <p className="font-semibold">
                            {record.completed ? 
                              `类型: ${record.result?.type}` : 
                              `进行中: 第 ${(record.progress?.currentQuestion ?? 0) + 1} 题`}
                          </p>
                          <p className="text-sm text-gray-600">
                            {record.completed ? 
                              `完成时间: ${new Date(record.completedAt || '').toLocaleString()}` :
                              `上次更新: ${new Date(record.lastUpdated).toLocaleString()}`}
                          </p>
                          {record.result?.type && (
                            <p className="text-sm text-gray-600 mt-1">
                              {personalities[record.result.type]?.nickname} ({personalities[record.result.type]?.title})
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="ml-4">
                      {record.completed ? (
                        <Link
                          href={`/test?username=${encodeURIComponent(searchUsername)}&version=${record.progress?.version || 'standard'}`}
                          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                          查看详细结果
                        </Link>
                      ) : (
                        <Link
                          href={`/test?username=${encodeURIComponent(searchUsername)}&version=${record.progress?.version || 'standard'}`}
                          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                        >
                          继续测试
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 