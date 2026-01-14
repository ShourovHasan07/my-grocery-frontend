"use client";

import React from "react";
import Image from "next/image";
import logo from "@/public/assets/imgs/theme/logo.svg";

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`mobile-header-active mobile-header-wrapper-style fixed top-0 left-0 w-full h-full bg-white z-50 transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="mobile-header-wrapper-inner p-4 overflow-y-auto h-full">
        {/* Mobile Header Top */}
        <div className="mobile-header-top flex justify-between items-center mb-4">
          <div className="mobile-header-logo">
            <a href="/">
              <Image src={logo} alt="logo" width={150} height={50} />
            </a>
          </div>
          <div className="mobile-menu-close">
            <button className="close-style search-close" onClick={onClose}>
              <span className="icon-top block w-6 h-0.5 bg-black my-1 rotate-45"></span>
              <span className="icon-bottom block w-6 h-0.5 bg-black my-1 -rotate-45"></span>
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mobile-search search-style-3 mobile-header-border mb-4">
          <form className="flex">
            <input
              type="text"
              placeholder="Search for items…"
              className="flex-grow p-2 border"
            />
            <button type="submit" className="p-2 bg-gray-200">
              <i className="fi-rs-search"></i>
            </button>
          </form>
        </div>

        {/* Mobile Menu Navigation */}
        <div className="mobile-menu-wrap mobile-header-border mb-4">
          <nav>
            <ul className="mobile-menu font-heading space-y-2">
              <li className="menu-item-has-children">
                <a href="/">Home</a>
                <ul className="dropdown pl-4">
                  <li><a href="/">Home 1</a></li>
                  <li><a href="/index-2">Home 2</a></li>
                  <li><a href="/index-3">Home 3</a></li>
                  <li><a href="/index-4">Home 4</a></li>
                  <li><a href="/index-5">Home 5</a></li>
                  <li><a href="/index-6">Home 6</a></li>
                </ul>
              </li>

              <li className="menu-item-has-children">
                <a href="/shop-grid-right">Shop</a>
                <ul className="dropdown pl-4">
                  <li><a href="/shop-grid-right">Shop Grid – Right Sidebar</a></li>
                  <li><a href="/shop-grid-left">Shop Grid – Left Sidebar</a></li>
                  <li><a href="/shop-list-right">Shop List – Right Sidebar</a></li>
                  <li><a href="/shop-list-left">Shop List – Left Sidebar</a></li>
                  <li><a href="/shop-fullwidth">Shop - Wide</a></li>
                  <li className="menu-item-has-children">
                    <a href="#">Single Product</a>
                    <ul className="dropdown pl-4">
                      <li><a href="/shop-product-right">Product – Right Sidebar</a></li>
                      <li><a href="/shop-product-left">Product – Left Sidebar</a></li>
                      <li><a href="/shop-product-full">Product – No sidebar</a></li>
                      <li><a href="/shop-product-vendor">Product – Vendor Info</a></li>
                    </ul>
                  </li>
                  <li><a href="/shop-filter">Shop – Filter</a></li>
                  <li><a href="/shop-wishlist">Shop – Wishlist</a></li>
                  <li><a href="/shop-cart">Shop – Cart</a></li>
                  <li><a href="/shop-checkout">Shop – Checkout</a></li>
                  <li><a href="/shop-compare">Shop – Compare</a></li>
                  <li className="menu-item-has-children">
                    <a href="#">Shop Invoice</a>
                    <ul className="dropdown pl-4">
                      <li><a href="/shop-invoice-1">Shop Invoice 1</a></li>
                      <li><a href="/shop-invoice-2">Shop Invoice 2</a></li>
                      <li><a href="/shop-invoice-3">Shop Invoice 3</a></li>
                      <li><a href="/shop-invoice-4">Shop Invoice 4</a></li>
                      <li><a href="/shop-invoice-5">Shop Invoice 5</a></li>
                      <li><a href="/shop-invoice-6">Shop Invoice 6</a></li>
                    </ul>
                  </li>
                </ul>
              </li>

              {/* Add other menu items similarly */}
            </ul>
          </nav>
        </div>

        {/* Mobile Info */}
        <div className="mobile-header-info-wrap mb-4 space-y-2">
          <div className="single-mobile-header-info">
            <a href="/page-contact"><i className="fi-rs-marker"></i> Our location </a>
          </div>
          <div className="single-mobile-header-info">
            <a href="/page-login"><i className="fi-rs-user"></i> Log In / Sign Up </a>
          </div>
          <div className="single-mobile-header-info">
            <a href="#"><i className="fi-rs-headphones"></i> (+01) - 2345 - 6789 </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="site-copyright text-sm text-gray-500">
          Copyright 2025 © Nest. All rights reserved. Powered by AliThemes.
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
