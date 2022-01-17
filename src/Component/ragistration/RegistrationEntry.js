import React, {useEffect,useState} from 'react'
import axios from 'axios';
import './ragistration.css'
import { Form, Button } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
export default function RegistrationEntry() {
    toast.configure()

    const [formno, setFormno]=useState("");
    const [name, setName]=useState("");
    const [clas, setClas]=useState("");
    const [gender, setGender]=useState("");
    const [fname, setFname]=useState("");
    const [mname, setMname]=useState("");
    const [contact, setContact]=useState("");
    const [email, setEmail]=useState("");
    const [dob, setDob]=useState("");
   
    function saveReg(e){
    e.preventDefault();
    
      // console.warn(formno,name,clas,gender,fname,mname,email,contact,dob);
       const config = {
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
          },
      };
     const body={
        formNo: formno,
        sname: name,
        fname: fname,
        mname: mname,
        gender: gender,
        className: clas,
        contactNo: contact,
        dob: dob,
        email: email,
        // sessionName: null,
        // stuType: null,
        // entryDate: null,
        // rate: null,
        // paid: null,
        // dueAmt: null,
        // conc: null,
        // enquiryNo: null,
        // isAdm: null,
        // subStatus: null,
        // delStatus: null
       };
       const data = Object.keys(body)
      .map((key) => `${key}=${encodeURIComponent(body[key])}`)
      .join('&');
      console.log(data);
      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data,
        url: 'http://schoolerp.schoolsupdate.co.in/api/StuRegistration/Poststureg',
      };
      const response =  axios(options).then (res => toast(res.statusText)); 
      //console.log(response);
      
     
            // axios.post('http://schoolerp.schoolsupdate.co.in/api/StuRegistration/Poststureg',body,config)
            //     .then((response) => {
            //         console.log(response.status);
            //         console.log(response.data);
            //         console.log(body)
            //     })
            //     .catch((e) => console.log('something went wrong :(', e));
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
                    <Form.Select aria-label="Default select example" value={clas} onChange={(e)=>{setClas(e.target.value)}}>
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
                        <Form.Check.Input type="radio" value={gender} checked={gender} onChange={(e)=>{setGender(e.target.value)}}/>
                        <Form.Check.Label className='mgender'>{`Male`}</Form.Check.Label>
                        <Form.Check.Input className='fgender' type="radio" value={gender} checked={gender} onChange={(e)=>{setGender(e.target.value)}} />
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
