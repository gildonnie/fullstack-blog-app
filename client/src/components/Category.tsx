// /* eslint-disable no-underscore-dangle */
// /* eslint-disable no-unused-vars */
// /* eslint-disable no-shadow */
// import React, { ChangeEvent, useState, useEffect } from 'react';
// import { shallowEqual, useDispatch, useSelector } from 'react-redux';
// import axios, { AxiosResponse } from 'axios';
// import styled from 'styled-components';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useAppSelector, useAppDispatch } from '../store/hooks';
// import { CategoryData } from '../types';
// import { getCategory, setCategory } from '../store/categorySlice';
// import { RootState } from '../store';

// const Categorywrapper = styled.div`
//   padding: 1rem 0;
//   margin-left: 10%;
//   margin-top: 7rem;
//   text-align: center;
//   button {
//     margin: 0.25rem 0;
//   }
//   input {
//     border-radius: 2px;
//     select {
//       width: 11rem;
//       border-radius: 3px;
//       text-align: center;
//       background: #AFB9C5;
//     }
//   }
//   button {
//     margin-top: 1rem;
//     display: flex;
//     margin-left: 8rem;
//   }
// `;

// function Category() {
//   const { _id } = useParams();
//   const [categories, setCategories] = useState<CategoryData[]>([]);
//   const [newCategory, setNewCategory] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const dispatch = useAppDispatch();
//   const { Category } = useAppSelector((state: RootState) => state.category, shallowEqual);

//   useEffect(() => {
//     dispatch(getCategory());
//   }, [dispatch]);

//   useEffect(() => {
//     axios.get<CategoryData[]>('http://localhost:5000/blog/categories')
//       .then((response: AxiosResponse) => {
//         setCategories(response.data.categories);
//       });
//   }, []);

//   const handleCategory = (e: ChangeEvent<HTMLSelectElement>) => {
//     setSelectedCategory(e.target.value);
//   };

//   const viewCategoryPosts = () => {
//     dispatch(setCategory(selectedCategory));
//   };

//   const addNew = () => {
//     setNewCategory('');
//   };

//   return (
//     <Categorywrapper>
//       <div className="byCtagory">
//         <h1>View By Catagory</h1>
//         <select onChange={handleCategory}>
//           <option value="">All</option>
//           {categories.map((category) => {
//             if (category.category !== undefined && category.category.length > 1) {
//               return <option key={category._id}>{category.category}</option>;
//             }
//             return null;
//           })}
//         </select>
//         <button type="button" onClick={viewCategoryPosts}>
//           View Category
//         </button>
//       </div>
//       <div className="newCatagory">
//         <h1>Add New Category</h1>
//         <input
//           type="Catagory Name"
//           value={newCategory}
//           onChange={(e) => setNewCategory(e.target.value)}
//         />
//         <button type="button" onClick={addNew}>
//           Add Category
//         </button>
//       </div>
//     </Categorywrapper>
//   );
// }

// export default Category;