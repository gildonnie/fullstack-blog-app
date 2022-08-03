import React, { useState,FormEvent } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

const Catagorywrapper = styled.footer`
  color: lightblue;
  padding: 1rem 0;
  margin-right: 100px;
  text-align: center;
  .CatagoryInput{
    width: 100px;
  }
  button {
    margin: 0.25rem 0;
    width: 100%;
  }
  h3{
    color:black;
  }
`;
function Catagory() {
  const [catagory, setCatagory] = useState('All');

  const handleChange = (event) => {
    setCatagory(e.target.value);
  };
  return (
    <Catagorywrapper>
      <h3>VIEW CATEGORY</h3>
      <form>
        <div className="CatagoryInput">
          <select value={catagory} onChange={handleChange}>
            <option>All</option>
            <option>Privet</option>
            <option>Public</option>
            <option>Ketten</option>
          </select>
        </div>
        <button type="submit">VIEW CATAGORY POSTS</button>
      </form>
      <h3>ADD A CATEGORY</h3>
      <form>
        <div className="CatagoryInput">
          <input
            type="text"
            id="searchTerm"
            placeholder="Catagory Name"
          />
        </div>
        <button type="submit">ADD.. CATAGORY</button>
      </form>
    </Catagorywrapper>
  );
}

export default Catagory;
