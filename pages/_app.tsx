import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import {supabase} from '../lib/supabaseClient'
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import RootLayout from "../components/root-layout";

export default function App({ Component, pageProps }: AppProps) {
  
//  const [supabaseClient] = useState(() => createPagesBrowserClient())
  return (
    <>
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
      <div id="root" />

      </SessionContextProvider>
    </>
  );
}
