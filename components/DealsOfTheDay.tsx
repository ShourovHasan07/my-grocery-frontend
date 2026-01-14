'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const deals = [
  {
    id: 1,
    name: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
    price: 32.85,
    oldPrice: 33.8,
    rating: 4.0,
    image: '/assets/imgs/banner/banner-5.png',
    vendor: 'NestFood',
    countdown: '2025/12/25 00:00:00',
  },
  {
    id: 2,
    name: 'Perdue Simply Smart Organics Gluten Free',
    price: 24.85,
    oldPrice: 26.8,
    rating: 4.0,
    image: '/assets/imgs/banner/banner-6.png',
    vendor: 'Old El Paso',
    countdown: '2026/04/25 00:00:00',
  },
  {
    id: 3,
    name: 'Signature Wood-Fired Mushroom and Caramelized',
    price: 12.85,
    oldPrice: 13.8,
    rating: 3.0,
    image: '/assets/imgs/banner/banner-7.png',
    vendor: 'Progresso',
    countdown: '2027/03/25 00:00:00',
  },
  {
    id: 4,
    name: 'Simply Lemonade with Raspberry Juice',
    price: 15.85,
    oldPrice: 16.8,
    rating: 3.0,
    image: '/assets/imgs/banner/banner-8.png',
    vendor: 'Yoplait',
    countdown: '2025/02/25 00:00:00',
  },
]

export default function DealsOfTheDay() {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const target = new Date('2025/12/25 00:00:00').getTime()
      const distance = target - now

      if (distance < 0) {
        clearInterval(timer)
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0'),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="section-padding pb-5">
      <div className="container mx-auto">
        <div className="section-title mb-8 flex justify-between items-center">
          <h3 className="text-2xl font-bold">Deals Of The Day</h3>
          <Link 
            href="/shop" 
            className="text-brand hover:text-green-600 flex items-center"
          >
            All Deals →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((deal, index) => (
            <div
              key={deal.id}
              className="product-cart-wrap style-2 border rounded-lg overflow-hidden wow animate__animated animate__fadeInUp"
              data-wow-delay={`${index * 0.1}s`}
            >
              <div className="product-img-action-wrap">
                <div className="product-img relative h-48">
                  <Link href={`/product/${deal.id}`}>
                    <Image
                      src={deal.image}
                      alt={deal.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                    />
                  </Link>
                </div>
              </div>
              
              <div className="product-content-wrap p-4">
                <div className="deals-countdown-wrap mb-4">
                  <div className="deals-countdown flex space-x-2">
                    {Object.entries(timeLeft).map(([unit, value]) => (
                      <div key={unit} className="text-center">
                        <div className="countdown-amount bg-gray-100 rounded px-2 py-1 font-bold">
                          {value}
                        </div>
                        <div className="countdown-period text-xs text-gray-500 mt-1">
                          {unit}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="deals-content">
                  <h3 className="mb-2">
                    <Link
                      href={`/product/${deal.id}`}
                      className="text-sm font-semibold text-gray-800 hover:text-brand line-clamp-2"
                    >
                      {deal.name}
                    </Link>
                  </h3>
                  
                  <div className="product-rate-cover mb-2">
                    <div className="flex items-center">
                      <div className="product-rate">
                        <div className="product-rating h-3 bg-gradient-to-r from-yellow-400 to-gray-300"
                             style={{ width: `${(deal.rating / 5) * 100}%` }} />
                      </div>
                      <span className="text-xs text-gray-600 ml-1">
                        ({deal.rating.toFixed(1)})
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <span className="text-xs text-gray-500">By </span>
                    <Link 
                      href={`/vendor/${deal.vendor.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-xs text-brand hover:underline"
                    >
                      {deal.vendor}
                    </Link>
                  </div>
                  
                  <div className="product-card-bottom flex justify-between items-center">
                    <div className="product-price">
                      <span className="text-brand font-bold">${deal.price.toFixed(2)}</span>
                      <span className="text-gray-400 line-through text-sm ml-2">
                        ${deal.oldPrice.toFixed(2)}
                      </span>
                    </div>
                    <button className="add-cart bg-brand text-white px-3 py-1 rounded text-sm hover:bg-green-600">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}