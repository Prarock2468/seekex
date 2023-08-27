import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import axios from 'axios';
import { personSchema } from '../validation/validation'


const Create = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: '',
            image: '',
            email: '',
            phone: '',
            dob: '',
            about: '',
            description: '',
            country: '',
            education: '',
        },
        validationSchema: personSchema,
        onSubmit: (data) => {
            axios.get('http://localhost:5000/users', {
                    params: {
                        email: data.email,
                        phone: data.phone,
                    },
                })
                .then((response) => {
                    const duplicates = response.data;
// console.log("data" + response.params)
                    if (duplicates.length > 0) {
                        toast.error('Email or phone number already exists.');
                    } else {
                        axios
                            .post('http://localhost:5000/users', data)
                            .then((res) => {
                                console.log(res);
                                toast.success('Person added successfully');
                                setTimeout(() => {
                                    navigate('/');
                                }, 2000);
                            })
                            .catch((err) => {
                                toast.error('Error adding person');
                            });
                    }
                })
                .catch((error) => {
                    console.error(error);
                    toast.error('Error checking for duplicates');
                });
        },
    });

    return (
        <>
            <div className='beard-crumb'>
                <div className='container'>
                    <h1 className='hero-title'>Add New Person</h1>
                    <div className='beardcrumb-section'>
                        <ul className='beard-crumb-ul'>
                            <li>
                                <Link to="/"> <span>Home</span> <span className='prev-page'>&raquo;</span></Link>
                            </li>
                            <li>
                                <span className='current-page'>Add New Person</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className='personList-section'>
                <div className='container'>
                    <div className='d-flex justify-content-center'>
                        <div className='col-lg-8 col-md-12'>
                            <div className='add-person-section'>
                                <form className='add-person' onSubmit={formik.handleSubmit}>
                                    <div className='form-group'>
                                        <label htmlFor='image'>Add image URL</label>
                                        <input
                                            type='url'
                                            className={`form-control ${formik.touched.image && formik.errors.image ? 'error-input' : ''}`}
                                            name='image'
                                            id='image'
                                            placeholder='Enter your image URL'
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.image}
                                        />
                                        {formik.touched.image && formik.errors.image && (
                                            <p className='error-message'>{formik.errors.image}</p>
                                        )}
                                    </div>
                                    <div className='row'>
                                        <div className='col-sm-6 col-md-4'>
                                            <div className='form-group'>
                                                <label htmlFor='name'>Name</label>
                                                <input
                                                    type='text'
                                                    className={`form-control ${formik.touched.name && formik.errors.name ? 'error-input' : ''}`}
                                                    name='name'
                                                    id='name'
                                                    placeholder='Enter your name'
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.name}
                                                />

                                                {formik.touched.name && formik.errors.name && (
                                                    <p className='error-message'>{formik.errors.name}</p>
                                                )}
                                            </div>
                                        </div>
                                        <div className='col-sm-6 col-md-4'>
                                            <div className='form-group'>
                                                <label htmlFor='email'>Email</label>
                                                <input

                                                    className={`form-control ${formik.touched.email && formik.errors.email ? 'error-input' : ''}`}
                                                    type='email'
                                                    name='email'
                                                    id='email'
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.email}
                                                />

                                                {formik.touched.email && formik.errors.email && (
                                                    <p className='error-message'>{formik.errors.email}</p>
                                                )}
                                            </div>
                                        </div>

                                        <div className='col-sm-6 col-md-4'>
                                            <div className='form-group'>
                                                <label htmlFor='dob'>Date of birth</label>
                                                <input
                                                    className={`form-control ${formik.touched.dob && formik.errors.dob ? 'error-input' : ''}`}
                                                    type='date'
                                                    name='dob'
                                                    id='dob'
                                                    placeholder='Date of birth'
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.dob}
                                                />

                                                {formik.touched.dob && formik.errors.dob && (
                                                    <p className='error-message'>{formik.errors.dob}</p>
                                                )}
                                            </div>
                                        </div>
                                        <div className='col-sm-6 col-md-4'>
                                            <div className='form-group'>
                                                <label htmlFor='phoneNumber'>Phone Number</label>
                                                <input
                                                    className={`form-control ${formik.touched.phone && formik.errors.phone ? 'error-input' : ''}`}
                                                    type='text'
                                                    name='phone'
                                                    id='phone'
                                                    placeholder='Enter your phone number'
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.phone}
                                                />

                                                {formik.touched.phone && formik.errors.phone && (
                                                    <p className='error-message'>{formik.errors.phone}</p>
                                                )}
                                            </div>
                                        </div>

                                        <div className='col-sm-6 col-md-4'>

                                            <div className='form-group'>
                                                <label htmlFor='country'>Country</label>
                                                <input type='text'
                                                    className={`form-control ${formik.touched.country && formik.errors.country ? 'error-input' : ''}`}
                                                    name='country'
                                                    id='country'
                                                    placeholder='Tell Me About your country'
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.country}
                                                />

                                                {formik.touched.country && formik.errors.country && (
                                                    <p className='error-message'>{formik.errors.country}</p>
                                                )}
                                            </div>
                                        </div>
                                        <div className='col-sm-6 col-md-4'>
                                            <div className='form-group'>
                                                <label htmlFor='country'>Education</label>
                                                <input type='text'
                                                    className={`form-control ${formik.touched.education && formik.errors.education ? 'error-input' : ''}`}
                                                    name='education'
                                                    id='education'
                                                    placeholder='Tell Me About your country'
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.education}
                                                />

                                                {formik.touched.education && formik.errors.education && (
                                                    <p className='error-message'>{formik.errors.education}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-sm-12 col-md-6'>
                                            <div className='form-group'>
                                                <label htmlFor='about'>Tell me about yourself</label>
                                                <textarea
                                                    className={`form-control ${formik.touched.about && formik.errors.about ? 'error-input' : ''}`}
                                                    rows='4'
                                                    name='about'
                                                    id='about'
                                                    placeholder='Tell Me About Yourself'
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.about}
                                                >
                                                </textarea>
                                                {formik.touched.about && formik.errors.about && (
                                                    <p className='error-message'>{formik.errors.about}</p>
                                                )}
                                            </div>
                                        </div>
                                        <div className='col-sm-12 col-md-6'>
                                            <div className='form-group'>
                                                <label htmlFor='about'>Message</label>
                                                <textarea
                                                    className={`form-control ${formik.touched.description && formik.errors.description ? 'error-input' : ''}`}
                                                    rows='4'
                                                    name='description'
                                                    id='description'
                                                    placeholder='Write your message here'
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.description}
                                                >
                                                </textarea>
                                                {formik.touched.description && formik.errors.description && (
                                                    <p className='error-message'>{formik.errors.description}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>



                                    <div className='d-flex justify-content-center btn-box'>
                                        <button type='submit' className='add-btn common-btn'>
                                            + Add New Person
                                        </button>
                                    </div>
                                </form>
                                <ToastContainer />
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </>
    )
}

export default Create