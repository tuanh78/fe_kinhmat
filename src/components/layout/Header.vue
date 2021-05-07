<template>
  <header class="header">
    <div class="header__background">
      <div class="container header__container">
        <div class="header__btn-menu">
          <label for="btn-menu-header">
            <span></span>
          </label>
          <input id="btn-menu-header" type="checkbox" />

          <div class="header__menu-vertical">
            <div class="header__menu-vertical__bg">
              <label for="btn-menu-header"></label>
            </div>

            <div class="header__menu-vertical__container">
              <div class="header__menu-vertical__name">
                <h2>
                  <a href="#">
                    Kính mắt Huy Tùng
                  </a>
                </h2>
                <label for="btn-menu-header">
                  <i class="las la-arrow-left"></i>
                </label>
              </div>
              <div class="header__menu-vertical__user">
                <ul>
                  <li><a href="#">Đăng nhập</a></li>
                  <li><a href="#">Đăng ký</a></li>
                </ul>
              </div>
              <div class="header__menu-vertical__detail">
                <ul>
                  <li><a href="./index.html">Trang chủ</a></li>
                  <li><a href="./introduce.html">Giới thiệu</a></li>
                  <li>
                    <a href="./new-products.html">Hàng mới</a>
                    <label for="show-detail-sub">
                      <i class="las la-angle-down"></i>
                    </label>

                    <input type="checkbox" id="show-detail-sub" />
                    <div class="header__menu-vertical__detail-sub">
                      <ul>
                        <li>
                          <a href="#">Xu hướng mới</a>
                          <label for="show-detail-sub-second">
                            <i class="las la-angle-down"></i>
                          </label>

                          <input type="checkbox" id="show-detail-sub-second" />

                          <div class="header__menu-vertical__detail-sub-second">
                            <ul>
                              <li>
                                <a href="#">Xu hướng mới</a>
                              </li>

                              <li>
                                <a href="#">Thời trang mới</a>
                              </li>

                              <li>
                                <a href="#">Phụ kiện mới</a>
                              </li>

                              <li>
                                <a href="#">Đồ trang sức</a>
                              </li>

                              <li>
                                <a href="#">Giày mới</a>
                              </li>

                              <li>
                                <a href="#">Túi mới</a>
                              </li>
                            </ul>
                          </div>
                        </li>

                        <li>
                          <a href="#">Thời trang mới</a>
                        </li>

                        <li>
                          <a href="#">Phụ kiện mới</a>
                        </li>

                        <li></li>

                        <li>
                          <a href="#">Giày mới</a>
                        </li>

                        <li>
                          <a href="#">Túi mới</a>
                        </li>
                      </ul>

                      <ul>
                        <li>
                          <a href="#">
                            <img
                              src="https://bizweb.dktcdn.net/100/364/481/themes/733696/assets/mega-1-image-1.jpg?1599617835537"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="https://bizweb.dktcdn.net/100/364/481/themes/733696/assets/mega-1-image-2.jpg?1599617835537"
                              alt=""
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="/product">Sản phẩm</a></li>
                  <li><a href="#">Giày dép</a></li>
                  <li><a href="#">Phụ kiện</a></li>
                  <li><a href="/news">Tin tức</a></li>
                  <li><a href="/contact">Liên hệ</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="header__policy">
          <ul class="header__policy__list">
            <li>
              <a href="#"
                >Vận chuyển tiêu chuẩn miễn phí cho đơn hàng trên
                <span>1.000.000₫</span></a
              >
            </li>
            <li>
              <a href="#"
                >Giao hàng tiết kiệm cho đơn hàng trên <span>499.000₫</span></a
              >
            </li>
            <li>
              <a href="#">30 ngày <span>đổi trả</span></a> dễ dàng
            </li>
          </ul>
        </div>

        <div class="header__logo">
          <h1>
            <a href="#" title="Kính mắt Huy Tùng">
              Kính mắt Huy Tùng
            </a>
          </h1>
        </div>

        <div class="header__tool">
          <div class="header__hotline" title="Hỗ trợ mua hàng 0867573713">
            <a href="#">
              <span>0867573713</span>
              <span>Hỗ trợ mua hàng</span>
            </a>
          </div>

          <div class="header__search">
            <a href="#"><fa-icon icon="search" class="icon-size" /></a>
          </div>

          <div class="header__user">
            <a href="#"><fa-icon icon="user" class="icon-size"></fa-icon></a>
            <ul class="header__user-sub">
              <li><a href="#">Đăng nhập</a></li>
              <li><a href="#">Đăng ký</a></li>
            </ul>
          </div>

          <div class="header__cart">
            <a href="#"
              ><fa-icon icon="shopping-cart" class="icon-size"></fa-icon
            ></a>
            <div class="header__cart__detail">
              Không có sản phẩm nào trong giỏ hàng.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container header__menu__container">
      <nav class="header__menu">
        <ul>
          <li><a href="/">Trang chủ</a></li>
          <li><a href="./introduction">Giới thiệu</a></li>
          <li>
            <a href="./new-products"
              >Hàng mới <fa-icon icon="angle-down"></fa-icon
            ></a>
            <div class="header__menu-sub header__menu-sub__container">
              <div class="header__menu-sub__item">
                <ul>
                  <li>
                    <a href="#">Xu hướng mới</a>
                    <ul>
                      <li><a href="#">Xu hướng mùa Hè</a></li>
                      <li><a href="#">Xu hướng mùa Thu</a></li>
                      <li><a href="#">Xu hướng mùa Đông</a></li>
                      <li><a href="#">Xu hướng mùa Xuân</a></li>
                    </ul>
                  </li>

                  <li>
                    <a href="#">Thời trang mới</a>
                    <ul>
                      <li><a href="#">Xu hướng mùa Hè</a></li>
                      <li><a href="#">Xu hướng mùa Thu</a></li>
                      <li><a href="#">Xu hướng mùa Đông</a></li>
                      <li><a href="#">Xu hướng mùa Xuân</a></li>
                    </ul>
                  </li>

                  <li>
                    <a href="#">Xu hướng mới</a>
                    <ul>
                      <li><a href="#">Xu hướng mùa Hè</a></li>
                      <li><a href="#">Xu hướng mùa Thu</a></li>
                      <li><a href="#">Xu hướng mùa Đông</a></li>
                      <li><a href="#">Xu hướng mùa Xuân</a></li>
                    </ul>
                  </li>

                  <li>
                    <a href="#">Xu hướng mới</a>
                    <ul>
                      <li><a href="#">Xu hướng mùa Hè</a></li>
                      <li><a href="#">Xu hướng mùa Thu</a></li>
                      <li><a href="#">Xu hướng mùa Đông</a></li>
                      <li><a href="#">Xu hướng mùa Xuân</a></li>
                    </ul>
                  </li>

                  <li>
                    <a href="#">Xu hướng mới</a>
                    <ul>
                      <li><a href="#">Xu hướng mùa Hè</a></li>
                      <li><a href="#">Xu hướng mùa Thu</a></li>
                      <li><a href="#">Xu hướng mùa Đông</a></li>
                      <li><a href="#">Xu hướng mùa Xuân</a></li>
                    </ul>
                  </li>

                  <li>
                    <a href="#">Xu hướng mới</a>
                    <ul>
                      <li><a href="#">Xu hướng mùa Hè</a></li>
                      <li><a href="#">Xu hướng mùa Thu</a></li>
                      <li><a href="#">Xu hướng mùa Đông</a></li>
                      <li><a href="#">Xu hướng mùa Xuân</a></li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div class="header__menu-sub__item">
                <a href="#">
                  <img
                    src="https://vn-test-11.slatic.net/p/7604e5dbeda5f117ab772d56d9148692.jpg_800x800Q100.jpg"
                    alt=""
                  />
                </a>
                <a href="#">
                  <img
                    src="https://vn-test-11.slatic.net/p/7604e5dbeda5f117ab772d56d9148692.jpg_800x800Q100.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </li>
          <li><a href="./products">Sản phẩm</a></li>
          <li><a href="#">Kính đẹp</a></li>
          <li><a href="#">Phụ kiện</a></li>
          <li><a href="./news">Tin tức</a></li>
          <li><a href="./contact">Liên hệ</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
</script>
