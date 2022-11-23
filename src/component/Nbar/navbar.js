import React from 'react'
import "./style.css"
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <span className="nav-logo">sportsLoverz</span>
      <div className="nav-items">
        <Link to="/home">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/ranking">Ranking</Link>
        <Link to="/players">Events</Link>
        <Link to="/legends">Legends</Link>
        <Link to="/contact">Contact</Link>
      </div>

    </div>
  )
}

export default Navbar;


// import styled from "@emotion/styled"

// export const NavWrapper = styled.ul`
//     list-style-type: none;
//     margin: 0;
//     padding: 0;
//     overflow: hidden;
//     background-color: #333;
// `;

// export const NavListWrapper = styled.ul`
//     display: block;
//     color: white;
//     text-align: center;
//     padding: 14px 16px;
//     text-decoration: none;
// `;