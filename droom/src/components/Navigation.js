import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";



const Nav = props => {
  return (

    <Navigator>

  
            <NavaLinks>

            <Navalogo>DROOM 4</Navalogo>
          
          <NavATags>
               <Router>
                      <Link to =''> <Nava>Home</Nava></Link>
                      
                      <Link to="/register"><Nava>Register </Nava></Link>
                   
                       <Link to="/jobform"><Nava>App </Nava></Link>
                       
                      <Link to="/"><Nava>Team</Nava></Link>
              
                      <Link to="/"><Nava>Contacto</Nava> </Link>
               </Router>
            
               
          </NavATags>
        
            </NavaLinks>  
                
        
         </Navigator>

  );
};

export default Nav;



const Navigator = styled.div`
  height: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
  top: 0;
  position: sticky;
  display: flex;
  align-items: center;
  background: white;
`;

const Navalogo = styled.div`
  width: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-size: 14px;
  font-weight: 700;
  color: #032741;
  `;

  
const Log = styled.div`
width: 300px;
height: 50px;

`;

const NavaLinks = styled.div`
display: flex;
justify-content: space-between;
width: 1000px;
height: 60px;
margin: 0 auto;

`;


const NavATags = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;


const Nava = styled.div`
color: #032741;
font-weight: 600;
letter-spacing: 1.1px;
text-transform: none;
margin-right: 25px;
font-size: 0.8rem;
text-transform: uppercase;

  
  &:hover {
    color: #db74ff;
    border-bottom: 2px solid #3dade2;
  }
`;

const Button = styled.form`
  width: 150px;
  background: #222222;
  height: 50px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;


 
 &:hover {
  background-color: fff;
  border-bottom: 1px solid white;
}
`;

