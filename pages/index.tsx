import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import { signIn, signOut, useSession } from 'next-auth/react';

import useAppRedirect from '@/hooks/useAppRedirect';

export default function Home() {
  const { data: sessionData } = useSession();

  useAppRedirect();

  return (
    <>
      <Head>
        <title>Daily</title>
        <meta name="description" content="A fast and flexible day planner" />
      </Head>
      <main className="flex h-screen w-screen flex-col items-center justify-center">
        <h1 className="font-inter text-6xl font-extrabold md:text-7xl lg:text-8xl">Daily</h1>
        <h2 className="font-inter text-lg font-semibold lg:text-xl">All your plans, anywhere.</h2>
        <div className="mt-6 flex flex-col items-center justify-center">
          <button
            className="rounded bg-blue-200 px-16 py-4 font-bold hover:bg-blue-400"
            onClick={
              sessionData
                ? () => void signOut()
                : () =>
                    void signIn('', {
                      callbackUrl: `${window.location.origin}/app`,
                    })
            }
          >
            {sessionData ? 'Sign Out' : 'Get Started'}
          </button>
          <a className="text-sm font-semibold underline" href="https://github.com/EthanPlant/Daily">
            View on GitHub <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <footer className="absolute bottom-0 flex w-full flex-col items-center bg-slate-700 py-8 text-white">
          <a className="text-sm font-semibold underline" href="https://github.com/EthanPlant/">
            View on GitHub <FontAwesomeIcon icon={faGithub} />
          </a>
          Made by Ethan Plant
        </footer>
      </main>
    </>
  );
}
