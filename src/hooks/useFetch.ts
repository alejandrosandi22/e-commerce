import { useState, useEffect } from 'react';

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T>(null as T);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refetch = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    if (!url) return;
    async function fetchData() {
      await fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(async (res) => setData(await res.json()))
        .catch((error) => setError(error.message));
      setLoading(false);
    }
    fetchData();
  }, [url]);

  return { data, loading, error, refetch };
}
