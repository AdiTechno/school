import React from 'react'
import './topbar.css';

export default function topbar() {
    return (
    <div className="topbar">
        <div className="topbarwraper">
            <div className="topleft">
                <span className="logo">School Admin</span>
            </div>
            <div className="topright">
                <div className="topbaricons">
                    
                    Logout
                </div>
            </div>
        </div>
            
    </div>
    )
}
