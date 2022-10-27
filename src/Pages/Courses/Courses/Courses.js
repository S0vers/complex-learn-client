import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import SideBar from '../SideBar/SideBar';
const Courses = () => {
    const categoryCourses = useLoaderData();
    return (
        <Container className='mt-4'>
            <Row>
                <Col lg="3" className=''>
                    <SideBar></SideBar>
                </Col>
                <Col lg="9">
                    <h1>There are total: {categoryCourses.length} Courses</h1>
                    <Row>
                        {
                            categoryCourses.map(courses =>
                                <Col lg='4' className='mt-4' key={courses.id}>
                                    <CourseCard
                                        key={courses.id}
                                        courses={courses}
                                    ></CourseCard>
                                </Col>
                            )
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;