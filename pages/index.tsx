import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {AddCar, CarRentalNavBar, NewCardCollection, ProductCard, CarRentalCard} from "../src/ui-components";
import { useState } from 'react';
import { RentalCar } from "../src/models"
import { DataStore } from '@aws-amplify/datastore';

export default function Home() {
  const navbarOverrides = {
    "image38601372" : {
      src: "https://img.icons8.com/?size=100&id=15126&format=png&color=000000"
    },
    "image3860799" : {
      src: "avatar1.png"
    }, 
    "Button" : {
      children: "Sign Out 1"
    }
  }
 
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const addCarOverrides = {
      "TextField38601446" : {
        onChange : (event : any) => {
          setName (event.target.value);
        } 
      },
    "TextField38601447" : {
      onChange : (event : any) => {
        setPrice (event.target.value);
      } 
    },
    "TextField38601471" : {
      onChange : (event : any) => {
        setDescription (event.target.value);
      } 
    },
    "TextField38601445" : {
      onChange : (event : any) => {
        setImageUrl (event.target.value);
      } 
    },
    "Button" : {
      onClick : () => {
        DataStore.save(
          new saveRentalCar
        )
      } 
    },
  }
  
  const saveRentalCar = async () => {
    try {
      new RentalCar();
    } catch (error ) {
      console.log(error);
    }
  } 
/*
 Bugatti
 https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&amp;
 */
  return (
      <div className="App">
        <CarRentalNavBar overrides = {navbarOverrides}/>
        <header className="App-header">
          <AddCar style = {{textAlign : "left", margin : "1rem"}}/>
          <NewCardCollection/>
        </header>
      </div>
    );
}
/*
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
*/