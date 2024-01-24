import Catogories from "./components/Catogories";
import Search from "./components/Search";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
           <BrowserRouter>
           <Nav>
           <GiKnifeFork></GiKnifeFork>
            <Logo to={'/'} > Fooddiee</Logo>{" "}
            <span>Search your favorite recipie</span> 
                
           </Nav>
            <Search/>
            <Catogories/>
            <Pages />
            </BrowserRouter>
        </div>
    );
}

const Logo = styled(Link)`
text-decoration:none;
font-size:1.5rem;
font-weight:400;
font-family:'Lobster Two',cursive;
`;
const Nav = styled.div`
padding:4rem 0rem;
display:flex;
justify-content:flex-start;
align-items:center;
svg{
    font-size:2rem;
}
`;
export default App;
