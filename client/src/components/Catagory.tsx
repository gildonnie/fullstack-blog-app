import React, { ChangeEvent, useState, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import axios, { AxiosResponse } from 'axios';
import {useAppSelector, useAppDispatch} from '../store/hooks'
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
 import { Post } from '../types';
import { getCatagory, setCatagory} from '../store/catagorySlice';
import { RootState } from '../store';
const Catagorywrapper = styled.div`
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

function Catagory() {
  const { id } = useParams();
  const [catagories, setCatagories] = useState([]);
  const [newCatagory, setNewCatagory] = useState('');
  const [selectedCatagory, setSelectedCatagory] = useState('');
  const dispatch = useAppDispatch();
  // const catagory = useSelector(getCatagory);
  const { Catagory } = useAppSelector((state: RootState) => state.catagory, shallowEqual);

  useEffect(() => {
    dispatch(getCatagory());
  },[dispatch])
  useEffect(() =>{
    console.log(Catagory)
  })

  useEffect(() => {
    axios.get('http://localhost:5000/blog/categories')
      .then((response: AxiosResponse) => {
        console.log(response.data);
        setCatagories(response.data.posts);
      });
  }, []);

  // useEffect(() => {
  //   const response = async () => {
  //     const res = await fetch('http://localhost:3000/post/');
  //     const data = await res.json();
  //     setCatagories(data);
  //     console.log(data)
  //   };
  //   response();
  // }, []);

  const handleCatagory = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCatagory(e.target.value);
  };

  const viewCatagoryPosts = () => {
    dispatch(setCatagory(selectedCatagory));
  };

  const addNew = () => {
    setNewCatagory('');
  };

  return (
    <Catagorywrapper>
      <div className='byCtagory'>
        <h1>View By Catagory</h1>
        <select onChange={handleCatagory}>
          <option value="">All</option>
          {catagories && catagories.map((kitten) => {
            return <option key={id}>{kitten}</option>;
            // <option  key={index}>{index.id}</option>;
          })}

        </select>
        <button type="button" onClick={viewCatagoryPosts}>
          View Catagory Post
        </button>
      </div>
      <div className='newCatagory'>
        <h1>Add New Catagory</h1>
        <input
          type="Catagory Name"
          value={newCatagory}
          onChange={(e) => setNewCatagory(e.target.value)}
        />
        <button type="button" onClick={addNew}>
          Add Catagory
        </button>
      </div>
    </Catagorywrapper>
  );
}

export default Catagory;