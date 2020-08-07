import React from 'react'

const CategoryHeader = props => {
    return (
        <div className="col-xl-3 col-lg-3 hidden-md hidden-sm pull-left category-wrapper">
        <div className="categori-menu">
          <span className="categorie-title">Categories</span>
          <nav>
            <ul className="categori-menu-list menu-hidden">
              <li><a href="shop.html"><span><img src="images/icons/1.png" alt="menu-icon" /></span>Electronics<i className="fa fa-angle-right" aria-hidden="true" /></a>
                {/* categori Mega-Menu Start */}
                <ul className="ht-dropdown megamenu first-megamenu">
                  {/* Single Column Start */}
                  <li className="single-megamenu">
                    <ul>
                      <li className="menu-tile">Cameras</li>
                      <li><a href="shop.html">Cords and Cables</a></li>
                      <li><a href="shop.html">gps accessories</a></li>
                      <li><a href="shop.html">Microphones</a></li>
                      <li><a href="shop.html">Wireless Transmitters</a></li>
                    </ul>
                  </li>
                  {/* Single Column End */}
                  {/* Single Column Start */}
                  <li className="single-megamenu">
                    <ul>
                      <li className="menu-tile">Digital Cameras</li>
                      <li><a href="shop.html">Camera one</a></li>
                      <li><a href="shop.html">Camera two</a></li>
                      <li><a href="shop.html">Camera three</a></li>
                      <li><a href="shop.html">Camera four</a></li>
                    </ul>
                  </li>
                  {/* Single Column End */}
                  {/* Single Column Start */}
                  <li className="single-megamenu">
                    <ul>
                      <li className="menu-tile">Digital Cameras</li>
                      <li><a href="shop.html">Camera one</a></li>
                      <li><a href="shop.html">Camera two</a></li>
                      <li><a href="shop.html">Camera three</a></li>
                      <li><a href="shop.html">Camera four</a></li>
                    </ul>
                  </li>
                  {/* Single Column End */}
                </ul>
                {/* categori Mega-Menu End */}
              </li>
              <li><a href="shop.html"><span><img src="images/icons/2.png" alt="menu-icon" /></span>Fashion<i className="fa fa-angle-right" aria-hidden="true" /></a>
                {/* categori Mega-Menu Start */}
                <ul className="ht-dropdown megamenu megamenu-two">
                  {/* Single Column Start */}
                  <li className="single-megamenu">
                    <ul>
                      <li className="menu-tile">Men’s Fashion</li>
                      <li><a href="shop.html">Blazers</a></li>
                      <li><a href="shop.html">Boots</a></li>
                      <li><a href="shop.html">pants</a></li>
                      <li><a href="shop.html">Tops &amp; Tees</a></li>
                    </ul>
                  </li>
                  {/* Single Column End */}
                  {/* Single Column Start */}
                  <li className="single-megamenu">
                    <ul>
                      <li className="menu-tile">Women’s Fashion</li>
                      <li><a href="shop.html">Bags</a></li>
                      <li><a href="shop.html">Bottoms</a></li>
                      <li><a href="shop.html">Shirts</a></li>
                      <li><a href="shop.html">Tailored</a></li>
                    </ul>
                  </li>
                  {/* Single Column End */}
                </ul>
                {/* categori Mega-Menu End */}
              </li>
              <li><a href="shop.html"><span><img src="images/icons/3.png" alt="menu-icon" /></span>Home &amp; Kitchen<i className="fa fa-angle-right" aria-hidden="true" /></a>
                {/* categori Mega-Menu Start */}
                <ul className="ht-dropdown megamenu megamenu-two">
                  {/* Single Column Start */}
                  <li className="single-megamenu">
                    <ul>
                      <li className="menu-tile">Large Appliances</li>
                      <li><a href="shop.html">Armchairs</a></li>
                      <li><a href="shop.html">Bunk Bed</a></li>
                      <li><a href="shop.html">Mattress</a></li>
                      <li><a href="shop.html">Sideboard</a></li>
                    </ul>
                  </li>
                  {/* Single Column End */}
                  {/* Single Column Start */}
                  <li className="single-megamenu">
                    <ul>
                      <li className="menu-tile">Small Appliances</li>
                      <li><a href="shop.html">Bootees Bags</a></li>
                      <li><a href="shop.html">Jackets</a></li>
                      <li><a href="shop.html">Shelf</a></li>
                      <li><a href="shop.html">Shoes</a></li>
                    </ul>
                  </li>
                  {/* Single Column End */}
                </ul>
                {/* categori Mega-Menu End */}
              </li>
              <li><a href="shop.html"><span><img src="images/icons/4.png" alt="menu-icon" /></span>Phones &amp; Tablets<i className="fa fa-angle-right" aria-hidden="true" />
                </a>
                {/* categori Mega-Menu Start */}
                <ul className="ht-dropdown megamenu megamenu-two">
                  {/* Single Column Start */}
                  <li className="single-megamenu">
                    <ul>
                      <li className="menu-tile">Tablet</li>
                      <li><a href="shop.html">tablet one</a></li>
                      <li><a href="shop.html">tablet two</a></li>
                      <li><a href="shop.html">tablet three</a></li>
                      <li><a href="shop.html">tablet four</a></li>
                    </ul>
                  </li>
                  {/* Single Column End */}
                  {/* Single Column Start */}
                  <li className="single-megamenu">
                    <ul>
                      <li className="menu-tile">Smartphone</li>
                      <li><a href="shop.html">phone one</a></li>
                      <li><a href="shop.html">phone two</a></li>
                      <li><a href="shop.html">phone three</a></li>
                      <li><a href="shop.html">phone four</a></li>
                    </ul>
                  </li>
                  {/* Single Column End */}
                </ul>
                {/* categori Mega-Menu End */}
              </li>
              <li><a href="shop.html"><span><img src="images/icons/5.png" alt="menu-icon" /></span>TV &amp; Video<i className="fa fa-angle-right" aria-hidden="true" /></a>
                {/* categori Mega-Menu Start */}
                <ul className="ht-dropdown megamenu megamenu-two">
                  {/* Single Column Start */}
                  <li className="single-megamenu">
                    <ul>
                      <li className="menu-tile">Gaming Desktops</li>
                      <li><a href="shop.html">Alpha Desktop</a></li>
                      <li><a href="shop.html">rober Desktop</a></li>
                      <li><a href="shop.html">Ultra Desktop </a></li>
                      <li><a href="shop.html">beta desktop</a></li>
                    </ul>
                  </li>
                  {/* Single Column End */}
                  {/* Single Column Start */}
                  <li className="single-megamenu">
                    <ul>
                      <li className="menu-tile">Women’s Fashion</li>
                      <li><a href="shop.html">3D-Capable</a></li>
                      <li><a href="shop.html">Clearance</a></li>
                      <li><a href="shop.html">Free Shipping Eligible</a></li>
                      <li><a href="shop.html">On Sale</a></li>
                    </ul>
                  </li>
                  {/* Single Column End */}
                </ul>
                {/* categori Mega-Menu End */}
              </li>
              <li><a href="shop.html"><span><img src="images/icons/6.png" alt="menu-icon" /></span>Beauty</a>
              </li>
              <li><a href="shop.html"><span><img src="images/icons/7.png" alt="menu-icon" /></span>Sport &amp; tourism</a>
              </li>
              <li><a href="shop.html"><span><img src="images/icons/8.png" alt="menu-icon" /></span>Fruits &amp; Veggies</a></li>
              <li><a href="shop.html"><span><img src="images/icons/9.png" alt="menu-icon" /></span>Computer &amp; Laptop</a></li>
              <li><a href="shop.html"><span><img src="images/icons/10.png" alt="menu-icon" /></span>Meat &amp; Seafood</a></li>
              <li><a href="shop.html"><span><img src="images/icons/12.png" alt="menu-icon" /></span>Samsung</a></li>
              <li><a href="shop.html"><span><img src="images/icons/11.png" alt="menu-icon" /></span>Sanyo</a></li>
            </ul>
          </nav>
        </div>
      </div>
    )
}

CategoryHeader.propTypes = {

}

export default CategoryHeader
