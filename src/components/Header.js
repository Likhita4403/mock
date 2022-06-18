import React,{useState} from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark} from '@fortawesome/free-solid-svg-icons'
import {selectCars} from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {

  const [burgerStatus,setBurgerStatus]=useState(false);
  const cars=useSelector(selectCars)
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>

      <Menu>
        {cars &&cars.map((car,index)=>(
        <a key={index} href="#">{car}</a>))}
      </Menu>
      <RightMenu style={{margin:"25px"}}>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <FontAwesomeIcon icon={faBars} onClick={()=>setBurgerStatus(true)} style={{cursor:'pointer'}}/>      
      </RightMenu>
      <BurgerNav show={burgerStatus}>
      <CloseWrapper>
      <FontAwesomeIcon icon={faXmark} onClick={()=>setBurgerStatus(false)} style={{fontWeight:"600",cursor:'pointer'}} />
      </CloseWrapper>
      {cars &&cars.map((car,index)=>(
        <li key={index} ><a href="#">{car}</a></li>))}
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadster</a></li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content:space-between;
  paddding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index:1;
`;

const Menu = styled.div`
  min-height: 60px;
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  a {
    text-transform: uppercase;
    font-weight: 700;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media(max-width:768px){
    display:none;
  }
`;
const RightMenu = styled.div`
  align-items: center;
  display: flex;
  a{
    text-transform: uppercase;
    font-weight: 700;
    margin-right: 10px;
  }
`;

const BurgerNav=styled.div`
  position:fixed;
  top:0;
  bottom:0;
  right:0;
  background:white;
  width:300px;
  z-index:16;
  list-style:none;
  padding:20px;
  display:flex;
  flex-direction:column;
  text-align:start;
  cursor:pointer;
  transform: ${props=>props.show?'translateX(0)':'translateX(100%)'};
  
  transition:transform 0,2s ease-in;
  li{
    padding:15px 0;
    border-bottom: 1px solid rgba(0,0,0,0.2);
  }

  a{
    font-weight:600;
  }

`
const CloseWrapper=styled.div`
display:flex;
justify-content:flex-end;
font-size:1.5rem;
cursor:pointer;
`