import styles from "./card.module.css"
import React from "react";



const userList = [
    {
      id: "e34fd5",
      name: "cabana mare",
      email: "john@smithindustries.com",
      image: "john-smith.jpg",
    },
    {
      id: "f43gn2",
      name: "Jane Smith",
      email: "jane@smithindustries.com",
      image: "jane-smith.jpg",
    },
    {
        id: "e34fd5",
        name: "John Smith",
        email: "john@smithindustries.com",
        image: "john-smith.jpg",
      },
      {
        id: "f43gn2",
        name: "Jane Smith",
        email: "jane@smithindustries.com",
        image: "jane-smith.jpg",
        
      },
      {
        id: "e34fd5",
        name: "John Smith",
        email: "john@smithindustries.com",
        image: "john-smith.jpg",
      },
      {
        id: "f43gn2",
        name: "Jane Smith",
        email: "jane@smithindustries.com",
        image: "jane-smith.jpg",
      },
      {
        id: "e34fd5",
        name: "John Smith",
        email: "john@smithindustries.com",
        image: "john-smith.jpg",
      },
      {
        id: "f43gn2",
        name: "Jane Smith",
        email: "jane@smithindustries.com",
        image: "jane-smith.jpg",
      }
  ];

export default function Home() {
    return (
       <div className={styles.allCardsContainer}>
        { userList.map((userList) => {
            return (
              <div className={styles.cardContainer}>
                <div className={styles.photoCardContainer}>
                    <img /> 
                    </div>
                    <div className={styles.descriptionCardContainer}>
                <h2>{userList.name}</h2>
                <p>{userList.email}</p>
                </div> 
              </div>
            );
          }) }
         </div>
    );
}