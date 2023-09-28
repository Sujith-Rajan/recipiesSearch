import { useEffect, useState} from "react";
import React from "react";
import { API_KEY } from "../constants/constants";
import styled from "styled-components";
import { Splide,SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';

function Popular() {
    const [popular, setPopular] = useState([])

 
    useEffect(()=>{
        getPopular();

    },[])

    const getPopular = async ()=>{
        const check = localStorage.getItem('popular');
        if(check){
            setPopular(JSON.parse(check));

        }else{
            const api = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=10`)
             const data = await api.json();
             localStorage.setItem('popular',JSON.stringify(data.recipes))
             console.log(data.recipes)
       setPopular(data.recipes)
        }
       
      
       
    }
  
    
    
        return(
            <Wrapper>
               
                <h3>Popular Recipies</h3>
                <Splide options={{
                    perPage:4,
                    arrows:false,
                    pagination:false,
                    grag:'free',
                    gap:'5rem'}}>
                {popular.map(recipes=>{
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
        )

   
  

}

const Wrapper =styled.div`
margin:4rem 0rem;
`;

const Card =styled.div`
min-height:20rem;
width:15rem;
border-radius:2rem;
overflow:hidden;
position:relative;

img{
    border-radius:1rem;
   
    position:absolute;
    left:0;
    width:100%;
    height:90%;
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
    height:40%;
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
export default Popular