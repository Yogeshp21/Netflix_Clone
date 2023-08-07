import React from 'react'
import './ProfileScreen.css';
import Nav from '../components/Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/counter/userSlice';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function ProfileScreen() {
  const user = useSelector(selectUser);
  const Navigate = useNavigate();
  return (
    <div className='profileScreen'>
      <Nav />

      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profile__info">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="" />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <button onClick={() => Navigate("/")} className='login__main'>Main Screen</button>
              <button onClick={() => auth.signOut()} className='profileScreen__signOut'>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
