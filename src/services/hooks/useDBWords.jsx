import axios from "axios";
import { useEffect, useMemo, useState } from "react";

export const useDBWords = () => {
  const url = "/api/wordApiSupabase";
  const [values, setValues] = useState([]);

  const getValue = async () => {
    const { data } = await axios.get(url);
    return data;
    //setValues(data);
  };

  const value = useMemo(
    () => ({
      data: values,
    }),
    [values],
  );

  return { value, getValue };
};
