import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginAction } from './state/Action/AuthAction';
import { authenticatedTrue } from './state/Reducer/AuthSlice';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [warning, setWarning] = useState()
    const dispatch = useDispatch();

    const onSubmit = (loginData) => {
        dispatch(loginAction(loginData, setWarning));
        dispatch(authenticatedTrue());
    }

    return (
        <div className="container">
            <div className="row d-flex align-items-center justify-content-center w-100 h-100">
                <div className="col-lg-4">
                    <div className="card rounded my-5">
                        <div className="card-body bg_2">
                            {
                                warning && <p className='error_text'>{warning}</p>
                            }

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label className='text-light mt-3' htmlFor="">Email or username:</label>
                                <input {...register('username', { required: true })} className="contact_input" type="text" placeholder="Email or Username" />
                                {errors.username && errors.username.type == 'required' && <p className='error_text'>Enter the Email or Username</p>}

                                <label className='text-light mt-3' htmlFor="">Password:</label>
                                <input {...register('password', { required: true })} className="contact_input" type="password" placeholder="Password" />
                                {errors.password && errors.password.type == 'required' && <p className='error_text'>Enter the password</p>}

                                <div className="mt-2">
                                    <a className='main_color decoration_text' href="#">Forgot Password ?</a>
                                </div>
                                <div className="py-5">
                                    <button className="btn_styling py-2 w-100">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
