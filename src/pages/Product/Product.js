import React from 'react';
import './Product.css';
import '../../index.css';
import '../Category/Category.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
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
import choiceActive from './assets/choise_active.png';
import choice1 from './assets/choice_2.png';
import choice2 from './assets/choice_3.png';
import choice3 from './assets/choice_4.png';
import message from './assets/icons/annotation.png';
import SliderProduct from '../../Components/Slider/SliderProduct';
import SliderRelated from '../../Components/Slider/SliderRelated';
import share from '../Category/assets/share.png';
import { Link, useParams } from 'react-router-dom';
import { PRODUCTS } from '../../Components/List/ProductsData';
import { useState } from 'react';
//import classNames from "classnames";


function Product({ typeProducts }) {
    const params = useParams();
    const productId = params.id;

    const color = [...new Set(PRODUCTS[typeProducts].filter((el) => el.id === productId).map(({ images }) => images.map(({ color }) => color)).flat())];
    const material = [...new Set(PRODUCTS[typeProducts].filter((el) => el.id === productId).map((el) => el.material))];
    // const size = [...new Set(PRODUCTS[typeProducts].filter((el) => el.id === productId).map((el) => el.sizes))].join(' ').split(',');
    const size = PRODUCTS[typeProducts].filter((el) => el.id === productId).map((el) => el.sizes).flat();
    const price = [...new Set(PRODUCTS[typeProducts].filter((el) => el.id === productId).map((el) => el.price))];
    const reviews = [...new Set(PRODUCTS[typeProducts].filter((el) => el.id === productId).map((el) => el.reviews).flat())];
    console.log(size)

    const [sizeValue, setSizeValue] = useState(size[0]);


    return (
        <div>
            <Navbar />
            <div className='page-product' data-test-id={`product-page-${typeProducts}`}>

                <div className='breadcrumbs'>
                    <div className='wrapper'>
                        <div className='breadcrumbs_path'><Link to='/'><span>Home</span></Link> ► <Link to={`/${typeProducts}`}><span>{`${typeProducts}`}</span></Link> ►
                            {PRODUCTS[typeProducts].filter((el) => el.id === productId).map((el) => (
                                <span>{el.name}</span>
                            ))}
                        </div>
                        <div className='breadcrumbs_share'><img src={share} alt='img' />Share</div>
                    </div>
                </div>

                <div className='head_product'>
                    <div className='main_title'>
                        <div className='wrapper'>
                            {PRODUCTS[typeProducts].filter((el) => el.id === productId).map((el) => (
                                <h2>{el.name}</h2>
                            ))}
                        </div>
                    </div>
                    <div className='preview_info'>
                        <div className='wrapper layouts-2-columns'>
                            <div className='preview_rating'>
                                <img src={fullrating} alt='rating' />
                                <span className='count_review'>{reviews.length} reviews</span>
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

                        <SliderProduct typeProducts={typeProducts}/>

                        <div className='gallery_description'>
                            <div className='clothes_description'>
                                <div className='clothes_description__color'>
                                    <div className='color_title'>
                                        <h4>color:</h4>
                                        <span className='colorful_title'>{color}</span>
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
                                        <span className='size'>{sizeValue}</span>
                                    </div>
                                    <div className='size_choice'>
                                        {/*   {size.map((el) => {
                                            return <button
                                                key={el.id}
                                                value={el}
                                                className={classNames('size_btn btn', { 'size_btn__active': el[sizeValue] === sizeValue })}
                                                onClick={() => setSizeValue(size)}>
                                                <span>{el}</span>
                                            </button>
                                        })}
                                        */}
                                        {size.map((el) => {
                                            return <button
                                                key={el.id}
                                                value={el}
                                                type='button'
                                                className={['size_btn btn', el === sizeValue ? 'size_btn__active' : ''].join(' ')}
                                                onClick={() => setSizeValue(el)}>
                                                <span>{el}</span>
                                            </button>
                                        })}
                                    </div>
                                    <div className='size_guide'>
                                        <span><img src={hanger} alt='hanger' /> Size quide</span>
                                    </div>
                                </div>
                            </div>
                            <div className='gallery_description__price'>
                                <span className='cost'>$ {price}</span>
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
                                        <li><span className='description_details__title'>Color:</span>
                                            <span className='description_details__content'>{color}</span>
                                        </li>
                                        <li>
                                            <span className='description_details__title'>Size:</span><span className='description_details__content'>{size.toString()}</span>
                                        </li>
                                        <li>
                                            <span className='description_details__title'>Material:</span><span className='description_details__content'>{material}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='gallery_description__review'>
                                <div className='review_info'>
                                    <h3>reviews</h3>
                                    <div className='review_sub layouts-2-columns'>
                                        <div className='rating_info'>
                                            <img src={fullrating} alt='rating' />
                                            <span className='count_review'>{reviews.length} reviews</span>
                                        </div>
                                        <div className='new_review'>
                                            <img src={message} alt='message' />
                                            <span className='add_review'>Write a review</span>
                                        </div>
                                    </div>
                                    {reviews.map((el) => {
                                        return <div className='review_block'>
                                            <div className='review_block__title layouts-2-columns'>
                                                <h4 className='user_title'>{el.name}</h4>
                                                <div className='rating_info'>
                                                    <span className='date_review'>3 months ago</span>
                                                    <img src={fullrating} alt={el.rating} /></div>
                                            </div>
                                            <div className='user_content'>
                                                <p>{el.text}</p>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <SliderRelated typeProducts={typeProducts}/>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Product