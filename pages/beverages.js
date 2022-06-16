import React from 'react'
import { client } from '../lib/client'

import {Product, FooterBanner, HeroBanner} from '../components'

const Home = ({products, bannerData}) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
 

      <div className="products-heading">
        <h2>Beverages</h2>
        </div>

        <div className='products-container'>
        {
        products.filter(product => product.typeoffood=== "beverages").map
        ((product) => <Product key={product._id} product={product} />)}


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
