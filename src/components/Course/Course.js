import React from 'react';
import './Course.css';

const Course = (props) => {
    const {name, image, teacher, price,isTaken, id, student, seat, year} = props.course;
    const handleAddBtn = props.handleAddBtn;

    const updateBtn = () => {
        if(isTaken){
            return (
                <button className="btn btn-success d-block mx-auto mb-2 rounded-pill" onClick={() => handleAddBtn(props.course, 'taken')} disabled><i class="fas fa-check-circle"></i> Enrolled</button>
            )
        }
        else{
            return (
                <button className="btn btn-outline-primary d-block mx-auto mb-2 px-4 rounded-pill" onClick={() => handleAddBtn(props.course, 'notTaken')}>Enroll Now</button>
            )
        }
}

    return (
        <div className="course col mb-4">
            <div className="card h-100">
                <div className="img-container">
                    <img src={image} className="card-img-top" alt="..." />
                </div>
                <div className="card-body d-flex flex-column justify-content-between text-center pb-2 px-3">
                    <h4 className="card-title">{name}</h4>
                    <h6 className="card-title">by: {teacher}</h6>
                    <h5 className="card-title"><i class="fas fa-user-graduate"> <span className="text-danger">{student}</span></i></h5>
                    <h2 className="text-success card-title">${price}</h2>
                    {updateBtn()}
                </div>
                <div class="card-footer d-flex justify-content-between">
                    <div>
                        <small class="text-muted font-weight-bold"><i class="far fa-calendar-alt"></i> Start {id} June, {year}</small>
                    </div>
                    <div>
                        <small class="text-muted font-weight-bold"><i class="fas fa-user-friends"></i> {seat} seats</small>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default Course;