'use client'

import Image from 'next/image'
import Link from 'next/link'

const categories = [
  {
    title: 'Top Selling',
    products: [
      {
        id: 1,
        name: 'Nestle Original Coffee-Mate Coffee Creamer',
        price: 32.85,
        oldPrice: 33.8,
        rating: 4.0,
        image: '/assets/imgs/shop/thumbnail-1.jpg',
      },
      {
        id: 2,
        name: 'Nestle Original Coffee-Mate Coffee Creamer',
        price: 32.85,
        oldPrice: 33.8,
        rating: 4.0,
        image: '/assets/imgs/shop/thumbnail-2.jpg',
      },
      {
        id: 3,
        name: 'Nestle Original Coffee-Mate Coffee Creamer',
        price: 32.85,
        oldPrice: 33.8,
        rating: 4.0,
        image: '/assets/imgs/shop/thumbnail-3.jpg',
      },
    ]
  },
  {
    title: 'Trending Products',
    products: [
      {
        id: 4,
        name: 'Organic Cage-Free Grade A Large Brown Eggs',
        price: 32.85,
        oldPrice: 33.8,
        rating: 4.0,
        image: '/assets/imgs/shop/thumbnail-4.jpg',
      },
      {
        id: 5,
        name: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
        price: 32.85,
        oldPrice: 33.8,
        rating: 4.0,
        image: '/assets/imgs/shop/thumbnail-5.jpg',
      },
      {
        id: 6,
        name: 'Naturally Flavored Cinnamon Vanilla Light Roast Coffee',
        price: 32.85,
        oldPrice: 33.8,
        rating: 4.0,
        image: '/assets/imgs/shop/thumbnail-6.jpg',
      },
    ]
  },
  {
    title: 'Recently added',
    products: [
      {
        id: 7,
        name: 'Pepperidge Farm Farmhouse Hearty White Bread',
        price: 32.85,
        oldPrice: 33.8,
        rating: 4.0,
        image: '/assets/imgs/shop/thumbnail-7.jpg',
      },
      {
        id: 8,
        name: 'Organic Frozen Triple Berry Blend',
        price: 32.85,
        oldPrice: 33.8,
        rating: 4.0,
        image: '/assets/imgs/shop/thumbnail-8.jpg',
      },
      {
        id: 9,
        name: 'Oroweat Country Buttermilk Bread',
        price: 32.85,
        oldPrice: 33.8,
        rating: 4.0,
        image: '/assets/imgs/shop/thumbnail-9.jpg',
      },
    ]
  },
  {
    title: 'Top Rated',
    products: [
      {
        id: 10,
        name: 'Foster Farms Takeout Crispy Classic Buffalo Wings',
        price: 32.85,
        oldPrice: 33.8,
        rating: 4.0,
        image: '/assets/imgs/shop/thumbnail-10.jpg',
      },
      {
        id: 11,
        name: 'Angie\'s Boomchickapop Sweet & Salty Kettle Corn',
        price: 32.85,
        oldPrice: 33.8,
        rating: 4.0,
        image: '/assets/imgs/shop/thumbnail-11.jpg',
      },
      {
        id: 12,
        name: 'All Natural Italian-Style Chicken Meatballs',
        price: 32.85,
        oldPrice: 33.8,
        rating: 4.0,
        image: '/assets/imgs/shop/thumbnail-12.jpg',
      },
    ]
  },
]

export default function TopSelling() {
  return (
    <section className="section-padding mb-30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={category.title} 
              className="mb-sm-5 mb-md-0 wow animate__animated animate__fadeInUp"
              data-wow-delay={`${index * 0.1}s`}
            >
              <h4 className="section-title style-1 mb-6 text-xl font-bold">
                {category.title}
              </h4>
              <div className="product-list-small space-y-4">
                {category.products.map((product) => (
                  <div 
                    key={product.id} 
                    className="flex items-center hover-up p-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="shopping-cart-img flex-shrink-0 mr-4">
                      <Link href={`/product/${product.id}`} className="block">
                        <div className="relative w-16 h-16">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover rounded-lg"
                            sizes="64px"
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="shopping-cart-title flex-1">
                      <h6 className="mb-1">
                        <Link 
                          href={`/product/${product.id}`}
                          className="text-sm font-medium text-gray-800 hover:text-brand line-clamp-2"
                        >
                          {product.name}
                        </Link>
                      </h6>
                      <div className="product-rate-cover mb-1">
                        <div className="product-rate inline-block">
                          <div 
                            className="product-rating h-2 bg-gradient-to-r from-yellow-400 to-gray-300"
                            style={{ width: `${(product.rating / 5) * 100}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-500 ml-1">
                          ({product.rating.toFixed(1)})
                        </span>
                      </div>
                      <div className="product-price">
                        <span className="text-brand font-bold">${product.price.toFixed(2)}</span>
                        <span className="text-gray-400 line-through text-sm ml-2">
                          ${product.oldPrice.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}