// validationSchemas.js

import * as Yup from 'yup';

export const personSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').strict(true).trim("white spaces before/after Name are not allowed"),
    email: Yup.string().email('Invalid email').required('Email is required').matches(
        /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        'Invalid email format'
    ),
    //   dob: Yup.date().required('Date of birth is required'),
    dob: Yup.date().nullable().required("Date of birth is required"),
    about: Yup.string().required('Please provide some information'),
    country: Yup.string().required('Please provide your country name'),
    phone: Yup.string().required('Phone number is required').matches(
        /^\d{10}$/, // Change the pattern to match your desired format
        'Invalid phone number format'
    ),
    image: Yup.string().required('Image URL is required'),
    description: Yup.string().required('Message is required'),
    education: Yup.string().required('Education is required'),

});
