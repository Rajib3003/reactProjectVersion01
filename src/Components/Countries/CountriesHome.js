import React, { useEffect, useState } from 'react'
import CountriesList from './CountriesList';
import Search from './Search';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const CountriesHome = () => {
    const url = "https://restcountries.com/v3.1/all";
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState(countries);
 
    const fetchData = async (url) => {
        try{
            setIsLoading(true);
            const response = await fetch(url);
            const data = await response.json();

            setCountries(data);
            setFilteredCountries(data);
            setIsLoading(false);
            setError(null);  
            //console.log(data);          
        }catch(error){
            setIsLoading(false);
            setError(error);
        }      
    };
    //console.log("country======"+countries)


    useEffect(()=>{
        fetchData(url)
    }, [])

    const handelRemoveCountry = (name) =>{
        const filter = filteredCountries.filter((country)=>country.name.common !==name);
        setFilteredCountries(filter)
    }
    const handelSearch = (searchValue) => {
        let value = searchValue.toLowerCase();
        const newCountries = countries.filter((country) => {
            const countryName = country.name.common.toLowerCase();
            return countryName.startsWith(value)
        });
        setFilteredCountries(newCountries);
    }

    return (
    <>
        <Container>
            <Col md={{ span: 6, offset: 3 }}>
                <Card>
                    <Card.Body>
                    <Card.Title>Country List</Card.Title>                          
                        <Search onSearch={handelSearch} />
                    </Card.Body>
                </Card>
            </Col>
        </Container>
      <br/>
      {isLoading&&<h2>Loading....</h2>}
      {error && <h2>{error.message}</h2>}
        <CountriesList countries={filteredCountries} onRemoveCountry={handelRemoveCountry} />




    </>
  )
}

export default CountriesHome
