import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { API_KEY } from '../constants/constants'


function Recipies() {
    const [recipie,setRecipie] = useState([])
    const [activeTab,setActiveTab] = useState("content")
    let param = useParams()
    useEffect(()=>{
        fetchDetails(param.name)
    },[param.name])

    const fetchDetails = async() =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/${param.name}/information?apiKey=${API_KEY}`)
        const detailData = await data.json()
        setRecipie(detailData)
        console.log(detailData)

    }
  return (
    <Warpper>
        <div>
            <h2>
                {recipie.title}
            </h2>
            <img src={recipie.image} alt="" />
        </div>
        <Info>
            <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={()=>setActiveTab("instructions")}>
                Instructions
            </Button>
            <Button className={activeTab === 'ingredeints' ? 'active' : ''} onClick={()=>setActiveTab("ingredeints")}>Ingredeints</Button>
            <div>
                <h3>{recipie.summary}</h3>
            </div>
        </Info>
    </Warpper>
  )
}

const Warpper = styled.div`
margin-top:10rem;
margin-bottom:5rem;
display:flex;
.active{
    background:linear-gradient(35deg,#494949,#313131);
    color:white;
}
h2{
    margin-bottom:2rem;

}
li{
    font-size:1.2rem;
    line-height:2.5rem;
}
ul{
    margin-top:2rem;
}
`;
const Button = styled.button`
padding:1rem 2rem;
color:#313131;
background:white;
border:2px solid balck;
margin-right:2rem;
font-weight:600;
`;

const Info = styled.div`
margin-left:10rem;
`;

export default Recipies