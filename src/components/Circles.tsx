import React from 'react';
import '../styles/Circles.css'


function Circles() {
    return (
        <div className="circle-group">
            <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" className='sde'>
                <path d="M100,20 L30,80 L50,180 L150,180 L170,80 Z" fill="none" stroke="black" strokeWidth="0.3" />
            </svg>

            <div className="circle circle1"></div>
            <div className="circle circle2"></div>
            <div className="circle circle3"></div>
            <div className="circle circle4"></div>
            <div className="circle circle5"></div>
        </div>
    );
}

export default Circles;

