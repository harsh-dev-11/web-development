import { useEffect, useState } from "react";

function useCurrencyInfo(currency = "usd") {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
    )
      .then((res) => res.json())
      .then((currData) => {
        setData(currData[currency]);
      });
    console.log(data);
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
