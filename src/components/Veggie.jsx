import React from "react";
import { useState,useEffect } from "react";
import { API_KEY } from "../constants/constants";
import styled from "styled-components";
import { Splide,SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';

function Veggie() {
    const[veggie,setVeggie] = useState([])
    useEffect(()=>{
        getVeggie();
    })

    const getVeggie = async()=>{
        const check = localStorage.getItem('veggie');
        if(check){
            setVeggie(JSON.parse(check));

        }else{
            const api = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=10&tags=vegetarian`)
             const data = await api.json();
             localStorage.setItem('veggie',JSON.stringify(data.recipes))
             console.log(data.recipes)
       setVeggie(data.recipes)
        }
    }

    return  <Wrapper>
               
    <h3>Veggie delicious</h3>
    <Splide options={{
        perPage:4,
        arrows:false,
        pagination:false,
        grag:'free',
        gap:'5rem'}}>
    {veggie.map(recipes=>{
        return (
            <SplideSlide key={recipes.id}>
            <Card >
                <p>{recipes.title}</p>
                <Gradient/>
                <img src={recipes.image} alt={recipes.title} />
            </Card>
            </SplideSlide>
        )
     })} 
   </Splide>
   
</Wrapper>
}

const Wrapper =styled.div`
margin:4rem 0rem;
`;

const Card =styled.div`
min-height:25rem;
width:18rem;
border-radius:2rem;
overflow:hidden;
position:relative;

img{
    border-radius:1rem;
   
    position:absolute;
    left:0;
    width:100%;
    height:80%;
    object-fit:cover;
}
p{
    position: absolute;
    z-index:10;
    left:50%;
    bottom:0;
    transform:translate(-50%,0%);
    color:white;
    width:100%;
    text-align:center;
    font-weight:600;
    font-size:1rem;
    height:60%;
    display:flex;
    justify-content:center;
    align-items:center;

}
`;

const Gradient = styled.div`
z-index:3;
position:absolute;
width:100%;
height:100%
background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5))

`;
export default Veggie;
