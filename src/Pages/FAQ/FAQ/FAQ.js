import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <div className='mt-4 col d-flex justify-content-center'>
            <Accordion style={{ width: '64rem' }} defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Where are we from?</Accordion.Header>
                    <Accordion.Body>
                        We are a small company from Bangladesh.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why join us?</Accordion.Header>
                    <Accordion.Body>
                        We promise the best service out there. We have weekly live session and hundreds of on demand videos that you have full access to forever.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Will I lose access to my purchase?</Accordion.Header>
                    <Accordion.Body>
                        No you will never lose access to your purchase unless there is a global network outage. In our mobile app we also have download feature.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Why is everything so expensive?</Accordion.Header>
                    <Accordion.Body>
                        We are a small team working tirelessly to provide new courses and new content to the existing courses. You purchase is not just a one time deal. The purchase guarantees that you will get service from us for years.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQ;