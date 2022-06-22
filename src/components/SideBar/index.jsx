import React, {useState} from 'react';
import Item from '../Item';
import {Links} from '../../Data/Links';
import {
  sidebar,
  sidebarOpen,
  hamburger,
  linksContainer,
} from './styles.module.scss';
import logo from "../../images/logo.png"

const Sidebar = () => {
  const [open, setOpen] = useState (false);

  return (
    <div className={open ? sidebarOpen : sidebar}>
      <div className='containerLogo'>
        <img src={logo} style={{display: open ? "block" : "none"}} className="logo"></img>
        <div className='containerText' style={{display: open ? "block" : "none"}}>
          <p className="textPiz">Pizzería</p>
          <p className='textDon'>DON REMOLO</p>
        </div>
        <svg className={hamburger} onClick={() => setOpen (!open)} width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.4285C0 1.86018 0.225765 1.31514 0.627628 0.913273C1.02949 0.51141 1.57454 0.285645 2.14286 0.285645H27.8571C28.4255 0.285645 28.9705 0.51141 29.3724 0.913273C29.7742 1.31514 30 1.86018 30 2.4285C30 2.99682 29.7742 3.54187 29.3724 3.94373C28.9705 4.34559 28.4255 4.57136 27.8571 4.57136H2.14286C1.57454 4.57136 1.02949 4.34559 0.627628 3.94373C0.225765 3.54187 0 2.99682 0 2.4285Z" fill="#A6A6A6"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 13.1429C0 12.5745 0.225765 12.0295 0.627628 11.6276C1.02949 11.2258 1.57454 11 2.14286 11H27.8571C28.4255 11 28.9705 11.2258 29.3724 11.6276C29.7742 12.0295 30 12.5745 30 13.1429C30 13.7112 29.7742 14.2562 29.3724 14.6581C28.9705 15.0599 28.4255 15.2857 27.8571 15.2857H2.14286C1.57454 15.2857 1.02949 15.0599 0.627628 14.6581C0.225765 14.2562 0 13.7112 0 13.1429Z" fill="#A6A6A6"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 23.857C0 23.2886 0.225765 22.7436 0.627628 22.3417C1.02949 21.9399 1.57454 21.7141 2.14286 21.7141H15C15.5683 21.7141 16.1134 21.9399 16.5152 22.3417C16.9171 22.7436 17.1429 23.2886 17.1429 23.857C17.1429 24.4253 16.9171 24.9703 16.5152 25.3722C16.1134 25.7741 15.5683 25.9998 15 25.9998H2.14286C1.57454 25.9998 1.02949 25.7741 0.627628 25.3722C0.225765 24.9703 0 24.4253 0 23.857Z" fill="#A6A6A6"/>
        </svg>
      </div>
      <div className={linksContainer}>
        {Links &&
          Links.map (({to, text, svg}) => (
            <Item to={to} text={text} svg={svg} open={open} />
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
