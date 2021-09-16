import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3 pa3 textColor'>
                {
                    'This Magic Brain will detect faces in your pictures. Give it a try....'
                }
            </p>
            <div className='center'>
                <div className='center form'>
                    <input
                        className='f5 nb2 pa2 br3 br--left bg-near-white ba b--black w-70 center'
                        type='text'
                        onChange={onInputChange}
                    />
                    <button
                        className='w-30 b nb2 ba b--black br3 br--right grow f5 link pv2 dib white bg-dark-blue'
                        onClick={onButtonSubmit}>
                        Detect
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImageLinkForm;
