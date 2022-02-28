import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import '../../Components/List/List.css';
import preloader from './assets/Square-Loading.png';
import './Category.css';
import Breadcrumbs from './Breadcrumbs';
import ProductsPage from '../../Components/List/ProductsPage';
import FilterProducts from './FilterProducts';


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
                    <FilterProducts />

                    <ProductsPage typeProducts={typeProducts} />
                    <div className='preloader'><img src={preloader} alt='preloader' /></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Category