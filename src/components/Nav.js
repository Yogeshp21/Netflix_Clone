import React, { useState, useEffect } from 'react'
import "./Nav.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Nav() {
    const [show, handleshow] = useState(false);
    const Navigate = useNavigate();
    const dispatch = useDispatch();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleshow(true);
        }
        else {
            handleshow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, [dispatch]);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className='nav__contents'>
                <img
                onClick={() => Navigate("/")}
                    className='nav__logo'
                    alt='logo' src='https://www.freepnglogos.com/uploads/netflix-logo-0.png' />
                <img
                    onClick={() => Navigate("/profile")}
                    className='nav__avatar'
                    src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117' alt='avatar' />

            </div>

        </div>
    )
}

export default Nav;
