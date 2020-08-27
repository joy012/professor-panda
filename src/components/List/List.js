import React from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import Course from '../Course/Course';

const List = () => {
    const [courses, setCourses] = useState(fakeData);

    return (
        <div className="p-4 p-md-5">
            <h2 className="text-center pb-3 display-4">Online Courses</h2>
            <div className="row row-cols-1 row-cols-lg-3 row-cols-sm-2">
                {
                    courses.map(course => <Course course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default List;