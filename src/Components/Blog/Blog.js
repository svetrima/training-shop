import React from 'react';
import './Blog.css';
import '../../index.css';


function Blog() {
    return (
        <div className='blog wrapper'>
            <div className='blog_header'>
                <h2>Latest from blog</h2>
                <span>see all</span>
            </div>
            <div className='layouts-3-columns'>
                <div className='article_block first_post'>
                    <div className='article_card'>
                        <h3>The Easiest Way to Break</h3>
                        <p>But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</p>
                    </div>
                </div>
                <div className='article_block second_post'>
                    <div className='article_card'>
                        <h3>Wedding Season</h3>
                        <p>But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</p>
                    </div>
                </div>
                <div className='article_block third_post'>
                    <div className='article_card'>
                        <h3>Recent Favorites On Repeat</h3>
                        <p>But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</p>
                    </div>
                </div>
            </div>
        </div>);

  
}

export default Blog