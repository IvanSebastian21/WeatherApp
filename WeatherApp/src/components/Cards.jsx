import React from 'react';
import Card from "./Card";
import styles from "./Cards.module.css"
//Nota: Importante! importamos el Card

export default function Cards({ cities, onClose }) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div className={styles.cards}>
      {cities.map((city) => (
        <Card //pasamos atributos  
          key={city.id}
          name={city.name}
          min={city.min}
          max={city.max}
          img={city.img}
          onClose={() => onClose(city.id)}
          key={city.id}
        />
      ))}
    </div>
  )
};