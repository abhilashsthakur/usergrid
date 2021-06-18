import React, { useState, useEffect } from "react";
import { defaultImage,PrimaryIcon,SecondaryIcon} from "./Screen/config.js";
import { NavLink } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Avatar } from "antd";
import { CheckSquareFilled, CloseSquareFilled } from "@ant-design/icons";
import axios from "axios";
import { Container, Col, Row } from "react-bootstrap";



function Grids() {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    getWork();
  }, []);  //[work]
 
  // Funcation for getting data from api
  const getWork = async () => {
    const allWorks = await axios.get("https://insta-stories.herokuapp.com/allwork");
    setWorks(allWorks.data.work);
  };
  console.log(works)
  return (
    <Container style={{ position: "relative", top: "5px" }}>
  
      <Row>
    
      {works.map((eachWork) => (
          <Col key={eachWork._id}>
            <Card  style={{ width: "18rem" }}>

              {/* checking user image is avalible or not */}
              {eachWork.picture !== "" ? (
                <Card.Img variant="top" src={eachWork.picture} />
              ) : (
                <Card.Img variant="top" src={defaultImage} />
              )}

              <Card.Body>
                {/* created the link route */}
                <NavLink to={`/view/${eachWork._id}`}>
                  <Card.Title>{eachWork.title}</Card.Title>
                </NavLink>

                <Card.Text>{eachWork.category} </Card.Text>
                {/* checking for the vaccine */}
                <Card.Text>
                  Vaccined :
                  {eachWork.vaccinated === "yes" 
                  ? <Avatar icon={<CheckSquareFilled style={{ color:"#800000", fontSize: "22px" }}/>}/>
                  : <Avatar icon={<CloseSquareFilled style={{ color: SecondaryIcon, fontSize: "22px" }}/>}/>
                  }
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
        
      </Row>
    </Container>
  );
}

export default Grids;
