import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles,GiChopsticks} from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Catogories() {
    return (
       
            <List>
                <Slink to={'/cuisine/Italian'}>
            <div>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </div>
               </Slink>
               <Slink to={'/cuisine/American'}>
            <div>
                <FaHamburger />
                <h4>American</h4>
            </div>
            </Slink>
            <Slink to={'/cuisine/Thai'}>
            <div>
                <GiNoodles />
                <h4>Thai</h4>
            </div>
            </Slink>
            <Slink to={'/cuisine/Japanese'}>
            <div>
                <GiChopsticks />
                <h4>Japanese</h4>
            </div>
            </Slink>
            </List>
        
    );
}

const List = styled.div`
display:flex;
justify-content:center;
margin:2rem 0rem;



`;
const Slink= styled(NavLink)`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:50%;
margin-right:2rem;
text-decoration:none;
background:linear-gradient(35deg,#494949,#313131);
width:6rem;
height:6rem;
cursor:pointer;
transform:scale(0.8);
h4{
    color:white;
    font-size:1rem;
}
svg{
    color:white;
    font-size:1.8rem;
}
&.active{
    background:linear-gradient(to right,#f27121,#e94057);
    svg{
        color:white;
    }
    h4{
        color:white;
    }
}
`;
export default Catogories;
