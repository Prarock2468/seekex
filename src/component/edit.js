import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import { personSchema } from '../validation/validation';
import * as Yup from 'yup';
const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [values, setValues] = useState({
        name: '',
        image: '',
        email: '',
        phone: '',
        dob: '',
        about: '',
        description: '',
        country: '',
        education: '',
    });

    useEffect(() => {
        axios.get(`http://localhost:5000/users/${id}`)
            .then(res =>{ formik.setValues(res.data)})
            .catch(err => console.log(err));
            console.log('test1')
            
    }, [id]);
    console.log(values.name)
    const formik = useFormik({
        initialValues: {
            name: values.name,
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
        
        onSubmit: values1 => {
            axios.put(`http://localhost:5000/users/${id}`, values1)
                .then(res => {
                    // console.log(res);
                    toast.success('Person updated successfully');
                    setTimeout(() => {
                        navigate('/');
                    }, 2000);
                })
                .catch(err => {
                    toast.error('Error updating person');
                });
        },
    });
    return (
        <>
            <div className='beard-crumb'>
                <div className='container'>
                    <h1 className='hero-title'>Update Person</h1>
                    <div className='beardcrumb-section'>
                        <ul className='beard-crumb-ul'>
                            <li>
                                <Link to="/"> <span>Home</span> <span className='prev-page'>&raquo;</span></Link>
                            </li>

                            <li>
                                <span className='current-page'>{values.name}</span>
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
                                    <div className="form-group">
                                        <label htmlFor='name'>Add image URL</label>
                                        <input
                                            type='url'
                                            className="form-control"
                                            name='name'
                                            id='name'
                                            placeholder='Enter your image url'
                                            {...formik.getFieldProps('image')}
                                        />
                                        {formik.touched.image && formik.errors.image ? (
                                            <div className='error-message'>{formik.errors.image}</div>
                                        ) : null}
                                    </div>
                                    <div className='row'>
                                        <div className='col-sm-6 col-md-4'>
                                            <div className='form-group'>
                                                <label htmlFor='name'>Name</label>
                                                <input
                                                    type='text'
                                                    className="form-control"
                                                    name='name'
                                                    id='name'
                                                    placeholder='Enter your name'
                                                    {...formik.getFieldProps('name')}
                                                />
                                                {formik.touched.name && formik.errors.name ? (
                                                    <div className='error-message'>{formik.errors.name}</div>
                                                ) : null}

                                            </div>
                                        </div>
                                        <div className='col-sm-6 col-md-4'>
                                            <div className='form-group'>
                                                <label htmlFor='email'>Email</label>
                                                <input
                                                    className="form-control"
                                                    type='email'
                                                    name='email'
                                                    id='email'
                                                    placeholder='Enter your Email'
                                                    {...formik.getFieldProps('email')}
                                                />
                                                {formik.touched.email && formik.errors.email ? (
                                                    <div className='error-message'>{formik.errors.email}</div>
                                                ) : null}

                                            </div>
                                        </div>

                                        <div className='col-sm-6 col-md-4'>
                                            <div className='form-group'>
                                                <label htmlFor='dob'>Date of birth</label>
                                                <input
                                                    className="form-control"
                                                    type='date'
                                                    name='dob'
                                                    id='dob'
                                                    placeholder='Date of birth'
                                                    {...formik.getFieldProps('dob')}
                                                />
                                                {formik.touched.dob && formik.errors.dob ? (
                                                    <div className='error-message'>{formik.errors.dob}</div>
                                                ) : null}

                                            </div>
                                        </div>
                                        <div className='col-sm-6 col-md-4'>
                                            <div className='form-group'>
                                                <label htmlFor='phoneNumber'>Phone Number</label>
                                                <input
                                                    className="form-control"
                                                    type='text'
                                                    name='phone'
                                                    id='phone'
                                                    placeholder='Enter your phone number'
                                                    {...formik.getFieldProps('phone')}
                                                />
                                                {formik.touched.phone && formik.errors.phone ? (
                                                    <div className='error-message'>{formik.errors.phone}</div>
                                                ) : null}

                                            </div>
                                        </div>

                                        <div className='col-sm-6 col-md-4'>

                                            <div className='form-group'>
                                                <label htmlFor='country'>Country</label>
                                                <input type='text'
                                                    className="form-control"
                                                    name='country'
                                                    id='country'
                                                    placeholder='Tell Me About your country'
                                                    {...formik.getFieldProps('country')}
                                                />
                                                {formik.touched.country && formik.errors.country ? (
                                                    <div className='error-message'>{formik.errors.country}</div>
                                                ) : null}

                                            </div>
                                        </div>
                                        <div className='col-sm-6 col-md-4'>
                                            <div className='form-group'>
                                                <label htmlFor='country'>Education</label>
                                                <input type='text'
                                                    className="form-control"
                                                    name='education'
                                                    id='education'
                                                    placeholder='Tell Me About your Education'
                                                    {...formik.getFieldProps('education')}
                                                />
                                                {formik.touched.education && formik.errors.education ? (
                                                    <div className='error-message'>{formik.errors.education}</div>
                                                ) : null}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-sm-12 col-md-6'>
                                            <div className='form-group'>
                                                <label htmlFor='about'>Tell me about yourself</label>
                                                <textarea
                                                    className="form-control"
                                                    rows='4'
                                                    name='about'
                                                    id='about'
                                                    placeholder='Tell Me About Yourself'
                                                    {...formik.getFieldProps('about')}
                                                ></textarea>
                                                {formik.touched.about && formik.errors.about ? (
                                                    <div className='error-message'>{formik.errors.about}</div>
                                                ) : null}

                                            </div>
                                        </div>
                                        <div className='col-sm-12 col-md-6'>
                                            <div className='form-group'>
                                                <label htmlFor='about'>Message</label>
                                                <textarea
                                                    className="form-control"
                                                    rows='4'
                                                    name='description'
                                                    id='description'
                                                    placeholder='Write your message here'
                                                    {...formik.getFieldProps('description')}
                                                ></textarea>
                                                {formik.touched.description && formik.errors.description ? (
                                                    <div className='error-message'>{formik.errors.description}</div>
                                                ) : null}

                                            </div>
                                        </div>
                                    </div>



                                    <div className='d-flex justify-content-center btn-box'>
                                        <button type='submit' className='add-btn common-btn'>
                                            + Update Person
                                        </button>
                                    </div>
                                </form>
                                <ToastContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Edit