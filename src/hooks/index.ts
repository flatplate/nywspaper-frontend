import {useEffect, useState} from 'react';

const cache: {[key: string]: any} = {};

const useCachedFetch = <T>(url: string) => {
  const [status, setStatus] = useState<'idle'|'fetching'|'fetched'>('idle');
  const [data, setData] = useState<T>();
  console.log("using fetch");

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setStatus('fetching');
      if (cache[url]) {
        console.log("Cached");
        const data = cache[url];
        setData(data);
        setStatus('fetched');
      } else {
        console.log("not cached");
        const response = await fetch(url);
        const data = await response.json();
        cache[url] = data; // set response in cache;
        setData(data as T);
        setStatus('fetched');
      }
    };

    fetchData();
  }, [url]);

  return {status, data};
};

export {useCachedFetch};
