import React, { useState } from 'react';
import styled from 'styled-components';

const Catagorywrapper = styled.div`
  color: lightblue;
  padding: 1rem 0;
  margin-right: 1rem;
  margin-top: 7rem;
  text-align: center;
  button {
    margin: 0.25rem 0;
  }
  h3{
    color: black;
  }
`;
function Catagory() {
  const [catagory, setCatagory] = useState('All');

  const handleChange = (event) => {
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
