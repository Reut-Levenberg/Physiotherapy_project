import { Panel, PanelGroup } from 'rsuite';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {changeLogin,changeUser} from '../actions/index'
import { useState } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBContainer } from "mdbreact";

const PatientDetails = () => {
    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseModal = () => {
      setShowModal(false);
    }

  const handleShowModal = () => setShowModal(true);

  const dispatch = useDispatch();

  const[user,setUser]=useState({
    Name:"",
    Email:"",
      Email:"",
      ID:"",
      Phone:"",
      Age:"",
  });

  
  const handlechange=e=>{
      const{name,value}=e.target
      setUser({
          ...user,//spread operator 
  [name]:value
  })
  };

  function onSubmit(){
console.log('on submit add patient')
     // e.preventDefault();
  
      console.log(user);
      
     /* const userToSend = {
          Email: this.state.Email,
          Password: this.state.Password
        }
        console.log(userToSend);*/
      axios.post('http://localhost:5000/addPatient' ,user,
      {headers: {
          "Content-Type": "application/json",
          }})
        .then(res => {
            //let record=res.data;
            console.log(res.data);
            setShowModal(false);
            //dispatch(changeUser(record));
            //dispatch(changeLogin());
            
          }
          )
          ; }
  


    return (
        <div>
<MDBContainer>
      <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
        <MDBCardBody>
          <MDBCardTitle tag="h6" sub className="mb-2 text-muted">
            מטופל: נועם לוי
          </MDBCardTitle>
          <button type="button" class="btn btn-link" variant="link" onClick={handleShow}>
        בחר מטופל
      </button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <button type="button" class="btn btn-primary" variant="link" onClick={handleShowModal}>
                 + הוסף מטופל
            </button>
        </Offcanvas.Body>
      </Offcanvas>
</MDBCardBody>
      </MDBCard>
    </MDBContainer>

      <Modal  show={showModal} fullscreen={true} size={'xl'} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>הוספת מטופל חדש</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form dir="rtl" onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" dir="rtl">
              <Form.Label dir="rtl">שם</Form.Label>
              <Form.Control
              name='Name'
                dir="rtl"
                type="Name"
                placeholder="שם "
                autoFocus
                onChange={handlechange}
              />
              <Form.Label>אימייל</Form.Label>
              <Form.Control
              name='Email'
                type="Email"
                placeholder="אימייל"
                autoFocus
                onChange={handlechange}
              />
              <Form.Label>תעודת זהות</Form.Label>
              <Form.Control
              name='ID'
                type="ID"
                placeholder="תעודת זהות "
                autoFocus
                onChange={handlechange}
              />
              <Form.Label>טלפון</Form.Label>
              <Form.Control
              name='Phone'
                type="Phone"
                placeholder="טלפון"
                autoFocus
                onChange={handlechange}
              />
              <Form.Label>גיל</Form.Label>
              <Form.Control
              name='Age'
                type="Age"
                placeholder="גיל"
                autoFocus
                onChange={handlechange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={onSubmit}>
            הוסף מטופל
          </Button>
        </Modal.Footer>
      </Modal>
        </div>

    )
}

export default PatientDetails;
