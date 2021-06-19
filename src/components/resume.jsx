import React, { Component } from 'react';
import background from "../assets/3376462.jpg";
import profilePic from "../assets/profilePic.png";
import reactlogo from "../assets/reactlogo.png";
import jslogo from "../assets/jslogo.png";
import vscodelogo from "../assets/vscode.png";
import cpplogo from "../assets/cpplogo.png";
import gitlogo from "../assets/gitlogo.png";
import githublightlogo from "../assets/github-lightlogo.png";
import mysqllogo from "../assets/mysqllogo.png";
import nodejslogo from "../assets/nodejslogo.png";

import ReactRoundedImage from "react-rounded-image";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Col, Row} from "react-bootstrap";

class Resume extends Component {
    render() { 
        return (  
            <React.Fragment>
                <div style={{
                    backgroundImage: `url(${background})`,
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100vw',
                    height: '100vh',
                    minHeight: '100%',
                    minWidth: '100%',
                    position: 'fixed',
                    overflowX: 'none',
                    }}>
                    <Container fluid style={{marginTop: '16px'}}>
                    <div id="profileHeader" style={{}}>
                        <div style={{}}>
                        <ReactRoundedImage 
                            image={profilePic}
                            roundedColor="black"
                            imageWidth="64"
                            imageHeight="64"
                            roundedSize="8"
                        />
                        </div>
                        <div>
                            <h1>Mr. Park's Resume *WIP</h1>
                            <h3>text should be on the right of logo</h3>
                        </div>
                    </div>
                        <div>
                            <h2>Experience</h2>
                            <Row>
                                <Col>
                                    <ReactRoundedImage
                                    image={reactlogo}
                                    imageWidth="64"
                                    imageHeight="64"
                                    roundedSize="8"
                                    />
                                </Col>
                                <Col>
                                    <ReactRoundedImage
                                    image={jslogo}
                                    imageWidth="64"
                                    imageHeight="64"
                                    roundedSize="8"
                                    />
                                </Col>
                                <Col>
                                    <ReactRoundedImage
                                    image={nodejslogo}
                                    imageWidth="64"
                                    imageHeight="64"
                                    roundedSize="12"
                                    borderRadius="40"
                                    />
                                </Col>
                                <Col>
                                    <ReactRoundedImage
                                    image={vscodelogo}
                                    imageWidth="64"
                                    imageHeight="64"
                                    roundedSize="12"
                                    borderRadius="40"
                                    />
                                </Col>
                                <Col>
                                    <ReactRoundedImage
                                    image={cpplogo}
                                    imageWidth="64"
                                    imageHeight="64"
                                    roundedSize="12"
                                    borderRadius="50"
                                    />
                                </Col>
                                <Col>
                                    <ReactRoundedImage
                                    image={gitlogo}
                                    imageWidth="64"
                                    imageHeight="64"
                                    roundedSize="12"
                                    />
                                </Col>
                                <Col>
                                    <ReactRoundedImage
                                    image={githublightlogo}
                                    imageWidth="64"
                                    imageHeight="64"
                                    roundedSize="8"
                                    />
                                </Col>
                                <Col>
                                    <ReactRoundedImage
                                    image={mysqllogo}
                                    imageWidth="64"
                                    imageHeight="64"
                                    roundedSize="12"
                                    borderRadius="40"
                                    />
                                </Col>
                            </Row>
                        </div>
                    <div>
                        <h3>Languages and Development Tools</h3>
                        <h3>testing</h3>
                    </div>
                    </Container>
                    </div>
            </React.Fragment>
        );
    }
}
 
export default Resume;