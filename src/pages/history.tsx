import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { personalities } from '../data/personalities';
import { TestRecord } from '../types/result';

const API_BASE = process.env.NODE_ENV === 'production' ? '/mbtiTest' : '';

export default function HistoryPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [record, setRecord] = useState<TestRecord | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!username.trim()) {
      setError('请输入用户名');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const response = await fetch(`${API_BASE}/api/test-records?username=${encodeURIComponent(username.trim())}`);
      const data = await response.json();
      setRecord(data);
      if (!data) {
        setError('未找到测试记录');
      }
    } catch (error) {
      console.error('Error fetching record:', error);
      setError('获取记录时出错');
    } finally {
      setLoading(false);
    }
  };

  const handleContinueTest = () => {
    if (!record?.progress?.version) return;
    router.push(`/test?version=${record.progress.version}&username=${encodeURIComponent(username)}`);
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8">测试记录查询</h1>

      <div className="mb-8">
        <div className="flex gap-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="输入用户名查询记录"
            className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearch}
            disabled={loading}
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? '查询中...' : '查询'}
          </button>
        </div>
        {error && <p className="mt-2 text-red-500">{error}</p>}
      </div>

      {record && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">测试状态</h2>
            <p className="text-gray-600">
              {record.completed ? '已完成' : '进行中'}
              {record.progress && !record.completed && (
                <span className="ml-2">
                  (已完成 {record.progress.currentQuestion} 题)
                </span>
              )}
            </p>
          </div>

          <div className="mb-4">
            <p className="text-gray-600">开始时间：{formatDate(record.startedAt.toString())}</p>
            <p className="text-gray-600">最后更新：{formatDate(record.lastUpdated.toString())}</p>
            {record.completedAt && (
              <p className="text-gray-600">完成时间：{formatDate(record.completedAt.toString())}</p>
            )}
          </div>

          {record.completed && record.result && (
            <div className="mt-6">
              <h2 className="text-xl font-bold mb-4">测试结果</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 overflow-hidden rounded-full">
                    <Image
                      src={personalities[record.result.type].image}
                      alt={record.result.type}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{record.result.type}</p>
                    <p className="text-gray-600">
                      {personalities[record.result.type].nickname}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {Object.entries(record.result.dimensions).map(([key, dim]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="font-medium">{dim.dimension}</span>
                      <span>{Math.round(dim.percentage)}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {!record.completed && record.progress && (
            <button
              onClick={handleContinueTest}
              className="mt-6 w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              继续测试
            </button>
          )}
        </div>
      )}

      <button
        onClick={() => router.push('/')}
        className="mt-8 w-full px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
      >
        返回首页
      </button>
    </div>
  );
} 