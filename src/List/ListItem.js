import React from "react";
import { Link } from "react-router-dom";


export default function ListItem(Props){
    const {foood} = Props;
    return (
  <div>
   
    <div className="card h-100">
    <div className="box">


      <div className="card-body">
      <div className="content">

        <h5 className="card-title"><i class="fas fa-tv"></i>{foood.name}</h5>

      </div>
        <Link to={"/List/" + foood.id } className="btnnnn btn btn-warning">Click Here</Link>
      </div>
      
    </div>



   </div>         
  </div>

    )
}