import React, { useEffect, useState } from 'react';
import Actor from '../Actor/Actor';
import Select from '../Select/Select';
import './WebSeries.css'

const WebSeries = () => {

    const [actors, setActors]=useState([]);
    // this usestate for selecting
    const [select, setSelect] = useState([]);

    const handleAddActor= (actor)=>{
        const newSelect = [...select, actor];
        setSelect(newSelect);
    }

    useEffect ( ()=>{
        fetch('/WebSeries.JSON')
        .then(res => res.json())
        .then(data => setActors(data))
    },[])
    return (
        <div className="container ">
            <div className="row ">

                 {/* Actor Load    */}

                <div className="col-md-9">
                <div className="row">
                
                    {
                        actors.map(actor =><Actor
                        key={actor.name}
                        actor={actor}
                        handleAddActor={handleAddActor}
                        >
                        </Actor> )
                    }               
                </div>                    
                </div>

                    {/* Select & Calculation */}

                <div className="col-md-3">
                

                <Select
                select={select}
                >    
                </Select>
                
                </div>
            </div>
        </div>
    );
};

export default WebSeries;