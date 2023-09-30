import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../constants/constants";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Searched() {
    const [searched, setsearched] = useState([])
    const param = useParams();

    useEffect(()=>{
        getSearched(param.search)
        console.log(param.search)
    },[param.search])
    
    const getSearched = async (name) => {
        console.log(name)
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}`);
        const recipies = await data.json();
        console.log(recipies)
        setsearched(recipies.results);
        
    };
   
    return (
    <Grid>
        
    {searched.map(item=>{
        return(
            <Card key={item.id}>
            <Link to={"/recipie/" + item.id}>
                <img src ={item.image} alt={item.title} />
                <h4>{item.title}</h4>
            </Link>
        </Card>
    );
})}
</Grid>
);
}
const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 3rem;
margin-top: 5%;
` 
const Card = styled.div`
img {
width: 100%;
border-radius: 2rem;
}
a {
text-decoration: none;
}
h4 {
text-align: center;
padding: 1rem;
}
`
export default Searched