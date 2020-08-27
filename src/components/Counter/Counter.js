import React from 'react';
import './Counter.css';

const Counter = (props) => {
    const courseTaken = props.cart;
    const totalCost = courseTaken.reduce((total, course) => total + course.price, 0);
    return (
        <div className="container counter text-white my-4 text-center">
            <h2 className="py-3">Courses Added To Cart: {courseTaken.length}</h2>
            {
                courseTaken.map(course => 
                    <div>
                        <div className="course d-flex justify-content-between align-items-center">
                        <img src={course.image} className="course-img" alt="..." />
                        <h4>{course.name}</h4> 
                        <h5>$ {course.price}</h5>
                    </div>
                    <br/>
                    </div>
                )
            }
            <h3 className="pb-2">Total Cost: $ {totalCost}</h3>
        </div>
    );
};

export default Counter;