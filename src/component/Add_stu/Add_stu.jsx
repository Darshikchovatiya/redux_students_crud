import React, { useState } from 'react'
import { Button, Container, Form, Row } from 'react-bootstrap'
import stu_1 from '../../../public/Student.jpg'
import uuid from 'react-uuid'
import { useDispatch } from 'react-redux'
import { Stude_ac } from '../../services/actions/student_ac'
import { useLocation, useNavigate } from 'react-router'



function Add_stu() {

    const navigate = useNavigate();
    // const location = useLocation();

    const dispatch = useDispatch();


    const [inputval, setInputval] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        course: '',
        gender: ''
    })

    const handlechange = (e) =>{
        let name = e.target.name;
        let value = e.target.value;

        setInputval({...inputval, [name]: value});
    }

    const handlesubmit = (e) =>{
        e.preventDefault();


        let id = uuid().slice(0,5);

        let n_data = ({...inputval, id: id});

        dispatch(Stude_ac(n_data));

        navigate('/');

        setInputval({
            fname: '',
            lname: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            course: '',
            gender: ''
        })
    }


    return (
        <>
            <Container>
                <div className="d-flex">
                    <div className="col-6">
                        <Form onSubmit={handlesubmit}>
                            <Row className="mb-3">
                                <Form.Group className='col-6 mb-3 mt-3'>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter first name" name='fname' value={inputval.fname} onChange={handlechange} />
                                </Form.Group>
                                <Form.Group className='col-6 mt-3'>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter last name" name='lname' value={inputval.lname} onChange={handlechange} />
                                </Form.Group>
                                <Form.Group className='col-6 mb-3'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name='email' value={inputval.email} onChange={handlechange} />
                                </Form.Group>
                                <Form.Group className='col-6'>
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Phone number" name='phone' value={inputval.phone} onChange={handlechange} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" placeholder="1234 Main St" name='address' value={inputval.address} onChange={handlechange} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="Enter City" name='city' value={inputval.city} onChange={handlechange} />
                                </Form.Group>
                                <Form.Group className="col-6">
                                    <Form.Label>Course</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Course" name='course' value={inputval.course} onChange={handlechange} />
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-3">
                                <Form.Label>Gender</Form.Label>
                                <div className="d-flex">
                                    {
                                        ["Male", "Female"].map((g) => {
                                            return (
                                                <Form.Check type="radio" label={g} name='gender' className='me-3' value={g} onChange={handlechange} />
                                            )
                                        })
                                    }
                                </div>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                    <div className="col-6">
                        <img src={stu_1} alt="stu" style={{ width: "100%", height: "100%" }} />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Add_stu