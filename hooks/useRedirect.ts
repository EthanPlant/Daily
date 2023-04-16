import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useRedirect = (path: string, redirectCondition = true) => {
  const router = useRouter();

  useEffect(() => {
    if (redirectCondition) {
      router.push(path);
    }
  }, [path, redirectCondition, router]);
};

export default useRedirect;
