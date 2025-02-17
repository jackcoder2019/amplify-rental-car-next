/* import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
*/
"use client"
import { Amplify } from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css"
import { Divider, ThemeProvider } from '@aws-amplify/ui-react';
import {studioTheme, CarRentalNavBar}  from '../src/ui-components';
import {signOut} from "aws-amplify/auth"
import awsExports from "../src/aws-exports.js";
import React, { FC } from "react";

Amplify.configure(awsExports, {ssr: true});

function MyApp({ Component, pageProps }: any ) {
  async function handleSignOut() {
    await signOut()
  }

  const navbarOverrides = {
    "image38601372" : {
      src: "https://img.icons8.com/?size=100&id=15126&format=png&color=000000"
    },
    "image3860799" : {
      src: "avatar1.png",
    }, 
    "Button" : {
      children: "Sign Out",
      buttonOnClick: signOut,
    }
  }
 

  // Use the Layout component to wrap every page
  return (
    <ThemeProvider theme = {studioTheme}>
       <CarRentalNavBar overrides = {navbarOverrides}/>      
       <Divider/>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;