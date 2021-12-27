import React from 'react'
import './sidebar.css'
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
                       <li className="sidebarListItem"><AccountBalanceIcon className="sidebarIcon"/>Home</li>
                       <li className="sidebarListItem"><HowToRegSharpIcon className="sidebarIcon"/>Enquiry</li>
                       <li className="sidebarListItem"><TagFacesSharpIcon className="sidebarIcon"/>Registration</li>
                       <li className="sidebarListItem"><SpellcheckSharpIcon className="sidebarIcon"/>Admission</li>
                   </ul>
                </div>
            </div>
        </div>
    )
}

