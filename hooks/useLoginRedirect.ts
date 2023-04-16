import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const useLoginRedirect = () => {
  const { data: sessionData } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (sessionData) {
      router.push('/app')
    }
  }, [router, sessionData])
}

export default useLoginRedirect
