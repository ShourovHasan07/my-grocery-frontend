'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const tabs = ['Featured', 'Popular', 'New added']

const products = {
  Featured: [
    {
      id: 1,
      name: 'Seeds of Change Organic Quinoa, Brown',
      price: 238.85,
      oldPrice: 245.8,
      rating: 4.0,
      image: '/assets/imgs/shop/product-1-1.jpg',
      hoverImage: '/assets/imgs/shop/product-1-2.jpg',
      badge: 'hot',
      badgeText: 'Save 15%',
      sold: 90,
      total: 120,
    },
    // Add more products...
  ],
  Popular: [
    // Popular products
  ],
  'New added': [
    // New products
  ],
}

export default function DailyBestSells() {
  const [activeTab, setActiveTab] = useState('Featured')

  return (
    <div className="wow animate__animated animate__fadeIn">
      <div className="section-title mb-8">
        <h3 className="text-2xl font-bold mb-4">Daily Best Sells</h3>
        <div className="flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg ${
                activeTab === tab
                  ? 'bg-brand text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3 hidden lg:block">
          <div className="banner-img style-2 rounded-lg overflow-hidden">
            <div className="relative h-full min-h-[300px]">
              <Image
                src="/assets/imgs/banner/banner-4.png"
                alt="Bring nature into your home"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center p-6">
                <div className="banner-text">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Bring nature into your home
                  </h2>
                  <Link
                    href="/shop"
                    className="btn btn-xs bg-white text-brand px-4 py-2 rounded-lg inline-flex items-center hover:bg-gray-100"
                  >
                    Shop Now →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products[activeTab as keyof typeof products]?.slice(0, 3).map((product) => (
              <div key={product.id} className="product-cart-wrap border rounded-lg overflow-hidden">
                <div className="product-img-action-wrap relative">
                  <div className="product-img product-img-zoom relative h-48">
                    <Link href={`/product/${product.id}`}>
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </Link>
                    {product.badge && (
                      <div className="product-badges absolute top-3 left-3">
                        <span className="px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded">
                          {product.badgeText}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="product-content-wrap p-4">
                  <div className="product-category mb-2">
                    <Link href="/vendor" className="text-sm text-gray-500 hover:text-brand">
                      Hodo Foods
                    </Link>
                  </div>
                  <h3 className="mb-2">
                    <Link
                      href={`/product/${product.id}`}
                      className="text-sm font-semibold text-gray-800 hover:text-brand line-clamp-2"
                    >
                      {product.name}
                    </Link>
                  </h3>
                  <div className="product-rate mb-2">
                    <div className="flex items-center">
                      <div className="product-rating h-3 bg-gradient-to-r from-yellow-400 to-gray-300"
                           style={{ width: '80%' }} />
                    </div>
                  </div>
                  <div className="product-price mb-3">
                    <span className="text-brand font-bold text-lg">${product.price.toFixed(2)}</span>
                    <span className="text-gray-400 line-through ml-2">${product.oldPrice.toFixed(2)}</span>
                  </div>
                  <div className="sold mb-4">
                    <div className="progress mb-2 bg-gray-200 rounded-full h-2">
                      <div 
                        className="progress-bar bg-brand rounded-full h-2"
                        style={{ width: `${(product.sold / product.total) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600">
                      Sold: {product.sold}/{product.total}
                    </span>
                  </div>
                  <button className="w-full bg-brand text-white py-2 rounded-lg hover:bg-green-600">
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}