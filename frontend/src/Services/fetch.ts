import axios from "axios";
import { useState, useEffect } from "react";

const Fetch = (baseURL: any) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);

  return data;
};

export default Fetch;
