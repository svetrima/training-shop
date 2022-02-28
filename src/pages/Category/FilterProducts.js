import React from 'react';
import { useState } from 'react';
import classNames from "classnames";
import grid from './assets/view-grid.png';
import list from './assets/view-list.png';
import filter from './assets/filter.png';
import './Category.css';

function FilterProducts () {
    const [isFilterOpen, toggleFilter] = useState(false);
    const showFilter = () => {
        toggleFilter(!isFilterOpen)
   };
    return (
        <>
            <div className='filter_panel'>
            <div className='filter'><img src={filter} alt='filter' data-test-id='filter-button'onClick={showFilter}/><span>Filter</span></div>
                <div className='filter_view'>
                    <div className='filter_view__list'><img src={list} alt='grid' /></div>
                    <div className='filter_view__grid'><img src={grid} alt='grid' /></div>
                </div>
                <div className='filter_bestseller'>
                    <select>
                        <option value='bestsellers'>bestsellers</option>
                    </select>
                </div>
                
            </div>
            <div className={classNames('filter_block layouts-4-columns', { 'filter_block__show': isFilterOpen })}>
                    <div className='filter_block__color' data-test-id='filters-color'>
                        <ul>
                           
                            <li>Black</li>
                            <li>Cyan</li>
                            <li>Green</li>
                            <li>Grey</li>
                            <li>Pink</li>
                            <li>White</li>
                            <li>Pink</li>
                            <li>White</li>
                        </ul>
                    </div>
                    <div className='filter_block__size' data-test-id='filters-size'>
                        <ul>
                            <li>
                                <input type='checkbox' id='xl' name='x' />
                                <label for='xl'>XL</label>
                            </li>
                            <li>
                                <input type='checkbox' id='l' name='l' />
                                <label for='l'>L</label>
                            </li>
                            <li>
                                <input type='checkbox' id='m' name='m' />
                                <label for='m'>M</label>
                            </li>
                            <li>
                                <input type='checkbox' id='s' name='s' />
                                <label for='s'>S</label>
                            </li>
                            <li><input type='checkbox' id='xs' name='x' />
                                <label for='xs'>XS</label></li>
                        </ul>

                    </div>
                    <div className='filter_block__brand' data-test-id='filters-brand'>
                        <ul>
                            <li>
                                <input type='checkbox' id='ck' name='ck' />
                                <label for='ck'>Ck</label>
                            </li>
                            <li>
                                <input type='checkbox' id='hm' name='hm' />
                                <label for='hm'>H&M</label>
                            </li>
                            <li>
                                <input type='checkbox' id='kalles' name='kalles' />
                                <label for='kalles'>Kalles</label>
                            </li>
                            <li>
                                <input type='checkbox' id='levis' name='levis' />
                                <label for='levis'>Levi's</label>
                            </li>
                            <li><input type='checkbox' id='monki' name='monki' />
                                <label for='monki'>Monki</label></li>
                            <li><input type='checkbox' id='nike' name='nike' />
                                <label for='nike'>Nike</label></li>
                        </ul>

                    </div>
                    <div className='filter_block__price' data-test-id='filters-price'>
                        <ul>
                            <li>
                                <input type='checkbox' id='ck' name='ck' />
                                <label for='ck'>1200+</label>
                            </li>
                            <li>
                                <input type='checkbox' id='hm' name='hm' />
                                <label for='hm'>600-1200</label>
                            </li>
                            <li>
                                <input type='checkbox' id='kalles' name='kalles' />
                                <label for='kalles'>300-600</label>
                            </li>
                            <li>
                                <input type='checkbox' id='levis' name='levis' />
                                <label for='levis'>150-300</label>
                            </li>
                            <li><input type='checkbox' id='monki' name='monki' />
                                <label for='monki'>50-150</label></li>
                            <li><input type='checkbox' id='nike' name='nike' />
                                <label for='nike'>7-50</label></li>
                        </ul>

                    </div>
                
        </div>
        </>
    )
}

export default FilterProducts