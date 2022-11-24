import React from 'react'
import "./style.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <span className="nav-logo">sportsLoverz</span>
      <div className="nav-items">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/ranking">Ranking</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/legends">Legends</NavLink>
        <NavLink to="/contact">Contact</NavLink>
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