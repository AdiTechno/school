import React from 'react';
import {useState}from 'react';
import { Form} from 'react-bootstrap'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog ({open,handleClose,data,onChange,updateData}) {
 //const [open, setOpen]= useState(true)
const {formNo,sname,fname,mname} = data
// console.log(data.formNo)
// console.log(data.sname)

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
    
  // };

  return (
    <div>
     
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Student</DialogTitle>
        <DialogContent>
          <Form>
            <TextField id="formno" value={formNo} onChange={e=>onChange(e)} placeholder='Enter Form No' label="Form No" variant="outlined" margin="dense" fullWidth/>
            <TextField id="sname" value={sname} onChange={e=>onChange(e)} placeholder='Enter Name' label="Name" variant="outlined" margin="dense" fullWidth/>
            <TextField id="fname" value={fname} onChange={e=>onChange(e)} placeholder='Enter Father Name' label="Father Name" variant="outlined" margin="dense" fullWidth/>
            <TextField id="mname" value={mname} onChange={e=>onChange(e)} placeholder='Enter Nother Name' label="Mother Name" variant="outlined" margin="dense" fullWidth/>
          </Form>
          
        </DialogContent>
        <DialogActions>
          <Button color='secondary' variant='outlined' onClick={handleClose}>Cancel</Button>
          <Button color='primary' variant='contained' onClick={updateData}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}