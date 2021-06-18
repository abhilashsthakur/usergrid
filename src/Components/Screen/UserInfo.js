import React from 'react'
import { defaultImage} from "./config.js";
import Image from "react-bootstrap/Image";

function UserInfo(props) {
  console.log(props)
    return (
        <>
        <div className="row">
        <div className="col-md">
        {props.picture !== "" 
         ? <Image src={props.picture} fluid />
         : <Image src={defaultImage} fluid /> 
        }
        </div>
        <div className="col-md">
          <table className="table table-striped">
            <thead></thead>
            <tbody>
              <tr>
                <td>Title</td>
                <td>{props.title}</td>
              </tr>
              <tr>
                <td>Category</td>
                 <td>{props.category}</td> 
              </tr>
              <tr>
                <td>Description</td>
                 <td>{props.description}</td> 
              </tr>
              <tr>
                <td>amount</td>
                 <td>{props.amount}</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
      </>
    )
}

export default UserInfo
