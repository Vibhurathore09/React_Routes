import React from "react";
import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
const UserDetails = () => {
  const { userId } = useParams(); //to get all the paramter
  const [data, setData] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("name"));
  console.log(searchParams.get("age"));
    
    const Reset = ()=>{
        setSearchParams({name : 'Vibhu',age : '12'});
    }

  useEffect(() => {
    async function getData() {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=1&idStarts=${userId}`
      );
      const res = await get.json();
      setData(res[0]);
    }
    getData();
  }, []);
  return (
    <div className="user">
      <h4>{data.id}</h4>
      <img src={data.imageUrl} />
      <h4>{data.firstName}</h4>
      <h4>{data.lastName}</h4>
      <h4>{data.email}</h4>
      <h4>{data.contactNumber}</h4>
      <h4>{data.age}</h4>
      <h4>{data.dob}</h4>
      <button onClick={Reset}> reset </button>
    </div>
  );
};

export default UserDetails;
