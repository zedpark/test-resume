import React, { Component } from 'react';
import background from "../assets/3376462.jpg";

class Resume extends Component {
    render() { 
        return (  
            <React.Fragment>
                <div style={{
                    backgroundImage: `url(${background})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100vw',
                    height: '100vh'
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