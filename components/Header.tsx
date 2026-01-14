"use client";

import React, { useState } from "react";
import Image from "next/image";

//import MobileMenu from "./MobileMenu";






const Header = () => {


  // State to control mobile menu visibility
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openMobileMenu = () => setMobileMenuOpen(true);
  const closeMobileMenu = () => setMobileMenuOpen(false);




  return (
    <>
      <header className="header-area header-style-1 header-height-2">
        <div className="mobile-promotion">
          <span>
            Grand opening, <strong>up to 15%</strong> off all items. Only{" "}
            <strong>3 days</strong> left
          </span>
        </div>

        {/* Header Top */}
        <div className="header-top header-top-ptb-1 d-none d-lg-block">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-4">
                <div className="header-info">
                  <ul>
                    <li>
                      <a href="page-about.html">About Us</a>
                    </li>
                    <li>
                      <a href="page-account.html">My Account</a>
                    </li>
                    <li>
                      <a href="shop-wishlist.html">Wishlist</a>
                    </li>
                    <li>
                      <a href="shop-order.html">Order Tracking</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-6 col-lg-4 text-center">
                <div id="news-flash" className="d-inline-block">
                  <ul>
                    <li>100% Secure delivery without contacting the courier</li>
                    <li>Supper Value Deals - Save more with coupons</li>
                    <li>Trendy 25silver jewelry, save up 35% off today</li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4">
                <div className="header-info header-info-right">
                  <ul>
                    <li>
                      Need help? Call Us: <strong className="text-brand"> + 1800 900</strong>
                    </li>
                    <li>
                      <a className="language-dropdown-active" href="#">
                        English <i className="fi-rs-angle-small-down"></i>
                      </a>
                      <ul className="language-dropdown">
                        <li>
                          <a href="#">
                            <img src="assets/imgs/theme/flag-fr.png" alt="" />
                            Français
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="assets/imgs/theme/flag-dt.png" alt="" />
                            Deutsch
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="assets/imgs/theme/flag-ru.png" alt="" />
                            Pусский
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a className="language-dropdown-active" href="#">
                        USD <i className="fi-rs-angle-small-down"></i>
                      </a>
                      <ul className="language-dropdown">
                        <li>
                          <a href="#">
                            <img src="assets/imgs/theme/flag-fr.png" alt="" />
                            INR
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="assets/imgs/theme/flag-dt.png" alt="" />
                            MBP
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="assets/imgs/theme/flag-ru.png" alt="" />
                            EU
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header Middle */}
        <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
          <div className="container">
            <div className="header-wrap">
              <div className="logo logo-width-1">
                <a href="index.html">
                  <img src="assets/imgs/theme/logo.svg" alt="logo" />
                </a>
              </div>

              <div className="header-right">
                <div className="search-style-2">
                  <form action="#">
                    <select className="select-active">
                      <option>All Categories</option>
                      <option>Milks and Dairies</option>
                      <option>Wines & Alcohol</option>
                      <option>Clothing & Beauty</option>
                      <option>Pet Foods & Toy</option>
                      <option>Fast food</option>
                      <option>Baking material</option>
                      <option>Vegetables</option>
                      <option>Fresh Seafood</option>
                      <option>Noodles & Rice</option>
                      <option>Ice cream</option>
                    </select>
                    <input type="text" placeholder="Search for items..." />
                  </form>
                </div>

                <div className="header-action-right">
                  <div className="header-action-2">
                    {/* Compare */}
                    <div className="header-action-icon-2">
                      <a href="shop-compare.html">
                        <img
                          className="svgInject"
                          alt="Nest"
                          src="assets/imgs/theme/icons/icon-compare.svg"
                        />
                        <span className="pro-count blue">3</span>
                      </a>
                      {/* <a href="shop-compare.html">
                        <span className="lable ml-0">Compare</span>
                      </a> */}
                    </div>

                    {/* Wishlist */}
                    {/* <div className="header-action-icon-2">
                      <a href="shop-wishlist.html">
                        <img
                          className="svgInject"
                          alt="Nest"
                          src="assets/imgs/theme/icons/icon-heart.svg"
                        />
                        <span className="pro-count blue">6</span>
                      </a>
                      <a href="shop-wishlist.html">
                        <span className="lable">Wishlist</span>
                      </a>
                    </div> */}

                    {/* Cart */}
                    <div className="header-action-icon-2">
                      <a className="mini-cart-icon" href="shop-cart.html">
                        <img alt="Nest" src="assets/imgs/theme/icons/icon-cart.svg" />
                        <span className="pro-count blue">2</span>
                      </a>
                      <a href="shop-cart.html">
                        <span className="lable">Cart</span>
                      </a>
                      {/* Cart dropdown */}
                      <div className="cart-dropdown-wrap cart-dropdown-hm2">
                        <ul>
                          <li>
                            <div className="shopping-cart-img">
                              <a href="shop-product-right.html">
                                <img
                                  alt="Nest"
                                  src="assets/imgs/shop/thumbnail-3.jpg"
                                />
                              </a>
                            </div>
                            <div className="shopping-cart-title">
                              <h4>
                                <a href="shop-product-right.html">Daisy Casual Bag</a>
                              </h4>
                              <h4>
                                <span>1 × </span>$800.00
                              </h4>
                            </div>
                            <div className="shopping-cart-delete">
                              <a href="#">
                                <i className="fi-rs-cross-small"></i>
                              </a>
                            </div>
                          </li>

                          <li>
                            <div className="shopping-cart-img">
                              <a href="shop-product-right.html">
                                <img
                                  alt="Nest"
                                  src="assets/imgs/shop/thumbnail-2.jpg"
                                />
                              </a>
                            </div>
                            <div className="shopping-cart-title">
                              <h4>
                                <a href="shop-product-right.html">Corduroy Shirts</a>
                              </h4>
                              <h4>
                                <span>1 × </span>$3200.00
                              </h4>
                            </div>
                            <div className="shopping-cart-delete">
                              <a href="#">
                                <i className="fi-rs-cross-small"></i>
                              </a>
                            </div>
                          </li>
                        </ul>

                        <div className="shopping-cart-footer">
                          <div className="shopping-cart-total">
                            <h4>Total <span>$4000.00</span></h4>
                          </div>
                          <div className="shopping-cart-button">
                            <a href="shop-cart.html" className="outline">
                              View cart
                            </a>
                            <a href="shop-checkout.html">Checkout</a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Account */}
                    <div className="header-action-icon-2">
                      <a href="page-account.html">
                        <img
                          className="svgInject"
                          alt="Nest"
                          src="assets/imgs/theme/icons/icon-user.svg"
                        />
                      </a>
                      <a href="page-account.html">
                        <span className="lable ml-0">Account</span>
                      </a>
                      <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                        <ul>
                          <li>
                            <a href="page-account.html">
                              <i className="fi fi-rs-user mr-10"></i>My Account
                            </a>
                          </li>
                          <li>
                            <a href="page-account.html">
                              <i className="fi fi-rs-location-alt mr-10"></i>Order Tracking
                            </a>
                          </li>
                          <li>
                            <a href="page-account.html">
                              <i className="fi fi-rs-label mr-10"></i>My Voucher
                            </a>
                          </li>
                          <li>
                            <a href="shop-wishlist.html">
                              <i className="fi fi-rs-heart mr-10"></i>My Wishlist
                            </a>
                          </li>
                          <li>
                            <a href="page-account.html">
                              <i className="fi fi-rs-settings-sliders mr-10"></i>Setting
                            </a>
                          </li>
                          <li>
                            <a href="page-login.html">
                              <i className="fi fi-rs-sign-out mr-10"></i>Sign out
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header Bottom */}
        <div className="header-bottom header-bottom-bg-color sticky-bar">
  <div className="container">
    <div className="header-wrap header-space-between position-relative">
      {/* Logo for mobile */}
      <div className="logo logo-width-1 d-block d-lg-none">
        <a href="index.html">
          <img src="assets/imgs/theme/logo.svg" alt="logo" />
        </a>
      </div>

      {/* Navigation */}
      <div className="header-nav d-none d-lg-flex">
        {/* Categories */}
        <div className="main-categori-wrap d-none d-lg-block">
          <a className="categories-button-active" href="#">
            <span className="fi-rs-apps"></span> <span className="et">Browse</span> All Categories
            <i className="fi-rs-angle-down"></i>
          </a>
          <div className="categories-dropdown-wrap categories-dropdown-active-large font-heading">
            <div className="d-flex categori-dropdown-inner">
              <ul>
                <li>
                  <a href="shop-grid-right.html">
                    <img src="assets/imgs/theme/icons/category-1.svg" alt="" />Milks and Dairies
                  </a>
                </li>
                <li>
                  <a href="shop-grid-right.html">
                    <img src="assets/imgs/theme/icons/category-2.svg" alt="" />Clothing & beauty
                  </a>
                </li>
                <li>
                  <a href="shop-grid-right.html">
                    <img src="assets/imgs/theme/icons/category-3.svg" alt="" />Pet Foods & Toy
                  </a>
                </li>
                <li>
                  <a href="shop-grid-right.html">
                    <img src="assets/imgs/theme/icons/category-4.svg" alt="" />Baking material
                  </a>
                </li>
                <li>
                  <a href="shop-grid-right.html">
                    <img src="assets/imgs/theme/icons/category-5.svg" alt="" />Fresh Fruit
                  </a>
                </li>
              </ul>
              <ul className="end">
                <li>
                  <a href="shop-grid-right.html">
                    <img src="assets/imgs/theme/icons/category-6.svg" alt="" />Wines & Drinks
                  </a>
                </li>
                <li>
                  <a href="shop-grid-right.html">
                    <img src="assets/imgs/theme/icons/category-7.svg" alt="" />Fresh Seafood
                  </a>
                </li>
                <li>
                  <a href="shop-grid-right.html">
                    <img src="assets/imgs/theme/icons/category-8.svg" alt="" />Fast food
                  </a>
                </li>
                <li>
                  <a href="shop-grid-right.html">
                    <img src="assets/imgs/theme/icons/category-9.svg" alt="" />Vegetables
                  </a>
                </li>
                <li>
                  <a href="shop-grid-right.html">
                    <img src="assets/imgs/theme/icons/category-10.svg" alt="" />Bread and Juice
                  </a>
                </li>
              </ul>
            </div>

            <div className="more_slide_open" style={{ display: "none" }}>
              <div className="d-flex categori-dropdown-inner">
                <ul>
                  <li>
                    <a href="shop-grid-right.html">
                      <img src="assets/imgs/theme/icons/icon-1.svg" alt="" />Milks and Dairies
                    </a>
                  </li>
                  <li>
                    <a href="shop-grid-right.html">
                      <img src="assets/imgs/theme/icons/icon-2.svg" alt="" />Clothing & beauty
                    </a>
                  </li>
                </ul>
                <ul className="end">
                  <li>
                    <a href="shop-grid-right.html">
                      <img src="assets/imgs/theme/icons/icon-3.svg" alt="" />Wines & Drinks
                    </a>
                  </li>
                  <li>
                    <a href="shop-grid-right.html">
                      <img src="assets/imgs/theme/icons/icon-4.svg" alt="" />Fresh Seafood
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="more_categories">
              <span className="icon"></span> <span className="heading-sm-1">Show more...</span>
            </div>
          </div>
        </div>

        {/* Main Menu */}
        <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
          <nav>
            <ul>
              <li className="hot-deals">
                <img src="assets/imgs/theme/icons/icon-hot.svg" alt="hot deals" />
                <a href="shop-grid-right.html">Deals</a>
              </li>
              <li>
                <a className="active" href="index.html">
                  Home <i className="fi-rs-angle-down"></i>
                </a>
                <ul className="sub-menu">
                  <li><a href="index.html">Home 1</a></li>
                  <li><a href="index-2.html">Home 2</a></li>
                  <li><a href="index-3.html">Home 3</a></li>
                  <li><a href="index-4.html">Home 4</a></li>
                  <li><a href="index-5.html">Home 5</a></li>
                  <li><a href="index-6.html">Home 6</a></li>
                </ul>
              </li>

               <li>
                                        <a href="page-about.html">About</a>
        </li>
               <li>
                                        <a href="page-about.html"> Shop</a>
        </li>
               <li>
                                        <a href="page-about.html">Vendors</a>
        </li>


              {/* Add other menu items similarly, converted to JSX */}
            </ul>
          </nav>
        </div>
      </div>

      {/* Hotline */}
      <div className="hotline d-none d-lg-flex">
        <img src="assets/imgs/theme/icons/icon-headphone.svg" alt="hotline" />
        <p>
          1900 - 888
          <span>24/7 Support Center</span>
        </p>
      </div>

      {/* Burger menu icon for mobile */}
      <div className="header-action-icon-2 d-block d-lg-none">
        <div className="burger-icon burger-icon-white">
          <span className="burger-icon-top"></span>
          <span className="burger-icon-mid"></span>
          <span className="burger-icon-bottom"></span>
        </div>
      </div>

      {/* Header actions for mobile */}
      <div className="header-action-right d-block d-lg-none">
        <div className="header-action-2">
          <div className="header-action-icon-2">
            <a href="shop-wishlist.html">
              <img alt="Nest" src="assets/imgs/theme/icons/icon-heart.svg" />
              <span className="pro-count white">4</span>
            </a>
          </div>
          <div className="header-action-icon-2">
            <a className="mini-cart-icon" href="#">
              <img alt="Nest" src="assets/imgs/theme/icons/icon-cart.svg" />
              <span className="pro-count white">2</span>
            </a>
            <div className="cart-dropdown-wrap cart-dropdown-hm2">
              <ul>
                <li>
                  <div className="shopping-cart-img">
                    <a href="shop-product-right.html">
                      <img alt="Nest" src="assets/imgs/shop/thumbnail-3.jpg" />
                    </a>
                  </div>
                  <div className="shopping-cart-title">
                    <h4><a href="shop-product-right.html">Plain Striola Shirts</a></h4>
                    <h3><span>1 × </span>$800.00</h3>
                  </div>
                  <div className="shopping-cart-delete">
                    <a href="#"><i className="fi-rs-cross-small"></i></a>
                  </div>
                </li>
                <li>
                  <div className="shopping-cart-img">
                    <a href="shop-product-right.html">
                      <img alt="Nest" src="assets/imgs/shop/thumbnail-4.jpg" />
                    </a>
                  </div>
                  <div className="shopping-cart-title">
                    <h4><a href="shop-product-right.html">Macbook Pro 2025</a></h4>
                    <h3><span>1 × </span>$3500.00</h3>
                  </div>
                  <div className="shopping-cart-delete">
                    <a href="#"><i className="fi-rs-cross-small"></i></a>
                  </div>
                </li>
              </ul>
              <div className="shopping-cart-footer">
                <div className="shopping-cart-total">
                  <h4>Total <span>$383.00</span></h4>
                </div>
                <div className="shopping-cart-button">
                  <a href="shop-cart.html">View cart</a>
                  <a href="shop-checkout.html">Checkout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      </header>

      {/* Mobile header */}
      <div className="mobile-header-active mobile-header-wrapper-style">
        <div className="mobile-header-wrapper-inner">
          {/* ... convert the mobile header the same way as above */}


         
      {/* <MobileMenu isOpen={mobileMenuOpen} onClose={closeMobileMenu} />  */}





        </div>
      </div>
    </>
  );
};

export default Header;
