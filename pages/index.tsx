import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {AddCar, NewCardCollection, ProductCard, CarRentalCard} from "../src/ui-components";
import { useState } from 'react';
import { RentalCar } from "../src/models"
import { DataStore } from '@aws-amplify/datastore';
import { Divider, withAuthenticator } from '@aws-amplify/ui-react';

function Home(user: any) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
/*
  const saveRentalCar = async () => {
    try {
      new RentalCar();
    } catch (error ) {
      console.log(error);
    }
  }
  */
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
    /*
    "Button" : {
      onClick : () => {
        DataStore.save(
          new saveRentalCar()
        )
      } 
    },
    */

  }

/*
 Bugatti
 https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&amp;
 */
  return (
      <div className="App">
        <header className="App-header">
          <AddCar style = {{textAlign : "left", margin : "1rem"}}/>
          <NewCardCollection width = "640px" height="320px"/>
        </header>
      </div>
    );
}
export default withAuthenticator(Home);
