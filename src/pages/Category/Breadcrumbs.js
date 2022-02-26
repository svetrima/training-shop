import React from 'react';
import share from './assets/share.png';
import './Category.css';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ typeProducts }) => {
  return (
    <div className='breadcrumbs'>
      <div className='wrapper'>
        <div className='breadcrumbs_path'><Link to='/'><span>Home</span></Link> ► <span>{`${typeProducts}`}</span></div>
        <div className='breadcrumbs_share'><img src={share} alt='img' />Share</div>
      </div>
    </div>
  )
}

export default Breadcrumbs