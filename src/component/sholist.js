import { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import Loader from './loader';
const Sholist = () => {
    const [person, setPercon] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then(res => {
                setPercon(res.data)
                setLoading(false);
            })
            .catch(err => { console.log(err); setLoading(true); })
    }, [])
    console.log(person)

    const handleDelete = (id) => {
        const confirm = window.confirm("would you like to delete ?");
        if (confirm) {
            axios.delete('http://localhost:5000/users/' + id)
                .then(res => {
                    toast.success('Item successfully deleted');
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000)
                }).catch(err => {
                    toast.success('you are not able to  deleted');
                })
        }
    }
    return (
        <>
            <div className='beard-crumb'>
                <div className='container'>
                    <h1 className='hero-title'>WelCome To the Seekex</h1>
                    
                </div>
            </div>
            <section className='personList-section'>

                {loading ? (
                    <Loader />
                ) : (
                    <div className='container'>
                        <div className='row personList-row'>

                            {person && person.length > 0 ? (
                                person.map((person, index) => (
                                    <div key={index} className='person-card'>
                                        <div className='person-image'>
                                            {/* <img src='/image/test-user.png' alt='person name' /> */}
                                            {
                                                person.image ? <img src={person.image} /> : <img src='/image/test-user.png' alt='person name' />
                                            }
                                        </div>
                                        <div className='person-detail'>
                                            <h4 className='person-name'>
                                                <Link to={`/detail/${person.id}`}>{person.name}</Link>
                                            </h4>
                                            <div className='Dc-box'>
                                                <p className='country dataList'>
                                                    <i className="fa fa-globe" aria-hidden="true"></i>
                                                    <span>{person.country}</span>
                                                </p>
                                                <p className='dob dataList'>
                                                    <i className="fa fa-calendar" aria-hidden="true"></i>
                                                    <span>{person.dob}</span>
                                                </p>
                                                <p className='dob dataList'>
                                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                                    <span>{person.phone}</span>
                                                </p>
                                                <p className='email-box dataList'>
                                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                                    <span>{person.email}</span>
                                                </p>
                                            </div>
                                            <p className='description'>
                                                {person.about}
                                            </p>
                                        </div>
                                        <div className='action-box'>
                                            <Link to={`/edit/${person.id}`} className='common-btn edit-btn' >
                                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                <span>Edit Detail</span>
                                            </Link>
                                            <button className='common-btn delete-btn' onClick={e => handleDelete(person.id)}>
                                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                                                <span>Delete Person</span>
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className='col-8'>
                                    <div className='nodata-section'>
                                        <img src='/image/nodata.png' className='nodataimage' alt='no data' />
                                        <h2>There is no Data yet.</h2>
                                        <p>You have to add one data</p>
                                        <Link to="/AddPerson" className='add-btn common-btn'> + Add Person</Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                )}

                <ToastContainer />






            </section >
        </>
    )
}

export default Sholist