import React, {useEffect,useState} from 'react'
import './ragistration.css'
import { Form, Button } from 'react-bootstrap'
export default function Ragistration() {
    const [formno, setFormno]=useState("");
    const [name, setName]=useState("");
    const [fname, setFname]=useState("");
    const [mname, setMname]=useState("");
    const [contact, setContact]=useState("");
    const [email, setEmail]=useState("");
    const [dob, setDob]=useState("");
   function saveReg(e){
    e.preventDefault();
       console.warn(formno,name,fname,mname,email,contact,dob);
     
   }
    return (
        <div className='reg'>
            <div className="Container">
                <div className="Row">
                    <h3>Registration Form</h3>
                </div>
            </div>
            <hr/><br/>
        <div className="form-container">
            <Form className="signup-form">
                <Form.Group >
                <Form.Control className="name-input" type="text" placeholder="Form No" value={formno} onChange={(e)=>{setFormno(e.target.value)}} name="formno"></Form.Control><br/>
                    <Form.Control className="name-input" type="text" placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}} name="name"></Form.Control><br/>
                    <Form.Select aria-label="Default select example">
                                    <option>Select Class</option>
                                    <option value="1">I</option>
                                    <option value="2">II</option>
                                    <option value="3">III</option>
                                    <option value="4">IV</option>
                                    <option value="5">V</option>
                                    <option value="6">VI</option>
                    </Form.Select><br/>
                    <div className='gender'>
                        <h5>Gender</h5>
                        <Form.Check.Input type="radio" />
                        <Form.Check.Label className='mgender'>{`Male`}</Form.Check.Label>
                        <Form.Check.Input className='fgender' type="radio" />
                        <Form.Check.Label className='mgender'>{`Female`}</Form.Check.Label>
                    </div>
                    <br/>
                    <br/>
                    <Form.Control className="name-input" type="text" placeholder="Father Name" value={fname} onChange={(e)=>{setFname(e.target.value)}} name="fname"></Form.Control><br/>
                    <Form.Control className="name-input" type="text" placeholder="Mother Name" value={mname} onChange={(e)=>{setMname(e.target.value)}} name="mname"></Form.Control><br/>
                    <Form.Control className="name-input" type="text" placeholder="Contact No" value={contact} onChange={(e)=>{setContact(e.target.value)}} name="contact"></Form.Control><br/>
                    <Form.Control className="email-input" type="text" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" ></Form.Control><br/>
                    <Form.Control className="name-input" type="text" placeholder="Date of Birth" value={dob} onChange={(e)=>{setDob(e.target.value)}} name="dob"></Form.Control><br/>
                    <Button className="submit-button" value="submit" type="submit" onClick={(e)=>saveReg(e)}>submit</Button>
                </Form.Group>
            </Form>
        </div>
        </div>  
    )
}
