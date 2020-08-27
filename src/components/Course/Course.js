import React from 'react';
import './Course.css';

const Course = (props) => {
    const {name, image, teacher, price,isTaken, id, student, seat, year} = props.course;
    const handleAddBtn = props.handleAddBtn;

    const updateBtn = () => {
        if(isTaken){
            return (
                <button className="btn btn-outline-danger d-block mx-auto mb-3 rounded-pill" onClick={() => handleAddBtn(props.course, 'taken')}><i class="fas fa-trash"></i> Remove Course</button>
            )
        }
        else{
            return (
                <button className="btn btn-outline-primary d-block mx-auto mb-3 px-4 rounded-pill" onClick={() => handleAddBtn(props.course, 'notTaken')}>Enroll Now</button>
            )
        }
}

    return (
        <div className="course col mb-4">
            <div className="card h-100">
                <div className="img-container">
                    <img src={image} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <div className="text-center pb-2">
                        <h3 className="card-title">{name}</h3>
                        <h6>by: {teacher}</h6>
                        <h5><i class="fas fa-user-graduate"> {student}</i></h5>
                        <br/>
                        <h2>${price}</h2>
                    </div>
                </div>
                {updateBtn()};
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