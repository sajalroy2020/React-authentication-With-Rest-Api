import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { signIn } from './state/Action/AuthAction';

const SignIn = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [warnings, setWarnings] = useState();
    const dispatch = useDispatch();

    const onSubmit = (regData) => {
        dispatch(signIn(regData, setWarnings));
    }

    return (
        <div className="container">
            <div className="row d-flex align-items-center justify-content-center w-100 h-100">
                <div className="col-lg-5">
                    <div className="card rounded my-4">
                        <div className="card-body bg_2">
                            {
                                warnings && <p className='error_text'>{warnings}</p>
                            }
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label className='text-light mt-3' htmlFor="">Name:</label>
                                <input {...register('name', { required: true })} className="contact_input " type="text" placeholder="Name" />
                                {errors.name && errors.name.type == 'required' && <p className='error_text'>Enter the Name</p>}

                                <label className='text-light mt-3' htmlFor="">User Name:</label>
                                <input {...register('username', { required: true })} className="contact_input" type="text" placeholder="User Name" />
                                {errors.username && errors.username.type == 'required' && <p className='error_text'>Enter the User Name</p>}


                                <label className='text-light mt-3' htmlFor="">Email:</label>
                                <input {...register('email', { required: true })} className="contact_input" type="email" placeholder="Email" />
                                {errors.email && errors.email.type == 'required' && <p className='error_text'>Enter the Email</p>}


                                <label className='text-light mt-3' htmlFor="">Password:</label>
                                <input {...register('password', { required: true })} className="contact_input" type="password" placeholder="Password" />
                                {errors.password && errors.password.type == 'required' && <p className='error_text'>Enter the password</p>}
                                {/* {errors.password && errors.password.type === 'minLength' && <p className='error_text'>Plase enter minimam 6 carecter</p>} */}
                                {/* {errors.password && errors.password.type === 'maxLength' && <p className='error_text'> password cannot exced more than 10 carecter</p>} */}

                                <label className='text-light mt-3' htmlFor="">Confirm Password:</label>
                                <input {...register('password_confirmation', { required: true })} className="contact_input" type="password" placeholder="Confirm Password" />
                                {errors.password_confirmation && errors.password_confirmation.type == 'required' && <p className='error_text'>Enter the Confirm Password</p>}

                                <label className='text-light mt-3'>Phone</label>
                                <input type='number' className="contact_input" placeholder="phone" name='phone' {...register('phone', { required: true })} />
                                <p className='error_text'>{errors.phone && <span>Enter the phone number</span>}</p>

                                <div className="py-4">
                                    <button className="btn_styling py-3 w-100">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
