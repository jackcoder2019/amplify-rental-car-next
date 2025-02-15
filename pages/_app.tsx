/* import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
*/
import { Amplify } from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css"
import { ThemeProvider } from '@aws-amplify/ui-react';
import {studioTheme}  from '../src/ui-components';

import awsExports from "../src/aws-exports.js";
import React, { FC } from "react";

Amplify.configure(awsExports, {ssr: true});

function MyApp({ Component, pageProps }: any ) {
  // Use the Layout component to wrap every page
  return (
    <ThemeProvider theme = {studioTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;