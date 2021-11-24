import React from 'react';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import styles from "./App.module.css";
import fetchCity from "./services/fetchCity.js"

//const apiKey ="8c5f63fd632b265eb5d164ada2e13828"; //MALLL!!!!

function App() {
  const[data, setData] = React.useState([]);

  function onSearch(ciudad) {
    if(data.length > 2){
        alert("Upps...Maximo de 3 busquedas. Si quieres seguir buscando, primero elimine una ciudad de la lista");
    } else {     
      fetchCity(ciudad, setData);
    }
  }
  
/*Nota: 
Las cards estan dentro de un array
¿Como hacemos para eliminar un elemento que esta dentro de un array?
Método filter(): Crea un nuevo array con todos los elementos que cumplan la condición implementada por la función.
En este caso le pasamos un id y todo lo que sea diferente de ese id lo devuelve, menos el id seleccionado.
*/
  function handleOnClose(id){
    setData(prevData =>{
      return prevData.filter(city => city.id !== id)
    })
  }
  
  return (
    <div className={styles.app}>
      <div className={styles.bkg} />
      <div className={styles.container}>
        <div>
          <SearchBar
            onSearch={onSearch}
          />
        </div>
        <div className={styles.citiesConteiner}>
            {data.length > 0 && 
            (<Card
              primary
              max={data[data.length - 1].max}
              min={data[data.length - 1].min}
              name={data[data.length - 1].name}
              img={data[data.length - 1].img}
            />
            )}
            <Cards cities={data} onClose ={handleOnClose} />
        </div>
      </div>
    </div>
  );
}

export default App;
