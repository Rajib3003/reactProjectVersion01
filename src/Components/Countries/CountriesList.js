import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Country from './Country';

const CountriesList = (props) => {
 
  const countries=props.countries;
  
 
  return (      
    <section>     
      
      {countries.map((country)=>{
          const countryWithId={country,id:uuidv4()};

         return <Country {...countryWithId} key={countryWithId.id} onRemoveCountry={props.onRemoveCountry} />
      })}
    </section>   
)       
}
        
     

  


export default CountriesList
