import React, { useState } from 'react'
import { Button, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router'
import { Update_stu } from '../../services/actions/student_ac';



function Edit_stu() {

    const navigate = useNavigate();
    // const location = useLocation();
    const dispatch = useDispatch();
    const n_data = useSelector(state => state.stu_Re.student);
    const n_index = useSelector(state => state.stu_Re.isIndex);


    const [inputval, setInputval] = useState(n_data);

    const handlechange = (e) => {
        let name = e.target.name;
        let value = e.target.value; 

        setInputval({ ...inputval, [name]: value });
    }

    const handlesubmit = (e) => {
        e.preventDefault();

        dispatch(Update_stu(inputval, n_index));
        navigate('/');

    }


    return (
        <>
            <Container>
                <div className="d-flex">
                    <div className="col-6">
                        <Form onSubmit={handlesubmit}>
                            <Row className="mb-3">
                                <Form.Group className='col-6 mb-3'>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter first name" name='fname' value={inputval.fname} onChange={handlechange} />
                                </Form.Group>
                                <Form.Group className='col-6'>
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
                                                <Form.Check type="radio" label={g} name='gender' className='me-3' value={g} onChange={handlechange} checked={g == inputval.gender} />
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
                </div>
            </Container>
        </>
    )
}

export default Edit_stu