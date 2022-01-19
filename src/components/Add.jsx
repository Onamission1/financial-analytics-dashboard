import React from "react";
import styled from "styled-components";

function Add() {
  return (
    <Section>
      <div>
        <button>Add Product</button>
      </div>
    </Section>
  );
}

export default Add;
const Section = styled.section`
  padding-top: 10px;
  display: flex;
  gap: 1rem;
  div {
    button {
      margin-left: 50px;
      border-radius: 0.5rem;
      padding: 1rem 6.6rem;
      border: none;
      cursor: pointer;
      background-color: #d4e0ff;
      color: black;
      font-weight: bold;
      &:hover {
        background-color: #94e4d9;
      }
    }
  }
`;
