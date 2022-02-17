import React from 'react'
import '../Header.css'
import HeaderOption from './HeaderOption';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Header() {
  return (
    <div className='header'>
       
        <div className="header__left">
          <img src="https://img.icons8.com/fluency/48/000000/linkedin.png"/>
          <div className="header__search">
             <SearchIcon />
                
             <input type="text" />
          </div>
        </div>
        <div className="header__right">
        <HeaderOption Icon={HomeIcon} title='Home'/>
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
        <HeaderOption Icon={ChatIcon} title='Messaging'/>
        <HeaderOption Icon={NotificationsIcon} title='Notification'/>
        <HeaderOption avatar="https://www.wwe.com/f/styles/gallery_img_l/public/all/2020/12/129_TLC_12202020JG_11021--2f4c36e6ec3e7c8fc96967094789f2c7.jpg" title='Me'/>
        </div>  
    </div>
  )
}
