import React from 'react'
import './sidebar.css'
import {Link} from 'react-router-dom'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import HowToRegSharpIcon from '@material-ui/icons/HowToRegSharp';
import SpellcheckSharpIcon from '@material-ui/icons/SpellcheckSharp';
import TagFacesSharpIcon from '@material-ui/icons/TagFacesSharp';
export default function Sidebar() {
    return (
        <div className="sidebar">
           <div className="sidebarwrapper">
               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">Dashboard</h3>
                   <ul className="sidebarList">
                       <li className="sidebarListItem">
                       <Link className="sidebarListItem" aria-current="page" to="/"><AccountBalanceIcon className="sidebarIcon"/>Home</Link>
                       </li>
                       <li className="sidebarListItem">
                       <Link className="sidebarListItem" aria-current="page" to="/enquiry"><HowToRegSharpIcon className="sidebarIcon"/>Enquiry</Link>
                       </li>
                       <li className="sidebarListItem">
                       <Link className="sidebarListItem" aria-current="page" to="/registration"><TagFacesSharpIcon className="sidebarIcon"/>Registration</Link>
                       </li>
                       <li className="sidebarListItem">
                       <Link className="sidebarListItem" aria-current="page" to="/admission"><SpellcheckSharpIcon className="sidebarIcon"/>Admission</Link>
                       </li>
                   </ul>
                </div>
            </div>
        </div>
    )
}

