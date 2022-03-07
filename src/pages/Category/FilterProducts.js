import React from 'react';
import { useState, useMemo } from 'react';
import classNames from "classnames";
import grid from './assets/view-grid.png';
import list from './assets/view-list.png';
import filter from './assets/filter.png';
import { PRODUCTS } from '../../Components/List/ProductsData';
import './Category.css';

const FilterProducts = ({ typeProducts }) => {
    const [isFilterOpen, toggleFilter] = useState(false);
    const showFilter = () => {
        toggleFilter(!isFilterOpen)
    };
    const colorsData = useMemo(
        () =>
            [...new Set(PRODUCTS[typeProducts].map(({ images }) => images.map(({ color }) => color)).flat())],
        [typeProducts]
    );
    const sizesData = useMemo(
        () =>
            [...new Set(PRODUCTS[typeProducts].map((size) => size.sizes).flat())], [typeProducts]);
    console.log(sizesData)
    const brandData = useMemo(
        () =>
            [...new Set(PRODUCTS[typeProducts].map(({ brand }) => brand))], [typeProducts]);
    const priceData = ['1200+', '600-1200', '300-600', '150-300', '50-150', '7-50'];


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
                            {colorsData.map((color) => (
                                <li>
                                    <input type='checkbox' id={color} value={color} name={color} />
                                    <label for={color}>{color}</label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='filter_block__size' data-test-id='filters-size'>
                    <h3 className='filter_block__title size_title'>Size</h3>
                    <div className='filter_block__content size_content'>
                        <ul>
                            {sizesData.map((size) => (
                                <li>
                                    <input type='checkbox' id={size} value={size} name={size} />
                                    <label for={size}>{size}</label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='filter_block__brand' data-test-id='filters-brand'>
                    <h3 className='filter_block__title brand_title'>Brand</h3>
                    <div className='filter_block__content brand_content'>
                        <ul>
                            {brandData.map((brand) => (
                                <li>
                                    <input type='checkbox' id={brand} value={brand} name={brand} />
                                    <label for={brand}>{brand}</label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='filter_block__price' data-test-id='filters-price'>
                    <h3 className='filter_block__title price_title'>Price</h3>
                    <div className='filter_block__content price_content'>
                        <ul>
                            {priceData.map((price) => (
                                <li>
                                    <input type='checkbox' id={price} value={price} name={price} />
                                    <label for={price}>{price}</label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default FilterProducts