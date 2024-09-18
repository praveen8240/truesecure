import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/authSlice';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate =useNavigate();
  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      toast.success('Successfully logged out!');
      return navigate('/');
    } catch (error) {
      toast.error('Failed to log out!');
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
