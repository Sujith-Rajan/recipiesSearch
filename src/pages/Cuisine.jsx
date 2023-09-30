import React, { useEffect } from 'react'
import { API_KEY } from '../constants/constants'

import { useParams,Link} from 'react-router-dom'
import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'



function Cuisine() {
    const [cuisine, setCuisine] = useState([])
    let param= useParams(); 
    useEffect(()=>{
       getCuisine(param.type);
        console.log(param.type)
    },[param.type])
    

    const getCuisine = async (name)=>{
        
       
      
        const check = localStorage.getItem('cuisine');
        if(check){
            setCuisine(JSON.parse(check))
        }
        else{
           
            const data = await fetch (`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${name}`)
            
             const recipies = await data.json();
             setCuisine(recipies.results)
            //  console.log(recipies)

        }
        
          
    }
    return(
        <div>
       {/* <Catogories/> */}

    
    <Grid 
    animate={{opacity:1}}
    initial={{opacity: 0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}
    >
        
        {cuisine.map((item)=>{
            return(
                <Card key={item.id}>
                    <Link to={'/recipie/' + item.id}>
                    <img src={item.image} alt={item.image} />
                    <h4>{item.title}</h4>
                    </Link>
                </Card>
            )
        })}
       
    </Grid>
  
  </div>
  )
}

const Grid = styled(motion.div)`
display:grid;
grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
grid-gap:3rem;
`;
const Card = styled.div`
img{
    width:100%;
    border-radius:2rem;
}
a{
    text-decoration:none;
}
h4{
    text-align:center;
    padding:1rem;
}
`;
export default Cuisine