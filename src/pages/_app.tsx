import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';  // 如果你使用 Tailwind，需要这个文件

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MBTI 性格测试</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
} 