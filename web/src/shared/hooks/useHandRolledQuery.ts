import { useCallback, useEffect, useState } from 'react'

interface HandRolledQueryProps<T> {
  queryFn: () => Promise<T>
  queryKey: string[]
  select?: (data: T) => T
}
export function useHandRolledQuery<T = unknown>({
  queryKey,
  queryFn,
  select,
}: HandRolledQueryProps<T>) {
  const [response, setResponse] = useState<{
    data: T
    error: Error | null
    loading: boolean
  }>({
    data: null,
    error: null,
    loading: true,
  })

  const memoizedQueryFn = useCallback(queryFn, [queryKey])
  useEffect(() => {
    let isMounted = true

    const fetchData = async () => {
      try {
        const res = await memoizedQueryFn()
        if (isMounted) {
          setResponse({
            data: res,
            error: null,
            loading: false,
          })
        }
      } catch (err) {
        if (isMounted) {
          setResponse((prev) => {
            return {
              ...prev,
              error: err,
              loading: false,
            }
          })
        }
      }
    }

    fetchData()

    return () => {
      isMounted = false
    }
  }, [memoizedQueryFn])

  const data = select?select(response.data):response.data
  return { ...response, data }
}
