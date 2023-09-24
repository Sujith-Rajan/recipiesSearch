import { useEffect, useState } from "react";
import { API_KEY } from "../constants/constants";

function Popular() {
    const [popular, setPopular] = useState([])
 
    useEffect(()=>{
        getPopular();

    },[])

    const getPopular = async ()=>{
       const api = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=10`)
       const data = await api.json();
       console.log(data)
       setPopular(data.recipes)
    }
  return  <div>
    
    {popular.map(recipe =>{
        return(
            <div key={recipe.id}>
                <p>{recipe.title}</p>
                
            </div>
        )

    })} 
  </div>

}

export default Popular