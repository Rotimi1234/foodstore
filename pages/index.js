import React from 'react'
import Link from 'next/link'
import { client } from '../lib/client'

import {Product, FooterBanner, HeroBanner} from '../components'

const Home = ({products, bannerData}) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
 

      <div className="products-heading">
        <h2>Best selling Products</h2>
        <p>Speaker of many variations</p>
        <h1>Choose your Category</h1>
        <p>Can`t find your combo? Click on your choice of Category and add to cart yourself</p>
        </div>
    <div className='bu'>
        <Link href={`/rice`}>
            <button className="but" type='button'>Rice
            </button>
          </Link>
          <Link href={`/swallow`}>
            <button className="but" type='button'>Swallow
            </button>
          </Link>
          <Link href={`/beverages`}>
            <button className="but" type='button'>Beverages
            </button>
          </Link>
          <Link href={`/vegetables`}>
            <button className="but" type='button'>Vegetables
            </button>
          </Link>
          </div>

        <div className='products-container'>
          {products?.map((product) => <Product key={product._id} product={product} />)}
          {console.log(products)}
      </div>
      <FooterBanner footerBanner={bannerData[1]} />
    </div>

    
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}
export default Home
