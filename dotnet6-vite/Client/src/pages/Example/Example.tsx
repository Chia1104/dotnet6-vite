import { type FC, useState, useEffect } from "react";

const Example: FC = () => {
  type dataType = {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
  };

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([] as dataType[]);

  const fetchData = async () => {
    setIsLoading(true);
    const result = await fetch("api/WeatherForecast");
    if (result.status !== 200) {
      setIsLoading(false);
      console.error(`Error: ${result.status}`);
      return;
    }
    const data = (await result.json()) as dataType[];
    console.log(data);
    setData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data.map((item) => (
            <div key={item.summary}>{item.summary}</div>
          ))}
        </div>
      )}
    </>
  );
};

export default Example;
