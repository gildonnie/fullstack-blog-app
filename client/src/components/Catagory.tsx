// import React, { useState,FormEvent } from 'react';
// import styled from 'styled-components';
// import { useDispatch, useSelector, shallowEqual } from 'react-redux';

// const Catagorywrapper = styled.footer`
//   color: lightblue;
//   padding: 1rem 0;
//   margin-right: 100px;
//   text-align: center;
//   .CatagoryInput{
//     width: 100px;
//   }
//   button {
//     margin: 0.25rem 0;
//     width: 100%;
//   }
//   h3{
//     color:black;
//   }
// `;
// function Catagory() {
//   const [catagory, setCatagory] = useState('All');

//   const handleChange = (event) => {
//     setCatagory(e.target.value);
//   };
//   return (
//     <Catagorywrapper>
//       <h3>VIEW CATEGORY</h3>
//       <form>
//         <div className="CatagoryInput">
//           <select value={catagory} onChange={handleChange}>
//             <option>All</option>
//             <option>Privet</option>
//             <option>Public</option>
//             <option>Ketten</option>
//           </select>
//         </div>
//         <button type="submit">VIEW CATAGORY POSTS</button>
//       </form>
//       <h3>ADD A CATEGORY</h3>
//       <form>
//         <div className="CatagoryInput">
//           <input
//             type="text"
//             id="searchTerm"
//             placeholder="Catagory Name"
//           />
//         </div>
//         <button type="submit">ADD.. CATAGORY</button>
//       </form>
//     </Catagorywrapper>
//   );
// }

// export default Catagory;
import React, { ChangeEvent, useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getCategory, setCategory } from '../../store/exampleSlice';

function Catagory() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const dispatch = useDispatch();
  const category = useSelector(getCategory);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:3000/categories/');
      const json = await res.json();
      setCategories(json);
    };
    fetchData();
  }, []);

  console.log(category);

  const handleCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const viewCategoryPosts = () => {
    dispatch(setCategory(selectedCategory));
  };

  const addNew = () => {
    // setCategories((curr) => {
    //   return [...curr, newCategory];
    // });
    setNewCategory('');
  };

  return (
    <div>
      <div>
        <h1>View By Category</h1>
        <select onChange={handleCategory}>
          <option value="">All</option>
          {categories.map((cat: any) => {
            return <option key={cat}>{cat}</option>;
          })}
        </select>
        <button type="button" onClick={viewCategoryPosts}>
          View Category Post
        </button>
      </div>
      <div>
        <h1>Add New Category</h1>
        <input
          type="Category Name"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button type="button" onClick={addNew}>
          Add Category
        </button>
      </div>
    </div>
  );
}

export default Catagory;
