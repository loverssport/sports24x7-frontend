import React, {useState} from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaYoutube, FaYoutubeSquare} from 'react-icons/fa';
import "./style.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">sportsLoverz</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
        <a href="/about">News</a>
        <a href="/service">Ranking</a>
        <a href="/players">Events</a>
        <a href="/legends">Legends</a>
        <a href="/contact">Contact</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
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