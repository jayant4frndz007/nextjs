import Link from 'next/link';
import Head from 'next/head';



export default function FirstPost() {
    return <>
    <Head>
       <title>First Post</title>
    </Head>
    <Link href="https://www.google.com"><a>go to</a></Link>
    <h1>First Post</h1>
    </>
  }