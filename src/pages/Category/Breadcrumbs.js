import React from 'react';
import share from './assets/share.png';
import './Category.css';
import { Link } from 'react-router-dom';

function Breadcrumbs () {
  return (
    
    <div className='breadcrumbs wrapper'>
        <div className='breadcrumbs_path'><Link to='/'><span>Home</span></Link></div>
        <div className='breadcrumbs_share'><img src={share} alt='img'/>Share</div>
       
    </div>
  )
}

export default Breadcrumbs