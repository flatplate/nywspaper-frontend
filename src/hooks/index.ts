import {useEffect, useState} from 'react';

const cache: {[key: string]: any} = {};

const useCachedFetch = <T>(url: string) => {
  const [status, setStatus] = useState<'idle' | 'fetching' | 'fetched'>('idle');
  const [data, setData] = useState<T>();

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setStatus('fetching');
      if (cache[url]) {
        const data = cache[url];
        setData(data);
        setStatus('fetched');
      } else {
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

const useMobile = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return width < 768;
};

export {useCachedFetch, useMobile};
