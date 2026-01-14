import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  product: {
    id: number
    name: string
    category: string
    price: number
    oldPrice?: number
    rating: number
    image: string
    hoverImage?: string
    vendor?: string
    badge?: 'hot' | 'sale' | 'new' | 'best'
    discount?: number
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-cart-wrap mb-6 border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="product-img-action-wrap relative overflow-hidden">
        <div className="product-img product-img-zoom relative">
          <Link href={`/product/${product.id}`}>
            <div className="relative h-48">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {product.hoverImage && (
                <Image
                  src={product.hoverImage}
                  alt={product.name}
                  fill
                  className="object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )}
            </div>
          </Link>
        </div>
        
        {product.badge && (
          <div className="product-badges product-badges-position absolute top-3 left-3">
            <span className={`px-2 py-1 text-xs font-semibold rounded ${
              product.badge === 'hot' ? 'bg-red-500 text-white' :
              product.badge === 'sale' ? 'bg-green-500 text-white' :
              product.badge === 'new' ? 'bg-blue-500 text-white' :
              'bg-yellow-500 text-black'
            }`}>
              {product.badge === 'best' ? `-${product.discount}%` : product.badge}
            </span>
          </div>
        )}

        <div className="product-action-1 absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="action-btn bg-white p-2 rounded-full shadow-md hover:bg-brand hover:text-white">
            <span className="sr-only">Add to Wishlist</span>
            ♡
          </button>
          <button className="action-btn bg-white p-2 rounded-full shadow-md hover:bg-brand hover:text-white">
            <span className="sr-only">Compare</span>
            ⇄
          </button>
          <button className="action-btn bg-white p-2 rounded-full shadow-md hover:bg-brand hover:text-white">
            <span className="sr-only">Quick View</span>
            👁
          </button>
        </div>
      </div>

      <div className="product-content-wrap p-4">
        <div className="product-category mb-1">
          <Link href={`/category/${product.category.toLowerCase().replace(/\s+/g, '-')}`} 
                className="text-xs text-gray-500 hover:text-brand">
            {product.category}
          </Link>
        </div>
        
        <h2 className="product-title mb-2">
          <Link href={`/product/${product.id}`} 
                className="text-sm font-semibold text-gray-800 hover:text-brand line-clamp-2">
            {product.name}
          </Link>
        </h2>

        <div className="product-rate-cover mb-2 flex items-center">
          <div className="product-rate inline-block">
            <div 
              className="product-rating h-3 bg-gradient-to-r from-yellow-400 to-gray-300"
              style={{ width: `${(product.rating / 5) * 100}%` }}
            />
          </div>
          <span className="text-xs text-gray-500 ml-1">({product.rating.toFixed(1)})</span>
        </div>

        {product.vendor && (
          <div className="mb-2">
            <span className="text-xs text-gray-500">By </span>
            <Link href={`/vendor/${product.vendor.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="text-xs text-brand hover:underline">
              {product.vendor}
            </Link>
          </div>
        )}

        <div className="product-card-bottom flex justify-between items-center">
          <div className="product-price">
            <span className="current-price text-brand font-bold text-lg">
              ${product.price.toFixed(2)}
            </span>
            {product.oldPrice && (
              <span className="old-price text-gray-400 line-through ml-2 text-sm">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button className="add-cart bg-brand text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}