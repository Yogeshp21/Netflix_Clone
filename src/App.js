import React, { useEffect } from 'react';
import HomeScreen from './Screen/HomeScreen'
import './App.css';
import LoginScreen from './Screen/LoginScreen'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';
import ProfileScreen from './Screen/ProfileScreen'


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged((userAuth) =>{
      if(userAuth){
        // Logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }else{
        // Logged out
        dispatch(logout())
      }
    });

    return unsubscribe;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path='/profile' element={<ProfileScreen />} />
            <Route exact path='/' element={<HomeScreen />} />
          </Routes>
        )}

      </Router>
    </div>
  );
}

export default App;
