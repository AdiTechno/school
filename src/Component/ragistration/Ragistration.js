import React, { useEffect, useState } from 'react'
import RegistrationEntry from './RegistrationEntry'
import {Link} from 'react-router-dom'
import axios from 'axios';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { Button } from 'react-bootstrap'
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import FormDialog from './FormDialog';
export default function Ragistration() {
   const [open,setOpen]= useState(false);
   const [formData, setFormData]= useState({formNo:"",sname:"",fname:"",mname:""})
    const [reg, setReg] = useState([]);
    
    
    useEffect(() => {
        axios.get('http://schoolerp.schoolsupdate.co.in/api/StuRegistration/Getallregi').then((resp) => {
           
                setReg(resp.data.allstureg);
                       
        });
    }, [])
    console.warn(reg);
    const columnDefs=[
        {headerName: 'FORM NO', field:"formNo"},
        {headerName: 'NAME', field:"sname"},
        {headerName: 'FATHER NAME', field:"fname"},
        {headerName: 'MOTHER NAME', field:"mname"},
        {headerName: 'CLASS', field:"className"},
        {headerName: 'CONTACT NO', field:"contactNo"},
        {headerName: 'EMAIL ID', field:"email"},
        {headerName: 'DATE OF BIRTH', field:"dob"},
        {headerName: 'ACTION', field:"formNo", cellRendererFramework:(params)=>
        <div><button variant="outlined" onClick={()=>actionUpdate(params.data)}><EditIcon style={{ color:"green" }}/></button> 
       <span> <button variant="outlined" color="secondory"  onClick={()=>actionDelete(params)}><DeleteIcon style={{ color:"secondory" }}/></button> </span></div>
        }
    ]
    const defaultColDef={
       sortable:true, editable:true,filter:true, tooltipField:"sname"
    }
    const actionUpdate=(oldData)=>{
        setOpen(true);
        setFormData(oldData);
          
    }
    const onChange=(e)=>{
        const {value,id}=e.target
        setFormData({...formData,[id]:value})
        //console.log(value,id)
    }
    const updateData=()=>{
        
        console.log(formData)
    };
    const handleClose = () => {
          setOpen(false);
        };
    const actionDelete=(params)=>{
        console.log(params);
        alert(params.data.sname + " "+  params.data.entryNo) 
    }
    return (
        <div className='registration'>
                <Link className="nav-link active" aria-current="page" to="/newregistration"><AddIcon className="sidebarIcon"/>New Registration</Link>
                <br/>
            {/* <Button className="submit-button" value="new" type="button" onClick={"newreg"}>New Registration
            
            </Button> */}
            {/* <table className='table'>

                <tr>
                    <td>Form No</td>
                    <td>Name</td>
                    <td>Fathers Name</td>
                    <td>Mothers Name</td>
                    <td>..</td>
                </tr>

                {reg.map((item,index)=>
                    <tr key={index}>
                    <td>{item.formNo}</td>
                            <td>{item.sname}</td>
                            <td>{item.fname}</td>
                            <td>{item.mname}</td>
                            <td> <EditIcon style={{ fontSize: 35 }}/> <span><DeleteIcon style={{ fontSize: 35 }}/></span></td>
                            
                    </tr>
                )
                }
                
            </table> */}
            {/* <RegistrationEntry/> */}
            <div className="ag-theme-alpine" style={{height: 300, textAlign:"left"}}>
           {/* <AgGridReact
               rowData={reg}>
               <AgGridColumn headerName= 'FORM NO' field="formNo"></AgGridColumn>
               <AgGridColumn headerName= 'NAME' field="sname"></AgGridColumn>
               <AgGridColumn headerName= 'FATHER NAME' field="fname"></AgGridColumn>
               <AgGridColumn headerName= 'MOTHER NAME' field="mname"></AgGridColumn>
               <AgGridColumn headerName= 'ACTION' field="formNo" cellRendererFramework={<div><EditIcon style={{ fontSize: 35 }}/></div>} ></AgGridColumn>
           </AgGridReact> */}
            <AgGridReact rowData={reg} columnDefs={columnDefs} defaultColDef={defaultColDef}/>
               
       </div>
       
       
       {open && <FormDialog open={open} handleClose={handleClose} data={formData} onChange={onChange} updateData={updateData}/>}
       
        </div>
    )
}
