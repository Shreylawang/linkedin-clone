import React from 'react'
import '../Sidebar.css'
import Avatar from '@mui/material/Avatar'
export default function Sidebar() {

  const recentItem = (topic) =>(
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  ) 
  
  return (
    <div className='sidebar'>
       <div className="sidebar__top">
           <img src="https://images.unsplash.com/photo-1506765515384-028b60a970df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="" />
           <Avatar className='sidebar__avatar' />
           <h2>Shrey Lawang</h2>
           <h4>slawang108@gmail.com</h4>
       </div>

       <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className='sidebar_statnumber'>6,895</p>
            </div> 
             <div className="sidebar__stat">
                <p>Views on post</p>
                <p className='sidebar_statnumber'>4,895</p>
            
            </div>  
       </div>
       <div className="sidebar__bottom">
           <p>Recent</p>
           {recentItem("reactjs")}
           {recentItem('programming')}
           {recentItem('software engineering')}
           {recentItem('design')}
           {recentItem('developer')}
       </div>
    </div>
  )
}
