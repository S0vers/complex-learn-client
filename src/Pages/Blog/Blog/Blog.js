import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const Blog = () => {
    return (
        <div className='mt-4 col d-flex justify-content-center'>
            <Accordion style={{ width: '64rem' }} defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>what is cors?</Accordion.Header>
                    <Accordion.Body>
                        CORS stands for Cross-Origin Resource Sharing. We use it let a server know that we are going to share data with a different domain or port. For security and safety the server does not allow data request from different domain or port. For that reasons if we have a data server and not have CORS on we won't be able to get the data from that server.<br></br>
                        For example its assume we are running or local server in port 5000 and we are running our application in port 3000. When we try to fetch data from the server it will not send us data, but if we enable Cors we and then try fetching data from the 5000 port from the 3000 port now we will be able to access the data.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        We use firebase to build and deploy application. But the biggest power firebase has is the authentication service. using firebase authentication and authorization we can easily implement a register and login functionality. We can also verify and authenticate the legitimacy of the user and also let them easily sign in through already existing third party options like google, facebook, twitter and github.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>How does the private route work?</Accordion.Header>
                    <Accordion.Body>
                        No you will never lose access to your purchase unless there is a global network outage. In our mobile app we also have download feature.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                    <Accordion.Body>
                        We are a small team working tirelessly to provide new courses and new content to the existing courses. You purchase is not just a one time deal. The purchase guarantees that you will get service from us for years.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;