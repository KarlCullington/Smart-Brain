import React from 'react';
import './NavBar.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'relative',
                    zIndex: '1',
                    height: '20px',
                }}>
                <p
                    onClick={() => onRouteChange('signout')}
                    className='f3 link dim textColor pa3 mt1 mr3 pointer'>
                    {' '}
                    Sign Out{' '}
                </p>
            </div>
        );
    } else {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'relative',
                    zIndex: '1',
                    height: '20px',
                }}>
                <p
                    onClick={() => onRouteChange('signin')}
                    className='f3 link dim textColor pa3 mt1 mr3 pointer'>
                    {' '}
                    Sign In{' '}
                </p>
                <p
                    onClick={() => onRouteChange('register')}
                    className='f3 link dim textColor pa3 mt1 mr3 pointer'>
                    {' '}
                    Register{' '}
                </p>
            </div>
        );
    }
};

export default Navigation;
