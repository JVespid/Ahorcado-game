import Context from "@/services/context/general/context";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";

import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  //const [supabase] = useState(() => createBrowserSupabaseClient());
  return (
    <Context>
      <Component {...pageProps} />
    </Context>
  );
}
