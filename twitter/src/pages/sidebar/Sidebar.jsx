import React, { useState } from 'react'
import './Sidebar.css'
import SidebarOptions from './SidebarOptions';
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreIcon from "@mui/icons-material/More"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DoneIcon from '@mui/icons-material/Done';
import { Avatar, Button, Divider, IconButton, ListItemIcon, Menu, MenuItem } from '@mui/material';
import {useNavigate} from 'react-router-dom'
import CustomLink from './CustomLink';

const Sidebar = ({handleLogout, user}) => {
  const [anchorEl,setAnchorEl]=useState(null)
  const openMenu=Boolean(anchorEl);
  const navigate=useNavigate()

  const handleClick=(e)=>{
      setAnchorEl(e.currentTarget)
  }
  const handleClose=()=>{
    setAnchorEl(null)
  }
  
  return (
    <div className='sidebar'>
      <TwitterIcon className="sidebar__twitterIcon" />
      <CustomLink to='/home/feed'>
        <SidebarOptions active Icon={HomeIcon} text="Home" />
      </CustomLink>
      <CustomLink to='/home/explore'>
        <SidebarOptions Icon={SearchIcon} text="Explore" />
      </CustomLink>
      <CustomLink to='/home/notifications'>
        <SidebarOptions Icon={NotificationsNoneIcon} text="Notifications" />
      </CustomLink>
      <CustomLink to='/home/messages'>
        <SidebarOptions Icon={MailOutlineIcon} text="Messages" />
      </CustomLink>
      <CustomLink to='/home/bookmarks'>
        <SidebarOptions Icon={BookmarkBorderIcon} text="Bookmarks" />
      </CustomLink>
      <CustomLink to='/home/lists'>
        <SidebarOptions Icon={ListAltIcon} text="Lists" />
      </CustomLink>
      <CustomLink to='/home/profile'>
        <SidebarOptions Icon={PermIdentityIcon} text="Profile" />
      </CustomLink>
      <CustomLink to='/home/more'>
        <SidebarOptions Icon={MoreIcon} text="More" />
      </CustomLink>

    <Button variant='outlined' className='sidebar_tweet'>Tweet</Button>
    <div className='Profile_info'>
      <Avatar/>
      <div className='user_info'>
        <h4>Mohd Asim</h4>
        <h5>@Asim</h5>
      </div>
      <IconButton 
      size='sm'
      sx={{ml:2}}
      aria-controls={openMenu ? 'basic-menu' : undefined}
      aria-haspopup='true'
      aria-expanded={openMenu ? 'true' : undefined}
      onClick={handleClick}

       ><MoreHorizIcon/></IconButton>
       <Menu id='basic-menu'
       anchorEl={anchorEl} open={openMenu} onClick={handleClose} onClose={handleClose}
       > 
        <MenuItem className='Profile_info1' onClick={() => navigate('/home/profile')}>
        <Avatar/>
      <div className='user_info subUser_info'>
        <div>
        <h4>Mohd Asim</h4>
        <h5>@Asim</h5>
        </div>
        <ListItemIcon className='done_icon'><DoneIcon/></ListItemIcon>
      </div>
        </MenuItem>
        <Divider/>
        <MenuItem>Add a Existing Account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout @Asim</MenuItem>
       </Menu>
    </div>
    </div>
  )
}

export default Sidebar
