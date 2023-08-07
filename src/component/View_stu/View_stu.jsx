import React, { useState } from 'react'
import { Button, Container, Form, Row, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import no_data from '../../../public/no-data.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { Delete_stu, Single_stu } from '../../services/actions/student_ac'


function View_stu() {

  const navigate = useNavigate();
  const dispatch = useDispatch();



  const student_de = useSelector(state => state.stu_Re.students);



  const handleEdit = (id, data, index) => {

    navigate(`/edit/:${id}`);
    dispatch(Single_stu(data,index));

  }

  const handleDelete = (id) => {

    dispatch(Delete_stu(id));

  }



  return (
    <>
      <Container>
        <Row>

          <div className='py-3'>
            <NavLink to='/add' className='btn btn-primary'>
              Add Students
            </NavLink>
          </div>
          <Table responsive="sm">
            {
              // student_de.length != 0 ?
              <>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Course</th>
                    <th>Gender</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  { 
                    student_de.map((stu, index) => {
                      return (
                        <tr>
                          <td>
                            {stu.id}
                          </td>
                          <td>
                            {stu.fname + ' ' + stu.lname}
                          </td>
                          <td>
                            {stu.email}
                          </td>
                          <td>
                            {stu.phone}
                          </td>
                          <td>
                            {stu.address}
                          </td>
                          <td>
                            {stu.city}
                          </td>
                          <td>
                            {stu.course}
                          </td>
                          <td>
                            {stu.gender}
                          </td>
                          <td>
                            <button className='btn btn-primary' onClick={() => { handleEdit(stu.id,stu, index)}}>Edit</button> ||
                            <button className='btn btn-danger' onClick={() => { handleDelete(stu.id)}}>Delete</button>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </>
              // :
              // <div style={{ width: "50%", margin: "0 auto" }}>
              //   <img src={no_data} alt="no-data" style={{ width: "100%", height: "100%" }} />
              // </div>
            }
          </Table>
        </Row>
      </Container>
    </>
  )
}

export default View_stu