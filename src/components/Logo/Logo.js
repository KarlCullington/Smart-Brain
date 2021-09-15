import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import face from './faceapp.png';

const Logo = () => {
    return (
        <dl className='logoPosition'>
            <Tilt
                className='Tilt br3 shadow-2'
                options={{ max: 50 }}
                style={{ height: 120, width: 120 }}>
                <div className='Tilt-inner'>
                    <img alt='logo' src={face} />
                </div>
            </Tilt>
        </dl>
    );
};

export default Logo;
