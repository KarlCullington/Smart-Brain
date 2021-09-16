import React from 'react';
import './Register.css';

const Register = ({ onRouteChange }) => {
    return (
        <article className='br3 ba z-1 b--white-10 mv4 w-100 bw1 w-50-m w-25-l mw6 center pop'>
            <main className='pa4 white-80 z-1'>
                <form className='measure'>
                    <fieldset
                        id='sign_up'
                        className='ba z-1 b--transparent ph0 mh0'>
                        <legend className='f1 fw6 ph0 mh0'>Register</legend>
                        <div className='mt3'>
                            <label className='db fw6 lh-copy f6' for='name'>
                                Name
                            </label>
                            <input
                                className='pa2 input-reset ba bw1 bg-transparent br2 hover-bg-black hover-white w-100'
                                type='text'
                                name='name'
                                id='name'
                            />
                        </div>
                        <div className='mt3'>
                            <label
                                className='db fw6 lh-copy f6'
                                for='email-address'>
                                Email
                            </label>
                            <input
                                className='pa2 input-reset ba bw1 bg-transparent br2 hover-bg-black hover-white w-100'
                                type='email'
                                name='email-address'
                                id='email-address'
                            />
                        </div>
                        <div className='mv3'>
                            <label className='db fw6 lh-copy f6' for='password'>
                                Password
                            </label>
                            <input
                                className='b pa2 input-reset ba bw1 bg-transparent br2 hover-bg-black hover-white w-100'
                                type='password'
                                name='password'
                                id='password'
                            />
                        </div>
                    </fieldset>
                    <div className=''>
                        <input
                            className='b ph3 pv2 input-reset ba bw1 white-80 bg-transparent grow hover-bg-dark-green hover-near-white br2 pointer f6 dib'
                            type='submit'
                            onClick={() => onRouteChange('home')}
                            value='Register'
                        />
                    </div>
                    <div className='lh-copy mt3'></div>
                </form>
            </main>
        </article>
    );
};

export default Register;
