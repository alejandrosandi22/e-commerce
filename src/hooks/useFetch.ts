import { useState, useEffect } from 'react';

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T>({} as T);
  const [loading, setLoading] = useState(true);

  const refetch = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      setData(json);
      setLoading(false);
    }
    fetchData();
  }, [url]);

  return { data, loading, refetch };
}
