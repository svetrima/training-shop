import React from 'react';
import './Product.css';
import '../../index.css';
import '../Category/Category.css';
import Breadcrumbs from '../Category/Breadcrumbs';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
//import Slider from '../../Components/Slider/Slider';
import like from './assets/icons/like.png';
import hanger from './assets/icons/hanger.png';
import scales from './assets/icons/scales.png';
import exchange from '../../Components/Header/assets/refresh.png';
import delivery from '../../Components/Header/assets/truck.png';
import mail from '../../Components/Navbar/assets/mail.png';
import stripe from './assets/icons/Stripe_x42.png';
import aes from './assets/icons/aes_x42.png';
import paypal from './assets/icons/paypal_2_x42.png';
import visa from './assets/icons/visa_x42.png';
import mastercard from './assets/icons/mastercard_x42.png';
import discover from './assets/icons/discover_x42.png';
import americanexpress from './assets/icons/american-express_x42.png';
import fullrating from './assets/full_rating.png';
//import mediumActive from './assets/medium_active.png';
//import medium1 from './assets/medium_1.png';
//import medium2 from './assets/medium_2.png';
//import medium3 from './assets/medium_3.png';
//import full from './assets/full.png';
import sizeActive from './assets/icons/size_active.png';
import sizeXS from './assets/icons/size_XS.png';
import sizeM from './assets/icons/size_M.png';
import sizeL from './assets/icons/size_L.png';
import choiceActive from './assets/choise_active.png';
import choice1 from './assets/choice_2.png';
import choice2 from './assets/choice_3.png';
import choice3 from './assets/choice_4.png';
import message from './assets/icons/annotation.png';
import { info } from './Info';
import { related } from './RelatedProduct';
import { Link } from 'react-router-dom';
import SliderProduct from '../../Components/Slider/SliderProduct';


function Product() {
    const productType = ['women'];
    return (
        <div>
            <Navbar />
            <div className='page-product' data-test-id={`product-page-${productType}`}>
                <Breadcrumbs />
                <div className='head_product'>
                    <div className='main_title'>
                        <div className='wrapper'>
                            <h2>Women's tracksuit Q109</h2>
                        </div>
                    </div>
                    <div className='preview_info'>
                        <div className='wrapper layouts-2-columns'>
                            <div className='preview_rating'>
                                <img src={fullrating} alt='rating' />
                                <span className='count_review'>2 reviews</span>
                            </div>
                            <div className='preview_sku layouts-2-columns'>
                                <div className='sku_article'>SKU:<span>777</span></div>
                                <div className='sku_available'>Availability:<span>In Stock</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='wrapper'>
                    <div className='gallery layouts-2-columns'>

                        <SliderProduct />
                        {/*  <div className='gallery_block__choose'>
                                <div className='paginaition layouts-2-columns'>
                                    <div className='chevron chevron_up'></div>
                                    <div className='chevron chevron_down'></div>
                                </div>

                                <img src={mediumActive} alt='active' />
                                <img src={medium1} alt='medium1' />
                                <img src={medium2} alt='medium2' />
                                <img src={medium3} alt='medium3' />
                            </div> */}
                        {/*   <div className='gallery_block__preview'>
                                <img src={full} alt='' />
                                <Slider />
                            </div>*/}

                        <div className='gallery_description'>
                            <div className='clothes_description'>
                                <div className='clothes_description__color'>
                                    <div className='color_title'>
                                        <h4>color:</h4>
                                        <span className='colorful_title'>Blue</span>
                                    </div>
                                    <div className='color_choice'>
                                        <img src={choiceActive} alt='active' />
                                        <img src={choice1} alt='choice1' />
                                        <img src={choice2} alt='choice2' />
                                        <img src={choice3} alt='choice3' />
                                    </div>
                                </div>
                                <div className='clothes_description__size'>
                                    <div className='size_title'>
                                        <h4>size:</h4>
                                        <span className='size'>S</span>
                                    </div>
                                    <div className='size_choice'>
                                        <img src={sizeXS} alt='sizeXS' />
                                        <img src={sizeActive} alt='active' />
                                        <img src={sizeM} alt='sizeM' />
                                        <img src={sizeL} alt='sizeL' />

                                    </div>
                                    <div className='size_guide'>
                                        <span><img src={hanger} alt='hanger' /> Size quide</span>
                                    </div>
                                </div>
                            </div>
                            <div className='gallery_description__price'>
                                <span className='cost'>$ 379.99</span>
                                <button className='product_btn btn'>add to card</button>
                                <span><img src={like} alt='like' /></span>
                                <span><img src={scales} alt='scales' /></span>
                            </div>
                            <div className='gallery_description__delivery'>
                                <div className='layouts-3-columns'>
                                    <img src={delivery} alt='delivery' />
                                    <div className='delivery'>
                                        <h3>Shipping &amp; Delivery</h3>
                                    </div>
                                    <img src={exchange} alt='exchange' />
                                    <div className='exchange'>
                                        <h3>Returns &amp; Exchanges</h3>
                                    </div>
                                    <img src={mail} alt='mail' />
                                    <div className='mail'>
                                        <h3>Ask a question</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='gallery_description__checkout'>
                                <h4>guaranteed safe checkout</h4>
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
                                <h3>description</h3>
                                <div className='description_details'>
                                    <h3>additional information</h3>
                                    <ul>
                                        {info.map(element => {
                                            return <li><span className='description_details__title'>{element.name}:</span><span className='description_details__content'>{element.detail}</span></li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className='gallery_description__review'>
                                <div className='review_info'>
                                    <h3>reviews</h3>
                                    <div className='review_sub layouts-2-columns'>
                                        <div className='rating_info'>
                                            <img src={fullrating} alt='rating' />
                                            <span className='count_review'>2 reviews</span>
                                        </div>
                                        <div className='new_review'>
                                            <img src={message} alt='message' />
                                            <span className='add_review'>Write a review</span>

                                        </div>
                                    </div>
                                    <div className='review_block'>
                                        <div className='review_block__title layouts-2-columns'>
                                            <h4 className='user_title'>Oleh Chabanov</h4>
                                            <div className='rating_info'>
                                                <span className='date_review'>3 months ago</span>
                                                <img src={fullrating} alt='rating' /></div>
                                        </div>
                                        <div className='user_content'>
                                            <p>On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment</p>
                                        </div>

                                    </div>
                                    <div className='review_block'>
                                        <div className='review_block__title layouts-2-columns'>
                                            <h4 className='user_title'>ShAmAn design</h4>
                                            <div className='rating_info'>
                                                <span className='date_review'>3 months ago</span>
                                                <img src={fullrating} alt='rating' />
                                            </div>
                                        </div>


                                        <div className='user_content'>
                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti</p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='gallery_related'>
                        <div className='gallery_related__title layouts-2-columns'>
                            <h2>related products</h2>
                            <div className='paginaition layouts-2-columns'>
                                <div className='chevron chevron_prev'></div>
                                <div className='chevron chevron_next'></div>
                            </div>

                        </div>
                        <div className='gallery_related__block layouts-4-columns'>
                            {related.map(element => {
                                return <Link to={`/${element.category}/${element.id}`} className='cards-item'><div className='card'>
                                    <img key={element.img} src={element.img} alt={element.title} />
                                    <div className='card_content'>
                                        <h4 className='card_item__title'>{element.title}</h4>
                                        <div className='card_item__description'>
                                            <span className='card_item__price'>{element.price}</span>
                                            <img key={element.rating} src={element.rating} alt='rating' /></div>
                                    </div>
                                </div>
                                </Link>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Product