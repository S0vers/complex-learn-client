import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
const SideBar = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('https://complex-edu-server.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <h4>Total Courses:{courses.length}</h4>
            <div>

                <ButtonGroup vertical>
                    {
                        courses.map(course => <p key={course.id}>
                            <Button variant="primary" style={{ textDecoration: 'none', backgroundColor: '#5bbcfc', border: 'none' }}> <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/coursedetail/${course.id}`}>{course.name}</Link></Button>
                        </p>)
                    }
                </ButtonGroup>
            </div>
        </div>
    );
};

export default SideBar;