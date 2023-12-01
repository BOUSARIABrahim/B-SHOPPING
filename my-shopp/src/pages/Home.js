import React, { useContext } from 'react';
// import product context
import { ProductContext } from '../contexts/ProductContext'
import Product from '../components/Product'
import Hero from '../components/Hero'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import SideBar from '../components/Sidebar';

function Home() {
  // get the products
  const { products } = useContext(ProductContext);
  const filteredProducts = products.filter(item => {
    return (item.category === "men's clothing" || item.category === "women's clothing");
  }

  )
  return (
    <div>
      <Header/>
      <Hero/>
      <section className='py-16'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:gridcols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {filteredProducts.map(product => {
              return (
                <Product key={product.id} product={product} />)
            })}
          </div>
        </div>
      </section>
      <SideBar/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Home;

