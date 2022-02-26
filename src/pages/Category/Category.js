import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import '../../Components/List/List.css';
import grid from './assets/view-grid.png';
import list from './assets/view-list.png';
import filter from './assets/filter.png';
import preloader from './assets/Square-Loading.png';
import './Category.css';
import Breadcrumbs from './Breadcrumbs';
import ProductsPage from '../../Components/List/ProductsPage';


const Category = ({ typeProducts }) => {
    return (
        <div>
            <Navbar />
            <div className='products-page' data-test-id={`products-page-${typeProducts}`}>
                <Breadcrumbs typeProducts={typeProducts} />
                <div className='main_title'>
                    <div className='wrapper'>
                        <h2>{`${typeProducts}`}</h2>
                    </div>
                </div>
                <div className='wrapper'>
                    <div className='filter_panel'>
                        <div className='filter'><img src={filter} alt='filter' /><span>Filter</span></div>
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
                    <ProductsPage typeProducts={typeProducts} />
                    <div className='preloader'><img src={preloader} alt='preloader' /></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Category