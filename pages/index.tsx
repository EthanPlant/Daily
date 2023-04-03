import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import Head from 'next/head';
import {signIn} from 'next-auth/react';

export default function Home() {
  return (
    <>
    <Head>
      <title>Todo</title>
      <meta name="description" content="A free and open source todo list app" />
    </Head>
    <main className="flex flex-col items-center justify-center h-screen w-screen">
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold font-inter">Todo</h1>
      <h2 className="text-lg lg:text-xl font-semibold font-inter">A free and open source todo list app.</h2>
      <div className="mt-6 flex flex-col justify-center items-center">
        <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-4 px-16 rounded" onClick={() => signIn()}>Get Started</button>
        <a className="text-sm font-semibold underline" href="https://github.com/EthanPlant/Todo">View on GitHub <FontAwesomeIcon icon={faGithub}/></a>
      </div>
      <footer className="py-8 bg-slate-700 text-white flex flex-col items-center w-full absolute bottom-0">
        <a className="text-sm font-semibold underline" href="https://github.com/EthanPlant/Todo">View on GitHub <FontAwesomeIcon icon={faGithub} /></a>
        Made by Ethan Plant
      </footer>
    </main>
    </>
  )
}