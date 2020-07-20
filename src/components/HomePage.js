import React from "react";
import crispy from '../images/Yummypizza.jpeg'
import styled from "styled-components";
function HomePage(){
//Set up background image 

return(
   <div>
  <HomeContainer>

   <h2>Your Favorite Food Delivered while Coding.</h2>
  </HomeContainer>
  </div>


)

};
const HomeContainer = styled.div`
width: 100%;
height: 800px;
background-Image: url(${crispy});
background-size: cover;
background-repeat: no-repeat;
background-position: 50% 60%;
display: flex;
justify-content: center;
align-items: center;
color: white;

h2{
  width: 50%;
  text-align: center;
  font-size: 2rem;
  backdrop-filter: brightness(40%);
  
}

`;


export default HomePage;