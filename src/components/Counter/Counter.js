import React from 'react';
import './Counter.css';

const Counter = (props) => {
    const courseTaken = props.cart;
    const handleAddBtn = props.handleAddBtn;
    let totalPrice = courseTaken.reduce((total, course) => {
        const previousTotal = parseInt((total).split(',').join(''));
        const price = course.price;
        const result = (previousTotal + price).toLocaleString();
        return result;
    },'0');

    return (
        <div className="container counter text-white my-4 text-center">
            <h2 className="py-3">Courses Added To Cart: {courseTaken.length}</h2>
            {
                courseTaken.map(course => 
                    <div>
                        <div className="course d-flex justify-content-between align-items-center">
                            <img src={course.image} className="course-img" alt="..." />
                            <h5 className="name">{course.name}</h5> 
                            <h6>$ {course.price}</h6>
                            <button className="btn btn-danger d-block mx-auto mb-3 rounded-pill remove-btn" onClick={() => handleAddBtn(course, 'taken')}><i class="fas fa-trash"></i></button>
                        </div>
                        <br/>
                    </div>
                )
            }
            <h3 className="pb-2 d-flex flex-row justify-content-around">
                <span>Total Cost:</span>
                <span>$ {totalPrice}</span>
            </h3>
        </div>
    );
};

export default Counter;