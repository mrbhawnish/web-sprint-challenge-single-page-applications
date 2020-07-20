import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

const WrapperDiv = styled.div`
    width: 100%;
    height: 100%;
    background-color: black;

    :hover {
        border-bottom-left-radius: 50%;
        background: gray;
       }
       
      .nav{
          width: 100%;
          height: 50px;
          display: flex;
          align-items: center;
          align-items: space-between;
          justify-content: space-between;
          justify-content: flex-end;

          h1{
            margin-right: 50%;
            float: left;
            color: white;
          }
        }
        .navLinks{
            font-size: 20px;
            color: white;
            padding: 10px;
            margin: 0 20px;
            text-decoration: none;
            :hover{
                border-radius: 4%;
                font-size: 22px;
                background: lightgray;
            }
        }
    }
    `;
function Header() {

    return(
    <div className="header">
    
  <WrapperDiv>

      <div className="navbar">
         <nav className="nav">
           <h1>Lambda Eats</h1>
           
           <Link className="navLinks" to="/"> Home</Link>

           <Link className="navLinks" to="/pizza"> Order</Link>

         </nav>

       </div>

    </WrapperDiv>
    </div>
    )

};




export default Header;




