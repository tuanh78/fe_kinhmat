<template>
<header class="header">
            <div class="header__background">
                <div class="container header__container">
                    <div class="header__btn-menu">
                        <label for="btn-menu-header">
                            <span></span>
                        </label>
                        <input id="btn-menu-header" type="checkbox">

                        <div class="header__menu-vertical">
                            <div class="header__menu-vertical__bg">
                                <label for="btn-menu-header"></label>
                            </div>

                            <div class="header__menu-vertical__container">
                                <div class="header__menu-vertical__name">
                                    <h2>
                                        <a href="#">
                                            <img src="https://bizweb.dktcdn.net/100/364/481/themes/733696/assets/logo.png?1599617835537" alt="Evo Fashion" title="Evo Fashion">
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

                                            <input type="checkbox" id="show-detail-sub">
                                            <div class="header__menu-vertical__detail-sub">
                                                <ul>
                                                    <li>
                                                        <a href="#">Xu hướng mới</a>
                                                        <label for="show-detail-sub-second">
                                                            <i class="las la-angle-down"></i>
                                                        </label>

                                                        <input type="checkbox" id="show-detail-sub-second">

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

                                                    <li>
                                                    </li>

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
                                                            <img src="https://bizweb.dktcdn.net/100/364/481/themes/733696/assets/mega-1-image-1.jpg?1599617835537" alt="">
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img src="https://bizweb.dktcdn.net/100/364/481/themes/733696/assets/mega-1-image-2.jpg?1599617835537" alt="">
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li><a href="./product.html">Sản phẩm</a></li>
                                        <li><a href="./footware.html">Giày dép</a></li>
                                        <li><a href="./accessories.html">Phụ kiện</a></li>
                                        <li><a href="./news.html">Tin tức</a></li>
                                        <li><a href="./contact.html">Liên hệ</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="header__policy">
                        <ul class="header__policy__list">
                            <li><a href="#">Vận chuyển tiêu chuẩn miễn phí cho đơn hàng trên <span>1.000.000₫</span></a></li>
                            <li><a href="#">Giao hàng tiết kiệm cho đơn hàng trên <span>499.000₫</span></a></li>
                            <li><a href="#">30 ngày <span>đổi trả</span></a> dễ dàng</li>
                        </ul>
                    </div>

                    <div class="header__logo">
                        <h1>
                            <a href="#" title="Evo Fashion">
                                <img src="https://bizweb.dktcdn.net/100/364/481/themes/733696/assets/logo.png?1599617835537" alt="Evo Fashion" title="Evo Fashion">
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
                            <a href="#"><fa-icon icon="search" class="icon-size"/></a>
                        </div>

                        <div class="header__user">
                            <a href="#"><fa-icon icon="user" class="icon-size"></fa-icon></a>
                            <ul class="header__user-sub">
                                <li><a href="#">Đăng nhập</a></li>
                                <li><a href="#">Đăng ký</a></li>
                            </ul>
                        </div>

                        <div class="header__cart">
                            <a href="#"><fa-icon icon="shopping-cart" class="icon-size"></fa-icon></a>
                            <div class="header__cart__detail">Không có sản phẩm nào trong giỏ hàng.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container header__menu__container">
                <nav class="header__menu">
                    <ul>
                        <li><a href="/">Trang chủ</a></li>
                        <li><a href="./introduction">Giới thiệu</a></li>
                        <li><a href="./new-products">Hàng mới <fa-icon icon="angle-down"></fa-icon></a>
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
                                        <img src="https://bizweb.dktcdn.net/100/364/481/themes/733696/assets/mega-1-image-1.jpg?1599617835537" alt="">
                                    </a>
                                    <a href="#">
                                        <img src="https://bizweb.dktcdn.net/100/364/481/themes/733696/assets/mega-1-image-2.jpg?1599617835537" alt="">
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li><a href="./products">Sản phẩm</a></li>
                        <li><a href="./footware">Giày dép</a></li>
                        <li><a href="./accessory">Phụ kiện</a></li>
                        <li><a href="./news">Tin tức</a></li>
                        <li><a href="./contact">Liên hệ</a></li>
                    </ul>
                </nav>
            </div>
    </header>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
// import { name of your icon in camelCase } from "@fortawesome/free-solid-svg-icons";
// For example, I want to use fa-enveloper-open-text, then it's faEnvelopeOpenText
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
// Then add it to library
library.add(faEnvelopeOpenText)
export default {

}
</script>

<style lang="scss">
// mixins
@mixin flexbox(
    $justify-content: flex-start,
    $flex-wrap: nowrap,
    $flex-direction: row
) {
    display: flex;
    justify-content: $justify-content;
    flex-wrap: $flex-wrap;
    flex-direction: $flex-direction;
}

@mixin flexbox-vertical-center {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
}

// media queries

@mixin Responsive($canvas) {
    @if $canvas == ipad-pro {
        @media only screen and (max-width: $ipad-pro - 1px) {
            @content;
        }
    } @else if $canvas == ipad {
        @media only screen and (max-width: $ipad - 1px) {
            @content;
        }
    } @else if $canvas == ip6plus {
        @media only screen and (max-width: $ip6plus - 1px) {
            @content;
        }
    } @else if $canvas == ip5 {
        @media only screen and (max-width: $ip5 - 1px) {
            @content;
        }
    }
}

@mixin ResponsiveFlexible($screen-size) {
    @media only screen and (max-width: $screen-size - 1px) {
        @content;
    }
}

@keyframes zoom {
    0%   {transform: rotate(-20deg) scale(1);}
    100% {transform: rotate(-20deg) scale(1.1);}
}

// variables
$color-black: #333f48;
$color-red: #b61a12;
$bg-header: #f7f8fa;
$bg-header-menu: #fff;
$color-white: #fff;
$color-gray: #686868;
$color-dark-black: #1f2026;
$color-footer: #24355a;
$color-light-gray: #f7f8fa;
$color-scrollbar: #e0e0e0;
$color-div-no-product: #fcf8e3;
$ipad-pro: 1025px;
$ipad: 769px;
$ip6plus: 415px;
$ip5: 321px;

.header {
    &__btn-menu {
        padding-left: 2rem;
        width: 33.3%;
        display: none;
        @include Responsive(ipad) {
            display: block;
            width: 20%;
        }
        @include Responsive(ip5) {
            padding-left: 0;
            width: 10%;
        }

        & > input {
            display: none;
        }

        & > label > span {
            display: block;
            width: 2rem;
            height: 0.3rem;
            background-color: $color-black;
            border-radius: 0.1rem;
            position: relative;
            @include Responsive(ip6plus) {
                width: 1.5rem;
            }
        }

        & > label > span:before {
            content: "";
            position: absolute;
            width: 3rem;
            height: 0.3rem;
            background-color: $color-black;
            top: -0.7rem;
            left: 0px;
            @include Responsive(ip6plus) {
                width: 2rem;
            }
        }

        & > label > span:after {
            content: "";
            position: absolute;
            width: 3rem;
            height: 0.3rem;
            background-color: $color-black;
            top: 0.7rem;
            left: 0px;
            @include Responsive(ip6plus) {
                width: 2rem;
            }
        }

        // & > input:checked + .header__menu-vertical {
        //     display: block;
        // }
        & > input:checked + .header__menu-vertical {
            z-index: 99;
        }

        &
            > input:checked
            + .header__menu-vertical
            > .header__menu-vertical__container {
            left: 0;
            transition: all 0.5s;
        }

        &
            > input:checked
            + .header__menu-vertical
            > .header__menu-vertical__bg {
            visibility: visible;
            opacity: 1;
        }
    }

    &__menu-vertical {
        position: fixed;
        top: 0;
        left: 0;
        transition: all 0.5s;
        z-index: -1;
        width: 100%;
        height: 100%;

        &__container {
            position: fixed;
            top: 0;
            left: -100%;
            width: 40%;
            height: 100%;
            background-color: $color-white;
            transition: all 0.5s;
            @include ResponsiveFlexible(571px) {
                width: 50%;
            }

            @include Responsive(ip6plus) {
                width: 60%;
            }

            @include ResponsiveFlexible(341px) {
                width: 70%;
            }
            @include Responsive(ip5) {
                width: 70%;
            }
        }

        &__bg {
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.3);
            visibility: hidden;
            opacity: 0;
            transition: visibility 0s, opacity 0.5s linear;

            & > label {
                display: block;
                width: 100%;
                height: 100%;
            }
        }

        &__name {
            @include flexbox(flex-start, wrap, row);
            padding: 2rem 0;
            align-items: center;
            border-bottom: 1px solid $color-light-gray;

            h2 {
                width: 85%;
                text-align: center;
                a {
                    display: block;

                    img {
                        max-width: 200px;
                        @include ResponsiveFlexible(701px) {
                            max-width: 180px;
                        }

                        @include ResponsiveFlexible(461px) {
                            max-width: 150px;
                        }

                        @include Responsive(ip6plus) {
                            max-width: 120px;
                        }
                        @include Responsive(ip5) {
                            max-width: 90px;
                        }
                    }
                }
            }

            label {
                width: 15%;
                i {
                    font-size: 2.3rem;
                    @include Responsive(ip6plus) {
                        font-size: 1.5rem;
                    }
                }
            }
        }

        &__user {
            ul {
                @include flexbox(flex-start, wrap, row);

                li {
                    width: 50%;
                    text-align: center;

                    a {
                        font-size: 1.3rem;
                        font-weight: 500;
                        display: block;
                        padding: 1.5rem 0;
                        @include Responsive(ip5) {
                            font-size: 1rem;
                        }
                    }
                }

                li:first-child {
                    border-right: 1px solid $color-light-gray;
                }
            }
        }

        &__detail {
            border-top: 2px solid $color-red;

            ul {
                li {
                    border-bottom: 1px solid $color-light-gray;
                    position: relative;
                    a {
                        display: block;
                        padding: 1.5rem 0 1.5rem 1.5rem;
                        font-size: 1.3rem;
                        font-weight: 500;
                        @include Responsive(ip5) {
                            font-size: 1rem;
                        }
                    }
                }
            }

            & > ul > li:nth-child(3) {
                @include flexbox(space-between, wrap, row);
                align-items: center;

                input {
                    display: none;
                }

                & > a {
                    width: 85%;
                }

                & > label {
                    padding: 1.5rem;
                    width: 15%;
                    text-align: center;
                    @include Responsive(ip5) {
                        padding: 1.5rem 0;
                    }
                }

                & > input:checked + .header__menu-vertical__detail-sub {
                    display: block;
                }
            }

            &-sub {
                position: absolute;
                top: 100%;
                left: 0;
                z-index: 100;
                background-color: $color-white;
                display: none;

                li:first-child {
                    border-top: 1px solid $color-light-gray;
                }

                ul {
                    li {
                        @include flexbox(space-between, wrap, row);
                    }
                }

                & > ul:nth-child(2) {
                    height: 200px;
                    @include flexbox(space-between, wrap, row);
                    padding: 1rem 1rem 0;
                    li {
                        width: 50%;
                        @include flexbox(center, wrap, row);
                    }

                    a {
                        padding: 0;
                    }
                }

                & > ul > li {
                    & > a {
                        width: 80%;
                        padding: 1.5rem 2rem;
                        font-size: 1.2rem;
                        @include Responsive(ip5) {
                            font-size: 0.9rem;
                        }
                    }

                    & > label {
                        width: 20%;
                        padding: 1.5rem 2rem;
                        @include Responsive(ip5) {
                            padding: 1.5rem 0;
                        }
                    }
                }

                input:checked + .header__menu-vertical__detail-sub-second {
                    display: block;
                }
                &-second {
                    display: none;
                    ul li a {
                        padding-left: 3rem;
                        display: block;
                        font-size: 1.1rem;
                        @include Responsive(ip5) {
                            font-size: 0.8rem;
                        }
                    }
                }
            }
        }
    }

    &__background {
        background-color: $bg-header;
        padding: 0 1rem;
    }
    &__container {
        @include flexbox(space-between, wrap);
        max-width: 1150px;
        padding: 2rem 0;
        align-items: center;
        @include Responsive(ip6plus) {
            padding: 1rem 0;
        }
        @include Responsive(ip5) {
            justify-content: flex-start;
        }
    }

    &__policy {
        width: 33.3%;
        @include flexbox(center, wrap, column);
        @include Responsive(ipad) {
            display: none;
        }

        li:not(:first-child) {
            display: none;
        }

        a {
            font-size: 1.3rem;
            color: $color-black;
            font-weight: 500;
            transition: all 0.3s;

            span {
                color: $color-red;
                font-weight: 600;
            }
        }

        li {
            animation-name: fade;
            animation-duration: 0.5s;
        }

        li:hover,
        li:active {
            a {
                color: $color-red;
            }
        }
    }

    &__logo {
        width: 33.33%;
        @include ResponsiveFlexible(769px) {
            width: 46.7%;
        }
        @include Responsive(ip5) {
            width: 70%;
        }
        h1 {
            a {
                display: block;
                text-align: center;

                img {
                    max-width: 200px;
                    @include ResponsiveFlexible(501px) {
                        max-width: 150px;
                    }
                    @include Responsive(ip5) {
                        max-width: 110px;
                    }
                }
            }
        }

        img {
            max-width: 250px;
        }
    }

    &__tool {
        width: 33.3%;
        @include flexbox(space-between, wrap, row);
        color: $color-black;

        @include Responsive(ipad) {
            justify-content: flex-end;
        }

        @include Responsive(ip5) {
            width: 20%;
            padding-left: 0;
        }
    }

    &__hotline {
        @include flexbox(center, wrap, column);
        a {
            display: block;
            span {
                display: block;
                font-size: 1.1rem;
            }
            span:first-child {
                font-size: 1.6rem;
                font-weight: 600;
                color: $color-black;
            }

            span:first-child:hover,
            span:first-child:active {
                color: $color-red;
            }
        }

        @include Responsive(ipad) {
            display: none;
        }
    }

    &__search,
    &__user,
    &__cart {
        @include flexbox-vertical-center();
    }

    &__user {
        position: relative;
        @include Responsive(ipad) {
            display: none;
        }

        a:before {
            content: "";
            width: 5rem;
            height: 4rem;
            position: absolute;
            top: 50%;
            right: 0;
            background-color: transparent;
        }

        &-sub {
            position: absolute;
            top: 130%;
            right: -2rem;
            width: 15rem;
            text-align: right;
            background-color: $color-white;
            z-index: 0;
            padding: 0 0.5rem;
            box-shadow: 0px 15px 31px -16px $color-black;
            display: none;

            li:hover a,
            li:active a {
                color: $color-red;
            }

            a {
                font-size: 1.3rem;
                padding: 1.5rem 0;
                display: inline-block;
                width: 100%;
                color: $color-dark-black;
            }

            li:first-child {
                a {
                    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
                }
            }
        }

        &:hover,
        &:active {
            .header__user-sub {
                display: block;
                z-index: 2;
            }
        }
    }

    &__cart {
        @include Responsive(ipad) {
            margin-left: 2rem;
        }
        @include Responsive(ip5) {
            margin-left: 1rem;
        }
        position: relative;

        &:hover &__detail {
            display: block;
        }

        &__detail {
            position: absolute;
            top: 100%;
            right: 0;
            width: 350px;
            padding: 1.5rem 2rem;
            font-size: 1.3rem;
            background-color: $color-white;
            box-shadow: 0px 8px 23px -10px $color-black;
            z-index: 2;
            display: none;
        }
    }

    &__menu {
        &__container {
            background-color: $bg-header-menu;
            padding: 0 1rem;
            max-width: 1150px;

            @include Responsive(ipad) {
                display: none;
            }
        }

        & > ul {
            @include flexbox();
            text-align: center;
        }

        & > ul > li > a {
            font-size: 1.4rem;
            text-transform: uppercase;
            padding: 1.5rem 0rem;
            display: block;
            font-weight: 500;
            letter-spacing: 0.15rem;
            transition: background-color 0.3s, color 0.3s;

            @include Responsive(ipad-pro) {
                font-size: 1.3rem;
            }

            @include ResponsiveFlexible(891px){
                font-size: 1rem;
            }
        }

        & > ul > li:hover > a,
        & > ul > li:active > a {
            background-color: $color-red;
            color: $color-white;
        }

        & > ul > li {
            width: 12.5%;
            position: relative;
        }

        & > ul > li:nth-child(3):after {
            position: absolute;
            top: 72%;
            left: 50%;
            transform: translateX(-50%);
            content: "";
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 0px 11px 12px;
            border-color: transparent transparent $color-white;
            display: inline-block;
        }

        & > ul > li:hover,
        & > ul > li:active {
            .header__menu-sub__container {
                visibility: visible;
                opacity: 1;
                z-index: 2;
                transition: all 0.5s;
            }

            .header__menu-sub {
                top: 102%;
                transition: all 0.5s;
            }
        }

        &-sub {
            position: absolute;
            top: 200%;
            left: -200%;
            z-index: 0;
            background-color: $color-white;
            box-shadow: 0px 15px 31px -16px $color-black;
            transition: all 0.2s;
            @include flexbox(space-between, wrap, row);
            &__container {
                width: 800%;
                padding: 1.5rem;
                visibility: hidden;
                opacity: 0;
            }

            &__item {
                @include flexbox(flex-start, wrap, row);
                width: 50%;
                height: 100%;

                & > ul {
                    @include flexbox(flex-start, wrap, row);
                    text-align: left;
                    color: $color-dark-black;

                    & > li {
                        width: 33.33333%;
                        margin-bottom: 4rem;

                        &:nth-last-child(2),
                        &:nth-last-child(3),
                        &:last-child {
                            margin-bottom: 0;
                        }

                        & > a {
                            font-size: 1.4rem;
                            font-weight: 600;
                            display: block;
                            margin-bottom: 1.5rem;
                            text-transform: uppercase;
                            transition: all 0.5s;

                            @include Responsive(ipad-pro) {
                                font-size: 1.3rem;
                            }
                        }

                        &:hover > a,
                        &:active > a {
                            color: $color-red;
                        }

                        & > ul > li {
                            margin-bottom: 1rem;
                        }

                        & > ul > li > a {
                            font-size: 1.2rem;
                            font-weight: 500;
                            transition: all 0.5s;
                        }

                        & > ul > li:hover > a,
                        & > ul > li:active > a {
                            color: $color-red;
                        }
                    }
                }
            }

            &__item:first-child {
                padding-right: 5rem;
            }

            &__item:last-child {
                padding-left: 5rem;
                @include flexbox(space-between, wrap, row);

                a {
                    width: calc(50% - 0.5rem);
                }
            }
        }
    }
}

</style>
