import React from 'react';
import './Menubar.css'

const Menubar = (props) => {
    return (
        <div>
            <div className="container-fluid h-25 menu-bar">
                <div className="row">
                    <div className="col-md-2 fw-bolder fs-3 p-2">
                        Logo
                    </div>
                    <div className="col-md-10 menu-container d-flex justify-content-end align-items-center ms-auto fw-bold p-2">
                        <li className='ms-4 menu-items'>Home</li>
                        <li className='ms-4 menu-items'>Contact</li>
                        <li className='ms-4 menu-items'>Cart<sup className='text-primary'>{props.count}</sup></li>
                        <li className='ms-4 menu-items'>Login</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;