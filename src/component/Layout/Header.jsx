import { Link } from 'react-router-dom'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie';
import { authenticatedFalse } from '../../state/Reducer/AuthSlice';

const Header = () => {
    const auth = useSelector((state) => state.auth.authenticated);
    const dispatch = useDispatch();
    const logOut = () => {
        Cookies.remove('token');
        dispatch(authenticatedFalse());
    }

    return (
        <div className='bg-dark'>
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    <ul className='d-flex gap-5 py-4 m-0'>
                        <Link to={'/'}><li className='text-white h5'>Home</li></Link>
                        <Link to={'/about'}><li className='text-white h5'>About</li></Link>
                        <Link to={'/product'}><li className='text-white h5'>Product</li></Link>
                    </ul >
                    <div>
                        {
                            auth &&
                            <button onClick={logOut} className='btn btn-success ms-1'>Logout</button>

                        }
                        {
                            !auth &&
                            <>
                                <Link to={"/login"}><button className='btn btn-success'>Login</button></Link>
                                <Link to={"/signIn"}><button className='btn btn-success ms-1'>SignIn</button></Link>
                            </>
                        }

                    </div>
                </div>
            </div >
        </div >
    )
}

export default Header
