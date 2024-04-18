import { useEffect, useState } from "react";
import { fetchDataFromAPI } from "../utils/api";

interface ApiResponse {
  // Define the structure of your API response
}

const useFetch = (url: string) => {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean | string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading("loading...");
    setData(null);
    setError(null);

    fetchDataFromAPI(url)
      .then((res: any) => {
        setLoading(false);
        setData(res);
      })
      .catch((err: Error) => {
        setLoading(false);
        setError("Something went wrong!");
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
