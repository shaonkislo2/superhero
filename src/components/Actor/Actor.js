import React from 'react';
import './Actor.css'

const Actor = (props) => {
    const {name,img,role,age,country,salary} =props.actor || {}
    
    return (
        <div className="col-md-4  ">
            <div className="card  " style={{width: "300px"}}>
  
  <div className="card-body starStyle ">
  <img style={{width:"100px"}} src={img} className="card-img-top" alt="..."/>
    <h5 className="card-title">{name}</h5>
    <h6>Role: {role}</h6>
    <h6>Age: {age}</h6>
    <h6>Country: {country}</h6>
    <h6>Salary:$ {salary}</h6>   
    <br />
    <button
            onClick={()=> props.handleAddActor(props.actor)}
            className="btn btnClass"> <i class="fas fa-video"></i> Select For Series
    </button>
 
  </div>
</div>
        </div>
    );
};

export default Actor;