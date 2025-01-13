import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">MBTI 性格测试</h1>
      <div className="space-y-4">
        <Link 
          href="/test?version=standard" 
          className="block w-full p-4 bg-blue-500 text-white rounded text-center hover:bg-blue-600"
        >
          标准版 (93题)
          <p className="text-sm text-blue-100 mt-1">大约需要15-20分钟</p>
        </Link>
        <Link 
          href="/test?version=full" 
          className="block w-full p-4 bg-green-500 text-white rounded text-center hover:bg-green-600"
        >
          完整版 (144题)
          <p className="text-sm text-green-100 mt-1">大约需要25-30分钟</p>
        </Link>
      </div>
      <p className="mt-6 text-gray-600 text-sm">
        提示：完整版测试结果更准确，但需要更多时间完成。如果时间有限，建议选择标准版。
      </p>
    </div>
  );
} 