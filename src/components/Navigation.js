import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";



const Nav = props => {
  return (

    <Navigator>  
            <NavaLinks>

            <Navalogo><LightBlue>droom</LightBlue> <DarkBlue>APP</DarkBlue></Navalogo>
          
          <NavATags>
            
                      <a href="https://trusting-villani-0b8d70.netlify.com/"><Nava> Home</Nava></a> 

                    <Link to="/"><Nava>REGISTER</Nava></Link>
                       <Link to="/jobform"><Nava>ADD JOB</Nava></Link>
                       <Link to="/joboffers"><Nava>JOBS</Nava></Link>
                       
  
        
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
  margin-bottom: 50px;
  background: white;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.16);
`;


const NavaLinks = styled.div`
display: flex;
justify-content: space-between;
width: 1200px;
height: 60px;
margin: 0 auto;
`;

const Navalogo = styled.div`
  display: flex;
  font-size: 1.7rem;
  font-weight: 700;
  color: dodgerblue;
  margin-right: 250px;
  width: 300px;
  height: 50px;
  justify-content: center;
  align-items: center;
  `;

  const LightBlue = styled.div`
  color: dodgerblue;
  margin-right: 2px;
  `;

  const DarkBlue = styled.div`
  color: #3c4257;
  font-weight: 600;
  font-size: 1.5rem;
  margin-top: 2px;
  `;

  
const Log = styled.div`
width: 300px;
height: 50px;

`;



const NavATags = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;


const Nava = styled.div`
text-decoration: none;
color:  #3c4257;
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

