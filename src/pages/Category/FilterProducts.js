import React from 'react';
import { useState } from 'react';
import classNames from "classnames";
import grid from './assets/view-grid.png';
import list from './assets/view-list.png';
import filter from './assets/filter.png';
//import { PRODUCTS } from '../../Components/List/ProductsData';
import './Category.css';

function FilterProducts() {
    const [isFilterOpen, toggleFilter] = useState(false);
    const showFilter = () => {
        toggleFilter(!isFilterOpen)
    };
    return (
        <>
            <div className='filter_panel'>
                <div className='filter'><img src={filter} alt='filter' data-test-id='filter-button' onClick={showFilter} /><span>Filter</span></div>
                <div className='filter_view'>
                    <div className='filter_view__list'><img src={list} alt='grid' /></div>
                    <div className='filter_view__grid'><img src={grid} alt='grid' /></div>
                </div>
                <div className='filter_bestseller'>
                    <select>
                        <option value='bestsellers'>bestsellers</option>
                        <option value='new arrivals'>new arrivals</option>
                        <option value='specials'>specials</option>
                        <option value='most viewed'>most viewed</option>
                        <option value='featured products'>featured products</option>
                    </select>
                </div>

            </div>
            <div className={classNames('filter_block layouts-4-columns', { 'filter_block__show': isFilterOpen })}>
                <div className='filter_block__color' data-test-id='filters-color'>
                    <h3 className='filter_block__title color_title'>Color</h3>
                    <div className='filter_block__content color_content'>
                        <ul>
                            <li>
                                <input type='checkbox' id='black' name='black' />
                                <label for='black'>Black</label></li>
                            <li>
                                <input type='checkbox' id='green' name='green' />
                                <label for='green'>Green</label></li>
                            <li>
                                <input type='checkbox' id='grey' name='grey' />
                                <label for='grey'>Grey</label></li>
                            <li>
                                <input type='checkbox' id='brown' name='brown' />
                                <label for='brown'>Brown</label></li>
                            <li>
                                <input type='checkbox' id='blue' name='blue' />
                                <label for='blue'>Blue</label></li>
                            <li>
                                <input type='checkbox' id='white' name='white' />
                                <label for='white'>White</label></li>
                            <li>
                                <input type='checkbox' id='multicolor' name='multicolor' />
                                <label for='multicolor'>Multicolor</label></li>
                            <li>
                                <input type='checkbox' id='red' name='red' />
                                <label for='red'>Red</label></li>
                            <li>
                                <input type='checkbox' id='yellow' name='yellow' />
                                <label for='yellow'>Yellow</label></li>
                            <li>
                                <input type='checkbox' id='beige' name='beige' />
                                <label for='beige'>Beige</label></li>
                            <li>
                                <input type='checkbox' id='vinous' name='vinous' />
                                <label for='vinous'>Vinous</label></li>
                            <li>
                                <input type='checkbox' id='turquoise' name='turquoise' />
                                <label for='turquoise'>Turquoise</label></li>
                            <li>
                                <input type='checkbox' id='orange' name='orange' />
                                <label for='orange'>Orange</label></li>
                        </ul>
                    </div>
                </div>
                <div className='filter_block__size' data-test-id='filters-size'>
                    <h3 className='filter_block__title size_title'>Size</h3>
                    <div className='filter_block__content size_content'>
                        <ul>
                            <li>
                                <input type='checkbox' id='xxs' name='xxs' />
                                <label for='xxs'>XXS INT</label>
                            </li>
                            <li>
                                <input type='checkbox' id='xs' name='xs' />
                                <label for='xs'>XS INT</label>
                            </li>
                            <li>
                                <input type='checkbox' id='s' name='s' />
                                <label for='s'>S INT</label>
                            </li>
                            <li>
                                <input type='checkbox' id='m' name='m' />
                                <label for='m'>M INT</label>
                            </li>
                            <li>
                                <input type='checkbox' id='l' name='l' />
                                <label for='l'>L INT</label>
                            </li>
                            <li>
                                <input type='checkbox' id='xl' name='xl' />
                                <label for='xl'>XL INT</label>
                            </li>
                            <li>
                                <input type='checkbox' id='xxl' name='xxl' />
                                <label for='xxl'>XXL INT</label>
                            </li>
                            <li>
                                <input type='checkbox' id='3xl' name='3xl' />
                                <label for='3xl'>3XL INT</label>
                            </li>
                            <li>
                                <input type='checkbox' id='5xl' name='5xl' />
                                <label for='5xl'>5XL INT</label>
                            </li>
                            <li>
                                <input type='checkbox' id='36/32g' name='36/32g' />
                                <label for='36/32g'>36/32 GER</label>
                            </li>
                            <li>
                                <input type='checkbox' id='38/32g' name='38/32g' />
                                <label for='38/32g'>38/32 GER</label>
                            </li>
                            <li>
                                <input type='checkbox' id='40/32g' name='40/32g' />
                                <label for='40/32g'>40/32 GET</label>
                            </li>
                            <li>
                                <input type='checkbox' id='40r' name='40r' />
                                <label for='40r'>40 RUS</label>
                            </li>
                            <li>
                                <input type='checkbox' id='42r' name='42r' />
                                <label for='42r'>42 RUS</label>
                            </li>
                            <li>
                                <input type='checkbox' id='48r' name='48r' />
                                <label for='48r'>48 RUS</label>
                            </li>
                            <li>
                                <input type='checkbox' id='32e' name='32e' />
                                <label for='32e'>32 EUR</label>
                            </li>
                            <li>
                                <input type='checkbox' id='34e' name='34e' />
                                <label for='34e'>34 EUR</label>
                            </li>
                            <li>
                                <input type='checkbox' id='36e' name='36e' />
                                <label for='36e'>36 EUR</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='filter_block__brand' data-test-id='filters-brand'>
                    <h3 className='filter_block__title brand_title'>Brand</h3>
                    <div className='filter_block__content brand_content'>
                        <ul>
                            <li>
                                <input type='checkbox' id='ck' name='ck' />
                                <label for='ck'>Casual Friday by Blend</label>
                            </li>
                            <li>
                                <input type='checkbox' id='AudenCavill' name='AudenCavill' />
                                <label for='AudenCavill'>Auden Cavill</label>
                            </li>
                            <li>
                                <input type='checkbox' id='PrimoEmporio' name='PrimoEmporio' />
                                <label for='PrimoEmporio'>Primo Emporio</label>
                            </li>
                            <li>
                                <input type='checkbox' id='MangoMan' name='MangoMan' />
                                <label for='MangoMan'>Mango Man</label>
                            </li>
                            <li>
                                <input type='checkbox' id='Jack&Jones' name='Jack&Jones' />
                                <label for='Jack&Jones'>Jack & Jones</label>
                            </li>
                            <li>
                                <input type='checkbox' id='StormyLife' name='StormyLife' />
                                <label for='StormyLife'>Stormy Life</label>
                            </li>
                            <li>
                                <input type='checkbox' id='TomTailor' name='TomTailor' />
                                <label for='TomTailor'>Tom Tailor</label>
                            </li>
                            <li>
                                <input type='checkbox' id='BraveSoul' name='BraveSoul' />
                                <label for='BraveSoul'>Brave Soul</label>
                            </li>
                            <li>
                                <input type='checkbox' id='Dissedent' name='Dissedent' />
                                <label for='Dissedent'>Dissedent</label>
                            </li>
                            <li>
                                <input type='checkbox' id='Produkt' name='Produkt' />
                                <label for='Produkt'>Produkt</label>
                            </li>
                            <li>
                                <input type='checkbox' id='Mango' name='Mango' />
                                <label for='Mango'>Mango</label>
                            </li>
                            <li>
                                <input type='checkbox' id='Only' name='Only' />
                                <label for='Only'>Only</label>
                            </li>
                            <li>
                                <input type='checkbox' id='Winzor' name='Winzor' />
                                <label for='Winzor'>Winzor</label>
                            </li>
                            <li>
                                <input type='checkbox' id='adidas' name='adidas' />
                                <label for='adidas'>adidas</label>
                            </li>
                            <li>
                                <input type='checkbox' id='NoisyMay' name='NoisyMay' />
                                <label for='NoisyMay'>Noisy May</label>
                            </li>
                            <li>
                                <input type='checkbox' id='levis' name='levis' />
                                <label for='levis'>Levi's</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='filter_block__price' data-test-id='filters-price'>
                    <h3 className='filter_block__title price_title'>Price</h3>
                    <div className='filter_block__content price_content'>
                        <ul>
                            <li>
                                <input type='checkbox' id='thousand' name='thousand' />
                                <label for='thousand'>1200+</label>
                            </li>
                            <li>
                                <input type='checkbox' id='six' name='six' />
                                <label for='six'>600-1200</label>
                            </li>
                            <li>
                                <input type='checkbox' id='three' name='three' />
                                <label for='three'>300-600</label>
                            </li>
                            <li>
                                <input type='checkbox' id='undred' name='hundred' />
                                <label for='hundred'>150-300</label>
                            </li>
                            <li><input type='checkbox' id='fifty' name='fifty' />
                                <label for='fifty'>50-150</label></li>
                            <li><input type='checkbox' id='seven' name='seven' />
                                <label for='seven'>7-50</label></li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default FilterProducts