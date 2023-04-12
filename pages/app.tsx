import { signIn, useSession } from 'next-auth/react'
import Head from 'next/head'
import LeftBar from '../components/LeftBar'
import RightBar from '../components/RightBar'

export default function App() {
  const { data: sessionData } = useSession()

  const monthName: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  let greeting = 'Good Evening'

  const date = new Date()

  const hour = date.getHours()

  if (hour >= 6 && hour < 12) {
    greeting = 'Good Morning'
  } else if (hour >= 12 && hour < 17) {
    greeting = 'Good Afternoon'
  }

  return (
    <>
      <Head>
        <title>App | Daily</title>
        <meta name="description" content="Daily App" />
      </Head>
      <div>
        {sessionData ? (
          <div className="flex justify-between h-screen w-screen">
            <LeftBar />
            <main className="flex-1">
              <div className="flex my-10 gap-4 items-center">
                <div className="my-auto mx-3 text-2xl text-center font-bold">
                  {monthName[date.getMonth()]}
                  <br />
                  {date.getDate()}
                </div>
                <div>
                  <div className="text-3xl font-bold">{greeting}</div>
                  <div className="text-3xl font-bold text-gray-500">
                    What&#39;s your plan for today?
                  </div>
                </div>
              </div>
            </main>
            <RightBar />
          </div>
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
