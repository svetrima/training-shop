import React from 'react';
import share from './assets/share.png';
import './Category.css';

function Breadcrumbs () {
  return (
    
    <div className='breadcrumbs'>
        <div className='wrapper'>
        <div className='breadcrumbs_path'><span>Home</span></div>
        <div className='breadcrumbs_share'><img src={share} alt='img'/>Share</div>
        </div>
    </div>
  )
}

export default Breadcrumbs