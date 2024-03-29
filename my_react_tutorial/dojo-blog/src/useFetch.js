import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortContr = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortContr.signal })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((e) => {
          if (e.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIsPending(false);
            setError(e.message);
          }
        });
    }, 1000);
    return () => abortContr.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
