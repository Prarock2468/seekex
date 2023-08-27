import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Single = () => {
    const { id } = useParams();
    console.log("Page ID: " + id);
    const [person, setPerson] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:5000/users/${id}`)
            .then(res => setPerson(res.data))
            .catch(err => console.log(err));
    }, [id]);

    return (

        <>

            <div className='beard-crumb'>
                <div className='container'>
                    <h1 className='hero-title'>WelCome To the Seekex</h1>
                    <div className='beardcrumb-section'>
                        <ul className='beard-crumb-ul'>
                            <li>
                                <Link to="/"> <span>Home</span> <span className='prev-page'>&raquo;</span></Link>
                            </li>

                            <li>
                                <span className='current-page'>{person.name}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className='personList-section'>
                <div className='container'>
                    <div className='row personList-row'>

                      <div className='col-8'>
                        <div className='single-person-card'>
                            <div className='person-image'>
                                {person.image ? <img src={person.image} alt='person name' /> : <img src='/image/test-user.png' alt='person name' />}
                            </div>
                            <div className='person-detail'>
                                <h4 className='person-name'>
                                    {person.name}
                                </h4>
                                <p className='description'>
                                    {person.education}
                                </p>
                                <p className='description'>
                                    {person.about}
                                </p>
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
                                    {person.description}
                                </p>
                                
                                
                            </div>
                            <div className='action-box'>
                                <Link to={`/edit/${person.id}`} className='common-btn edit-btn' >
                                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    <span>Edit Detail</span>
                                </Link>
                            </div>
                        </div>

                      </div>

                    </div>
                </div>
            </section>

        </>


    );
}

export default Single;
