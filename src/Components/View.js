import axios from "axios";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import MailForm from "./Screen/MailForm";
import UserInfo from "./Screen/UserInfo";

function View() {
  const [specificWork, setspecificWork] = useState({
     amount: "",
     category: "",
     description: "",
     title: "",
     vaccinated: "",
   });

  //   fetching the user details
  const { _id } = useParams();
  console.log(_id)
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const workDetail = await axios.get(`https://insta-stories.herokuapp.com/work/${_id}`);
    setspecificWork(workDetail.data);
  };
  return (
    <div className="container" style={{ position: "relative", top: "2px" }}>
      
      <UserInfo {...specificWork} />

      <MailForm />
    </div>
  );
}

export default View;
