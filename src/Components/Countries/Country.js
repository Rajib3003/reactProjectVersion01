import React from 'react'

const Country = (props) => {
    
    const {name,flags,capital,population,area} =props.country;

    const handleRemoveCountry=(name)=>{
        props.onRemoveCountry(name);
    }
    
  return (
   <article className="country-card">
    <h1>{name.common}</h1>
    <img src={flags.png} alt={name.common}/>
    <h3>{capital}</h3>
    <h3>{population}</h3>
    <h3>{area}</h3>
    <button onClick={()=>{
        handleRemoveCountry(name.common)
    }}>Remove Country</button>
   </article>
  )
}

export default Country
