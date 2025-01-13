import { Question } from '../types/question';

export function shuffleQuestions(questions: Question[]): Question[] {
  // 创建题目数组的副本，避免修改原数组
  const shuffled = [...questions];
  
  // Fisher-Yates 洗牌算法
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
} 