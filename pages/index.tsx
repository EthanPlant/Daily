import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Head from 'next/head'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  const { data: sessionData } = useSession()

  useEffect(() => {
    if (sessionData) router.push('/app')
  }, [router, sessionData])

  return (
    <>
      <Head>
        <title>Daily</title>
        <meta name="description" content="A fast and flexible day planner" />
      </Head>
      <main className="flex flex-col items-center justify-center h-screen w-screen">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold font-inter">
          Daily
        </h1>
        <h2 className="text-lg lg:text-xl font-semibold font-inter">
          All your plans, anywhere.
        </h2>
        <div className="mt-6 flex flex-col justify-center items-center">
          <button
            className="bg-blue-200 hover:bg-blue-400 font-bold py-4 px-16 rounded"
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
          <a
            className="text-sm font-semibold underline"
            href="https://github.com/EthanPlant/Daily"
          >
            View on GitHub <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <footer className="py-8 bg-slate-700 text-white flex flex-col items-center w-full absolute bottom-0">
          <a
            className="text-sm font-semibold underline"
            href="https://github.com/EthanPlant/"
          >
            View on GitHub <FontAwesomeIcon icon={faGithub} />
          </a>
          Made by Ethan Plant
        </footer>
      </main>
    </>
  )
}
