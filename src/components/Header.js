import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

const WrapperDiv = styled.div`
    width: 100%;
    height: 100%;
    background-color: lightgrey;
    border: 2px solid red;

      .nav{
          width: 100%;
          display: flex;
          align-items: space-between;
          justify-content: space-between;
          justify-content: flex-end
           
        }
        .navLinks{
            color: blue;
            padding: 10px;
            margin: 0 20px;
            text-decoration: none;
            :hover{
                background: cyan;
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
        <Link className="navLinks" to="/"> Home</Link>

        <Link className="navLinks" to="/pizzaorder"> Order</Link>

        </nav>
        </div>
     </WrapperDiv>
    </div>
    )

};




export default Header;




