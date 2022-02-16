import React from 'react';
//import './Product.css';
import '../../index.css';
import '../Category/Category.css';
import Breadcrumbs from '../Category/Breadcrumbs';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Slider from '../../Components/Slider/Slider';
import like from './assets/icons/like.png';
import hanger from './assets/icons/hanger.png';
import scales from './assets/icons/scales.png';
import exchange from '../../Components/Header/assets/refresh.png';
import delivery from '../../Components/Header/assets/truck.png';
import support from '../../Components/Header/assets/support.png';
import stripe from './assets/icons/Stripe_x42.png';
import aes from './assets/icons/aes_x42.png';
import paypal from './assets/icons/paypal_2_x42.png';
import visa from './assets/icons/visa_x42.png';
import mastercard from './assets/icons/mastercard_x42.png';
import discover from './assets/icons/discover_x42.png';
import americanexpress from './assets/icons/american-express_x42.png';
import fullrating from './assets/full_rating.png';
import mediumActive from './assets/medium_active.png';
import medium1 from './assets/medium_1.png';
import medium2 from './assets/medium_2.png';
import medium3 from './assets/medium_3.png';
import full from './assets/full.png';
import sizeActive from './assets/icons/size_active.png';
import sizeXS from './assets/icons/size_XS.png';
import sizeM from './assets/icons/size_M.png';
import sizeL from './assets/icons/size_L.png';
import choiceActive from './assets/choise_active.png';
import choice1 from './assets/choice_2.png';
import choice2 from './assets/choice_3.png';
import choice3 from './assets/choice_4.png';


function Product() {
    const productType = ['men'];
    return (
        <div>
            <Navbar />
            <div className='page-product' data-test-id={`product-page-${productType}`}>
                <Breadcrumbs />
                <div className='main_title wrapper'><h2>Women's tracksuit Q109</h2></div>
                <div className='preview_info layouts-2-columns wrapper'>
                    <div className='preview_rating'>
                        <img src={fullrating} alt='rating' />
                        <span className='count_review'>2 reviews</span>
                    </div>
                    <div className='preview_sku'>
                        <div className='sku_article'>SKU:<span>777</span></div>
                        <div className='sku_available'>Availability:<span>In Stock</span></div>
                    </div>
                </div>

                <div className='wrapper'>
                    <div className='gallery layouts-2-columns'>
                        <div className='gallery_block layouts-2-columns'>
                            <div className='gallery_block__choose'>
                                <img src={mediumActive} alt='active' />
                                <img src={medium1} alt='medium1' />
                                <img src={medium2} alt='medium2' />
                                <img src={medium3} alt='medium3' />
                            </div>
                            <div className='gallery_block__preview'>
                                <img src={full} alt='' />
                                <Slider />
                            </div>
                        </div>
                        <div className='gallery_description'>
                            <div className='clothes_description'>
                                <div className='clothes_description__color'>
                                    <h4>color:<span>blue</span></h4>
                                    <img src={choiceActive} alt='active' />
                                    <img src={choice1} alt='choice1' />
                                    <img src={choice2} alt='choice2' />
                                    <img src={choice3} alt='choice3' />
                                </div>
                                <div className='clothes_description__size'>
                                    <h4>size:<span>s</span></h4>
                                    <img src={sizeXS} alt='sizeXS' />
                                    <img src={sizeActive} alt='active' />
                                    <img src={sizeM} alt='sizeM' />
                                    <img src={sizeL} alt='sizeL' />
                                    <span><img src={hanger} alt='hanger' /> Size quide</span>
                                </div>
                            </div>
                            <div className='gallery_description__price'>
                                <span className='cost'>$ 379.99</span>
                                <button className='product_btn btn'>add to card</button>
                                <span><img src={like} alt='like' /></span>
                                <span><img src={scales} alt='scales' /></span>
                            </div>
                            <div className='gallery_description__delivery layouts-3-columns'>
                                <img src={delivery} alt='delivery' />
                                <div className='delivery'>
                                    <h3>Shipping &amp; Delivery</h3>
                                </div>
                                <img src={exchange} alt='exchange' />
                                <div className='exchange'>
                                    <h3>Returns &amp; Exchanges</h3>
                                </div>
                                <img src={support} alt='support' />
                                <div className='support'>
                                    <h3>Ask a question</h3>
                                </div>
                            </div>
                            <div className='gallery_description__checkout'>
                                <ul className='pay_links'>
                                    <li><img src={stripe} alt="stripe" /></li>
                                    <li><img src={aes} alt="aes" /></li>
                                    <li><img src={paypal} alt="paypal" /></li>
                                    <li><img src={visa} alt="visa" /></li>
                                    <li><img src={mastercard} alt="mastecard" /></li>
                                    <li><img src={discover} alt="discover" /></li>
                                    <li><img src={americanexpress} alt="americanexpress" /></li>
                                </ul>
                            </div>
                            <div className='gallery_description__info'>

                            </div>
                            <div className='gallery_description__review'>
                                <div className='review_info'>
                                    <img src={fullrating} alt='rating' />
                                    <span className='count_review'></span>
                                </div>
                                <div className='new_review'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Product