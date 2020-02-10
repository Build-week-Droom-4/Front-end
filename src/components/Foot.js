import React from "react";
import styled from "styled-components";


const Mil = styled.div`
  background: dodgerblue;
`;


const Foot = styled.div`
  margin: 0 auto;
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
  background: dodgerblue;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 400;
  height: 150px;
  margin-top: 60px;
`;

const Order = styled.div`
  display: flex;
  flex-direction: column;
`;

const Foota = styled.div`
  color: white;
  font-weight: 700;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.7rem;

  &:hover {
    background-color: fff;
    border-bottom: 1px solid #68b8ff;
    color: #db74ff;
  }
`;

const Footer = props => {
  return (
  <Mil>
      <Foot>
        <Order>
          <a href="index.html">
            <Foota>Home</Foota>
          </a>
          <a href="#">
            <Foota>Team</Foota>
          </a>
          <a href="#">
            <Foota>Sign In</Foota>
          </a>
        </Order>
  
        <Order>
          <a href="#">
            <Foota>Blog</Foota>
          </a>
          <a href="#">
            <Foota>Careers</Foota>
          </a>
          <a href="#">
            <Foota>Press</Foota>
          </a>
        </Order>
  
        <Order>
          <a href="#">
            <Foota>Contact Us</Foota>
          </a>
          <a href="#">
            <Foota>support@droom.com</Foota>
          </a>
          <a href="#">
            <Foota>press@droom.com</Foota>
          </a>
        </Order>
  
        <Order>
          <a href="#">
            <Foota>Media</Foota>
          </a>
  
          <a href="#">
            <Foota>Twitter</Foota>
          </a>
          <a href="#">
            <Foota>Instagram</Foota>
          </a>
        </Order>
      </Foot>
  </Mil>
  );
};

export default Footer;
