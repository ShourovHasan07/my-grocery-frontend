"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { addToCartApi } from "@/lib/cartApi";
import { getGuestId } from "@/lib/guest";

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  vendor: string;
  badge?: string;
  rating: number;
  category: string;
}

const ProductTabs = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  // Fetch products
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:4000/products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Failed to fetch products", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Add to cart
  const handleAddToCart = async (productId: number) => {
    try {
      const guestId = getGuestId();
      if (!guestId) throw new Error("Guest ID not found");

      await addToCartApi(productId, 1, guestId);
      router.push("/shop-cart");
    } catch (err) {
      console.error(err);
      alert("Add to cart failed");
    }
  };

  return (
    <div>
      <section className="product-tabs section-padding position-relative">
        <div className="container">
          <div className="section-title style-2">
            <h3>Popular Products</h3>
          </div>

          <div className="tab-content">
            <div className="tab-pane fade show active">
              <div className="row product-grid-4">

                {products.map((item) => (
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6" key={item.id}>
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="#">
                            <img className="default-img" src={item.image} alt={item.name} />
                            <img className="hover-img" src={item.image} alt={item.name} />
                          </a>
                        </div>

                        {item.badge && (
                          <div className="product-badges product-badges-position product-badges-mrg">
                            <span className={item.badge.toLowerCase()}>{item.badge}</span>
                          </div>
                        )}
                      </div>

                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="#">{item.category}</a>
                        </div>

                        <h2>
                          <a href="#">{item.name}</a>
                        </h2>

                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div className="product-rating" style={{ width: `${item.rating * 20}%` }} />
                          </div>
                          <span className="font-small ml-5 text-muted">({item.rating})</span>
                        </div>

                        <div>
                          <span className="font-small text-muted">
                            By <a href="#">{item.vendor}</a>
                          </span>
                        </div>

                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>${item.price}</span>
                            {item.oldPrice && <span className="old-price">${item.oldPrice}</span>}
                          </div>

                          <div className="add-cart">
                            <a className="add" onClick={() => handleAddToCart(item.id)}>
                              <i className="fi-rs-shopping-cart mr-5" /> Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductTabs;
