import { signIn, useSession } from 'next-auth/react'
import Head from 'next/head'
import LeftBar from '../components/LeftBar'

export default function App() {
  const { data: sessionData } = useSession()
  return (
    <>
      <Head>
        <title>App | Daily</title>
      </Head>
      <div className="flex h-screen w-screen">
        {sessionData ? (
          <LeftBar />
        ) : (
          <main className="flex flex-col items-center">
            <h1 className="font-inter text-3xl font-bold text-center mb-3">
              You must be signed in!
            </h1>
            <button
              className="bg-blue-300 hover:bg-blue-400 font-bold py-4 px-16 rounded"
              onClick={() => void signIn()}
            >
              Sign In
            </button>
          </main>
        )}
      </div>
    </>
  )
}
