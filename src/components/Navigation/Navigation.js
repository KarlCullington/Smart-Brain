import React from 'react';
import './NavBar.css';

const Navigation = () => {
    return (
        <div className='navBarWrapper'>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'relative',
                    zIndex: '1',
                    height: '20px',
                }}>
                <p className='f3 link dim textColor pa3 mt1 mr3 pointer'>
                    {' '}
                    Sign Out
                </p>
            </div>
        </div>
    );
};

export default Navigation;
