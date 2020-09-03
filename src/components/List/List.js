import React from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import Course from '../Course/Course';
import Counter from '../Counter/Counter';

const List = () => {
    const allCourse = fakeData.map(course => {
        course.isTaken = false;
        return course;
    })
    const [courses, setCourses] = useState(allCourse);
    const [cart, setCart] = useState([]);

    const handleAddBtn = (course, status) => {
        if(status === 'notTaken'){
            setCart([...cart, course]);
        }
        else{
            setCart(cart.filter(sub => sub.id !== course.id));
        }

        const updateCourseStatus = courses.map(sub => {
            if(sub.id === course.id){
                sub = {...sub, isTaken: !sub.isTaken};
            }
            return sub;
        })
        setCourses(updateCourseStatus);
    }

    return (
        <div className="p-2 p-md-5">
            <h1 className="text-center pb-3">Explore With Professor Panda</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-lg-3 row-cols-sm-2">
                    {
                        courses.map(course => <Course course={course} handleAddBtn={handleAddBtn}></Course>)
                    }
                </div>
            </div>
            <Counter cart={cart} handleAddBtn={handleAddBtn}></Counter>
        </div>
    );
};

export default List;