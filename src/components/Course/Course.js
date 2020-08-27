import React from 'react';
import './Course.css';

const Course = (props) => {
    const {name, image, teacher, price} = props.course;
    return (
        <div className="course col mb-4">
            <div className="card h-100">
                <div className="img-container">
                    <img src={image} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <div className="text-center pb-2">
                        <h3 className="card-title">{name}</h3>
                        <p><small><i className="fas fa-user"></i> {teacher}</small></p>
                        <br/>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default Course;