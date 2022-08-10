import React, { ChangeEvent, useState, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import axios, { AxiosResponse } from 'axios';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { CategoryData } from '../types';
import { getCategory, setCategory } from '../store/categorySlice';
import { RootState } from '../store';

const Categorywrapper = styled.div`
  color: lightblue;
  padding: 1rem 0;
  margin-right: 100px;
  text-align: center;
  byCtagory{
    color:black;
  };
  newCatagory{
    color:black;
  };
  button {
    margin: 0.25rem 0;
    width: 100%;
  }
  h1{
    color:black;
  }
`;

function Category() {
  const { _id } = useParams();
  const [categories, setCategories] = useState<CategoryData[]>([]);
  const [newCategory, setNewCategory] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const dispatch = useAppDispatch();
  const { Category } = useAppSelector((state: RootState) => state.category, shallowEqual);

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  useEffect(() => {
    axios.get<CategoryData[]>('http://localhost:5000/blog/categories')
      .then((response: AxiosResponse) => {
        setCategories(response.data.categories);
      });
  }, []);

  const handleCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const viewCategoryPosts = () => {
    dispatch(setCategory(selectedCategory));
  };

  const addNew = () => {
    setNewCategory('');
  };

  return (
    <Categorywrapper>
      <div className='byCtagory'>
        <h1>View By Catagory</h1>
        <select onChange={handleCategory}>
          <option value="">All</option>
          {categories.map((category) => {
            if (category.category !== undefined && category.category.length > 1) {
              return <option key={category._id}>{category.category}</option>;
            }
            return null;
          })}
        </select>
        <button type="button" onClick={viewCategoryPosts}>
          View Category Post
        </button>
      </div>
      <div className="newCatagory">
        <h1>Add New Category</h1>
        <input
          type="Catagory Name"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button type="button" onClick={addNew}>
          Add Category
        </button>
      </div>
    </Categorywrapper>
  );
}

export default Category;
