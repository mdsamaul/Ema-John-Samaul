import React from 'react';
import './Bannder.css';
const Bannder = () => {
    return (
        <div className='banner-section'>

            <marquee>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum impedit maxime sequi consectetur repudiandae magni, nisi ducimus, et natus sunt laborum quis omnis iste corporis minima expedita, beatae velit a?</marquee>
            <marquee width="100%" behavior="scroll" direction="sequi">
                This is an example of a Up side direction marquee...
            </marquee>
        </div>
    );
};

export default Bannder;