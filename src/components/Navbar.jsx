import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import avatarImage from "../assets/solomon-miller-profile-image.png";
import {
  AiOutlineCalendar,
  AiOutlineCaretDown,
  AiOutlineBell,
} from "react-icons/ai";

//Funtions
function Navbar() {
  return (
    <Nav>
      <div className="title">
        <h1>Dashboard</h1>
      </div>
      <div className="notification">
        <div className="date">
          <AiOutlineCalendar />
          <span>Jan 18, 2022</span>
        </div>
        <div className="icon">
          <BiSearch />
          <span>|</span>
          <AiOutlineBell />
          <span>|</span>
          <div className="image">
            <img src={avatarImage} alt="profile" />
          </div>
          <AiOutlineCaretDown />
        </div>
      </div>
    </Nav>
  );
}

export default Navbar;

//Styles
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  .title {
    h1 {
      margin-left: 0.5rem;
      color: black;
      font-weight: bold;
      margin-top: 1rem;
    }
  }
  .notification {
    display: flex;
    align-items: center;
    margin-top: -10px;
    .date {
      background-color: #f8f9fe;
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      border-radius: 1rem;
      svg {
        color: black;
      }
      span {
        color: black;
      }
    }
    .icon {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      svg {
        color: black;
      }
      span {
        color: black;
      }
      .image {
        display: flex;
        gap: 1rem;
        img {
          height: 2.5rem;
          width: 2.5rem;
          border-radius: 3rem;
        }
      }
    }
  }
`;
