import Head from 'next/head';
import { signIn, useSession } from 'next-auth/react';

import Greeting from '@/components/Greeting';
import LeftBar from '@/components/LeftBar';
import RightBar from '@/components/RightBar';
import TaskList from '@/components/TaskList';

export default function App() {
  const { data: sessionData } = useSession();

  return (
    <>
      <Head>
        <title>App | Daily</title>
        <meta name="description" content="Daily App" />
      </Head>
      <div>
        {sessionData ? (
          <div className="flex h-screen w-screen justify-between">
            <LeftBar />
            <main className="flex-1">
              <Greeting />
              <TaskList />
            </main>
            <RightBar />
          </div>
        ) : (
          <main className="flex flex-col items-center">
            <h1 className="mb-3 text-center font-inter text-3xl font-bold">
              You must be signed in!
            </h1>
            <button
              className="rounded bg-blue-300 px-16 py-4 font-bold hover:bg-blue-400"
              onClick={() => void signIn()}
            >
              Sign In
            </button>
          </main>
        )}
      </div>
    </>
  );
}
