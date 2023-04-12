import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const p = () => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
  const [data, setData] = useState([]);

  const prueba = async () => {
    const { data, error } = await supabase.from("words").select();
    console.log({ data, error });
    setData(data);
  };


  const prueba2 = async () => {
    const { data, error } = await supabase.from("words").insert([
      {
        word: "mundo",
      },
    ]);
    console.log({ data, error });
  };

  


};

export default p; 