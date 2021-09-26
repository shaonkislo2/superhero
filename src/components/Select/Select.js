import React from 'react';
import './Select.css'
 

const Select = (props) => {
    const {select} = props ||{}

    const totalReducer = (prevValue,currentValue)=> prevValue + currentValue.salary 

    const total= select.reduce (totalReducer , 0)

    console.log(select);
    return (
        <div>
            <h2> <i class="fas fa-user"></i>Actor Added: {select.length}  </h2>
            <h2>Total Salary:$ {total}</h2>

            <ul>
                {
select.map(actor => <li>{actor.name}</li>)
                }
                
            </ul>
            
        </div>
    );
};

export default Select;