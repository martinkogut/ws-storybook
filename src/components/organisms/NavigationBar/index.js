import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import logo from '../../../assets/images/logo.png'

const NavigationBar = ({ name, position, className, style }) => {

  const baseClass = 'team-3col'

  const rootClass = cx(baseClass)

  return (
    <nav className="navbar navbar-default navbar-static-top mega mobile-nav">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>


              <a className="navbar-brand" href="../index.html"><img className="navbar-logo" src={logo} alt="Definity - Logo" /></a>
            </div>


            <div id="navbar" className="navbar-collapse collapse" style={{maxHeight: '648px', height: '0px'}} aria-expanded="false">
              <ul className="nav navbar-nav">


                <li className="dropdown mega-fw">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350" role="button" aria-haspopup="true" aria-expanded="false">Home<span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <div className="row">


                      <div className="col-lg-3 mb-sm-30">
                        <li className="dropdown-header">Multipage</li>
                        <li role="separator" className="divider"></li>
                        <li><a href="../index-main-mp.html" target="_blank">Main Demo</a></li>
                        <li><a href="../index-fs-slider-mp.html" target="_blank">Full Screen Slider</a></li>
                        <li><a href="../index-fs-video-mp.html" target="_blank">Full Screen Video</a></li>
                        <li><a href="../index-kenburn-mp.html" target="_blank">Kenburn Slider</a></li>
                        <li><a href="../index-fw-slider-mp.html" target="_blank">Full Width Slider</a></li>
                      </div>

                      <div className="col-lg-3 mb-sm-30">
                        <li className="dropdown-header">Multipage</li>
                        <li role="separator" className="divider"></li>
                        <li><a href="../index-animated-mp.html" target="_blank">Animated Heading</a></li>
                        <li><a href="../index-fw-video-mp.html" target="_blank">Full Width Video</a></li>
                        <li><a href="../index-text-mp.html" target="_blank">Text Slider</a></li>
                        <li><a href="../index-freelancer-mp.html" target="_blank">Freelancer</a></li>
                        <li><a href="../index-agency-mp.html" target="_blank">Agency</a></li>
                        <li><a href="../index-agency2-mp.html" target="_blank">Agency 2</a></li>
                      </div>


                      <div className="col-lg-3 mb-sm-30">
                        <li className="dropdown-header">Onepage</li>
                        <li role="separator" className="divider"></li>
                        <li><a href="../index-main-op.html" target="_blank">Main Demo</a></li>
                        <li><a href="../index-fs-slider-op.html" target="_blank">Full Screen Slider</a></li>
                        <li><a href="../index-fs-video-op.html" target="_blank">Full Screen Video</a></li>
                        <li><a href="../index-kenburn-op.html" target="_blank">Kenburn Slider</a></li>
                        <li><a href="../index-fw-slider-op.html" target="_blank">Full Width Slider</a></li>
                        <li><a href="../index-fw-video-op.html" target="_blank">Full Width Video</a></li>
                        <li><a href="../index-landing.html" target="_blank">Landing Page</a></li>
                      </div>

                      <div className="col-md-3 mb-sm-30">
                        <li className="dropdown-header">Onepage</li>
                        <li role="separator" className="divider"></li>
                        <li><a href="../index-animated-op.html" target="_blank">Animated Heading</a></li>
                        <li><a href="../index-text-op.html" target="_blank">Text Slider</a></li>
                        <li><a href="../index-freelancer-op.html" target="_blank">Freelancer</a></li>
                        <li><a href="../index-agency-op.html" target="_blank">Agency</a></li>
                        <li><a href="../index-agency2-op.html" target="_blank">Agency 2</a></li>
                        <li><a href="../index-app-landing.html" target="_blank">Mobile App</a></li>
                        <li><a href="../index-web-app-landing.html" target="_blank">Web App</a></li>

                      </div>
                    </div>
                  </ul>
                </li>



                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350" role="button" aria-haspopup="true" aria-expanded="false">Elements <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <div className="row">


                      <div className="col-lg-6 mb-sm-30">
                        <li className="dropdown-header">Basic</li>
                        <li role="separator" className="divider"></li>
                        <li><a href="../elements/typography.html" target="_blank"><i className="fa fa-font"></i> Typography</a></li>
                        <li><a href="../elements/buttons.html" target="_blank"><i className="fa fa-bold"></i> Buttons</a></li>
                        <li><a href="../elements/forms.html" target="_blank"><i className="fa fa-send"></i> Forms</a></li>
                        <li><a href="../elements/grid.html" target="_blank"><i className="fa fa-th"></i> Grid</a></li>
                        <li><a href="../elements/alerts.html" target="_blank"><i className="fa fa-info-circle"></i> Alerts</a></li>
                        <li><a href="../elements/labels.html" target="_blank"><i className="fa fa-tags"></i> Labels</a></li>
                        <li><a href="../elements/progress-bars.html" target="_blank"><i className="fa fa-tasks"></i> Progress Bars</a></li>
                        <li><a href="../http://fortawesome.github.io/Font-Awesome/icons/" target="_blank"><i className="fa fa-flag"></i> Font Awesome</a></li>
                        <li><a href="../elements/line-icons-page.html" target="_blank"><i className="fa fa-flag-o"></i> Line Icons</a></li>
                        <li><a href="../elements/linea-icons-page.html" target="_blank"><i className="fa fa-flag-o"></i> Line Icons 2</a></li>
                      </div>


                      <div className="col-lg-6 mb-sm-30">
                        <li className="dropdown-header">Layout</li>
                        <li role="separator" className="divider"></li>
                        <li><a href="../elements/headers.html" target="_blank"><i className="fa fa-header"></i> Headers</a></li>
                        <li><a href="../elements/footers.html" target="_blank"><i className="fa fa-leaf"></i> Footers</a></li>
                        <li><a href="../elements/features.html" target="_blank"><i className="fa fa-star"></i> Features <span className="label label-warning">Hot</span></a></li>
                        <li><a href="../elements/cta.html" target="_blank"><i className="fa fa-link"></i> CTA</a></li>
                        <li><a href="../elements/counters.html" target="_blank"><i className="fa fa-circle-o-notch"></i> Counters</a></li>
                        <li><a href="../elements/pricing.html" target="_blank"><i className="fa fa-dollar"></i> Pricing</a></li>
                        <li><a href="../elements/team.html" target="_blank"><i className="fa fa-users"></i> Team</a></li>
                        <li><a href="../elements/testimonials.html" target="_blank"><i className="fa fa-comment"></i> Testimonials</a></li>
                        <li><a href="../elements/hover.html" target="_blank"><i className="fa fa-image"></i> Hover</a></li>
                        <li><a href="../elements/tables.html" target="_blank"><i className="fa fa-table"></i> Tables <span className="label label-red">New</span></a></li>
                      </div>

                    </div>
                  </ul>
                </li>



                <li className="dropdown mega-fw">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350" role="button" aria-haspopup="true" aria-expanded="false">Pages <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <div className="row">


                      <div className="col-lg-3 mb-sm-30">
                        <li className="dropdown-header">Introduction</li>
                        <li role="separator" className="divider"></li>
                        <li><a href="about-1.html">Abouts Us 1</a></li>
                        <li><a href="about-2.html">About Us 2</a></li>
                        <li><a href="team-1.html">Team Members 1</a></li>
                        <li><a href="team-2.html">Team Members 2</a></li>
                        <li><a href="clients.html">Clients</a></li>
                      </div>


                      <div className="col-lg-3 mb-sm-30">
                        <li className="dropdown-header">Contact</li>
                        <li role="separator" className="divider"></li>
                        <li><a href="contact-1.html">Contact Page 1</a></li>
                        <li><a href="contact-2.html">Contact Page 2</a></li>
                        <li><a href="contact-3.html">Contact Page 3</a></li>
                      </div>


                      <div className="col-lg-3 mb-sm-30">
                        <li className="dropdown-header">Utility</li>
                        <li role="separator" className="divider"></li>
                        <li><a href="services-1.html">Services</a></li>
                        <li><a href="faq-1.html">F.A.Q. Page 1</a></li>
                        <li><a href="faq-2.html">F.A.Q. Page 2</a></li>
                        <li><a href="login-1.html">Login Page 1</a></li>
                        <li><a href="login-2.html">Login Page 2</a></li>
                      </div>


                      <div className="col-lg-3 mb-sm-30">
                        <li className="dropdown-header">Other</li>
                        <li role="separator" className="divider"></li>
                        <li><a href="404.html">404 Page</a></li>
                        <li><a href="maintenance.html">Maintenance Page</a></li>
                        <li><a href="coming-soon-1.html">Coming Soon 1</a></li>
                        <li><a href="coming-soon-2.html">Coming Soon 2</a></li>
                        <li><a href="blank.html">Blank Page</a></li>
                      </div>

                    </div>
                  </ul>
                </li>



                <li className="dropdown mega-fw">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350" role="button" aria-haspopup="true" aria-expanded="false">Portfolio <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <div className="row">


                      <div className="col-lg-3 mb-sm-30">
                        <li className="dropdown-header">Full Width</li>
                        <li role="separator" className="divider"></li>
                        <li><a href="portfolio/portfolio-fw-1col.html">Full Width 1 Column</a></li>
                        <li><a href="portfolio/portfolio-fw-2col.html">Full Width 2 Columns</a></li>
                        <li><a href="portfolio/portfolio-fw-3col.html">Full Width 3 Columns</a></li>
                        <li><a href="portfolio/portfolio-fw-4col.html">Full Width 4 Columns</a></li>
                      </div>


                      <div className="col-lg-3 mb-sm-30">
                        <li className="dropdown-header">Boxed</li>
                        <li role="separator" className="divider"></li>
                        <li><a href="portfolio/portfolio-boxed-1col.html">Boxed 1 Columns</a></li>
                        <li><a href="portfolio/portfolio-boxed-2col.html">Boxed 2 Columns</a></li>
                        <li><a href="portfolio/portfolio-boxed-3col.html">Boxed 3 Columns</a></li>
                        <li><a href="portfolio/portfolio-boxed-4col.html">Boxed 4 Columns</a></li>
                      </div>


                      <div className="col-lg-3 mb-sm-30">
                        <li className="dropdown-header">Masonry</li>
                        <li role="separator" className="divider"></li>
                        <li><a href="portfolio/portfolio-masonry-1.html">Masonry Layout 1</a></li>
                        <li><a href="portfolio/portfolio-masonry-2.html">Masonry Layout 2</a></li>
                        <li><a href="portfolio/portfolio-masonry-3.html">Masonry Layout 3</a></li>
                      </div>


                      <div className="col-lg-3 mb-sm-30">
                        <li className="dropdown-header">Other</li>
                        <li role="separator" className="divider"></li>
                        <li><a href="portfolio/portfolio-single-1.html">Portfolio Single 1</a></li>
                        <li><a href="portfolio/portfolio-single-2.html">Portfolio Single 2</a></li>
                        <li><a href="portfolio/portfolio-single-3.html">Portfolio Single 3</a></li>
                        <li><a href="portfolio/portfolio-single-4.html">Portfolio Single 4</a></li>
                      </div>

                    </div>
                  </ul>
                </li>



                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350" role="button" aria-haspopup="true" aria-expanded="false">Blog <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="blog/blog-left-sidebar.html">Blog Left Sidebar</a></li>
                    <li><a href="blog/blog-right-sidebar.html">Blog Right Sidebar</a></li>
                    <li><a href="blog/blog-2col.html">Blog 2 Columns</a></li>
                    <li><a href="blog/blog-3col.html">Blog 3 Columns</a></li>
                    <li><a href="blog/blog-masonry-2col.html">Blog Masonry 2 Columns</a></li>
                    <li><a href="blog/blog-masonry-3col.html">Blog Masonry 3 Columns</a></li>
                    <li><a href="blog/blog-post.html">Blog Single</a></li>
                  </ul>
                </li>



                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350" role="button" aria-haspopup="true" aria-expanded="false">Shop <span className="caret"></span></a>
                  <ul className="dropdown-menu bg-solid">
                    <div className="row">
                      <div className="col-lg-7">
                        <li className="dropdown-header">Shop</li>
                        <li role="separator" className="divider"></li>
                        <li><a href="shop/shop-right-sidebar.html">Shop Right Sidebar</a></li>
                        <li><a href="shop/shop-left-sidebar.html">Shop Left Sidebar</a></li>
                        <li><a href="shop/shop-4col.html">Shop 4 Columns</a></li>
                        <li><a href="shop/shop-single.html">Single Product</a></li>
                        <li><a href="shop/shop-checkout.html">Checkout Page</a></li>
                      </div>
                      <div className="col-lg-5 dropdown-banner">
                        <img src="../assets/images/shop/baner-shop-white.png" alt="Definity eCommerce update" />
                      </div>
                    </div>
                  </ul>
                </li>
              </ul>



              <ul className="nav navbar-nav navbar-right">


                <li className="dropdown cart-nav">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-shopping-cart"></i> Cart</a>
                  <ul className="dropdown-menu cart-dropdown">
                    <li className="dropdown-header">Cart</li>
                    <li role="separator" className="divider cart-sep-top"></li>
                    <li>
                      <div className="cart-item">
                        <a href="shop/shop-single.html"><img src="../assets/images/shop/p-thumb-1.jpg" alt="Product Name" className="p-thumb" /></a>
                        <a href="#" className="cart-remove-btn"><span className="linea-arrows-square-remove"></span></a>
                        <a href="shop/shop-single.html" className="cp-name">Light Blue Suit</a>
                        <p className="cp-price">1 x $359.99</p>
                      </div>

                      <div className="cart-item">
                        <a href="shop/shop-single.html"><img src="../assets/images/shop/p-thumb-2.jpg" alt="Product Name" className="p-thumb" /></a>
                        <a href="#" className="cart-remove-btn"><span className="linea-arrows-square-remove"></span></a>
                        <a href="shop/shop-single.html" className="cp-name">Dark Blue Suit</a>
                        <p className="cp-price">1 x $459.99</p>
                      </div>
                    </li>
                    <li role="separator" className="divider cart-sep-bot"></li>
                    <li>
                      <h6 className="item-totals">Items Total: <span>$718.98</span></h6>
                    </li>
                    <li className="cart-btns">
                      <a href="shop/shop-checkout.html" className="btn-ghost btn-block">View Cart</a>
                      <a href="shop/shop-checkout.html" className="btn btn-block">Checkout</a>
                    </li>

                  </ul>
                </li>

                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-search"></i> Search</a>
                  <ul className="dropdown-menu search-dropdown">
                    <li><form action="post"><input type="search" className="form-control" placeholder="Search..." /></form></li>
                  </ul>
                </li>

                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">EN <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">DE</a></li>
                    <li><a href="#">FR</a></li>
                    <li><a href="#">ES</a></li>
                  </ul>
                </li>

              </ul>

            </div>
          </div>
        </nav>
  );
}

NavigationBar.displayName = 'NavigationBar';

NavigationBar.defaultProps = {
}

NavigationBar.propTypes = {
}

export default NavigationBar
