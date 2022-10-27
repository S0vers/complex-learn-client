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
                        We use firebase to build and deploy application. But the biggest power firebase has is the authentication service. using firebase authentication and authorization we can easily implement a register and login functionality. We can also verify and authenticate the legitimacy of the user and also let them easily sign in through already existing third party options like google, facebook, twitter and github. It also generates unique UID which makes it easy to set access control for the users.
                        It also remember the session so when the user comes back they stay logged in and they can continue their session.<br></br>
                        For authentication there are many other services. Like,
                        <ul>
                            <li>Autho</li>
                            <li>MongoDB</li>
                            <li>Amazon Cognito</li>
                            <li>AWS Amplify</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>How does the private route work?</Accordion.Header>
                    <Accordion.Body>
                        To create a private route first we must create a privater route file that will check if the user is authenticated or logged in or not. If not they will be redirected to a set directory and prompted to authenticate. If they are logged in the the private route will let the user go to its child component which is the private directory.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                    <Accordion.Body>
                        Node js is open source cross platform runtime environment that let's us run javascript outside of the web browser. It is mostly used to create backend applications.  <br />
                        Since Node is built on jacascript it is an asynchronously meaning that the it using a single that it can serve multiple clients.When a client makes a request the thread take the request and while the dataset is being created the thred moves on to serve the next request insted of waiting for the dataset making to be complete. It has a event queue where the completed data lies and as soon as the thread is free it checks the event queue and serves the data to the client.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;