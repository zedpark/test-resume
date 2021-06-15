import React, { Component } from 'react';
import background from "../assets/3376462.jpg";

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
                    top: '0',
                    left: '0',
                    }}>
                    <h1>Mr. Park's Resume</h1>
                    <h2>Experience</h2>
                    <div>
                        <h3>Languages and Development Tools</h3>
                        <h3>testing</h3>
                    </div>
                    <div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Resume;