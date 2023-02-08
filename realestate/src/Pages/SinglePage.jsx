import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
 
const getData = async (id) => {
  return axios.get(`https://trouper-org.onrender.com/products/${id}`);
};

export const SinglePage = () => {
  const {id} = useParams();
 
  const [data,setdata] = useState([]);

  useEffect(() => {
    getData(id).then((res) =>
     setdata(res)
    );
  }, [id]);

 
  return (
    <>
      <li>{data.email}</li>
  
    </>
 
 )



}
 