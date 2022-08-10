import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';

const Catagorywrapper = styled.div`
  padding: 1rem 0;
  margin-left: 10%;
  margin-top: 7rem;
  text-align: center;
  button {
    margin: 0.25rem 0;
  }
  input {
    border-radius: 2px;
    select {
      width: 11rem;
      border-radius: 3px;
      text-align: center;
      background: #AFB9C5;
    }
  }
  button {
    margin-top: 1rem;
  }
`;
function Catagory() {
  const [catagory, setCatagory] = useState('All');

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCatagory(event.target.value);
  };
  return (
    <Catagorywrapper>
      <h3>VIEW CATEGORY</h3>
      <form>
        <div className="CatagoryInput">
          <select value={catagory} onChange={handleChange}>
            <option>All</option>
            <option>Pirate</option>
            <option>Publick</option>
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
