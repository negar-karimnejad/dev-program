const nav_icon = document.querySelector(".nav-icon");
const menu__container = document.querySelector(".mob-menu__container");
const nav_icon__container = document.querySelector(".nav-icon__container");
const navMenu = document.querySelector(".nav-menu");
const content__swiper = document.querySelector(".swiper-pagination1");

function first() {
  setTimeout(() => {
    // Page Loading
    const overlayer = document.querySelector(".overlayer");
    overlayer.classList.add("overlayer-hidden");
    overlayer.classList.add("zoom");
    overlayer.addEventListener("transitionend", () => {
      document.body.removeChild("overlayer");
    });
    second();
  }, 5000);
}

function second() {
  //Navbar's Logo Effect
  const nav__logo = document.querySelector(".nav__logo");
  nav__logo.classList.add("active");
  //Content Large Logo Effect
  const large_logo__container = document.querySelector(
    ".large-logo__container"
  );
  large_logo__container.classList.add("large-logo");
}

first();

let navOpen = false;
nav_icon__container.addEventListener("click", function () {
  if (navOpen) {
    nav_icon.classList.remove("nav-icon--open");
    menu__container.classList.remove("menu__container--open");
    navOpen = false;
  } else {
    nav_icon.classList.add("nav-icon--open");
    menu__container.classList.add("menu__container--open");
    navOpen = true;
  }
});

let contentBookmark = document.querySelector(".content__bookmark-text");
let contentSocial = document.querySelector(".content__social");
let wave = document.querySelector(".wave");
let scrollPage = document.querySelector(".scroll-page");

const isBookmarkScrollingDown = () => {
  let previousScrollPosition = 0;
  let goingDown = false;

  let scrollPosition = window.pageYOffset;

  if (scrollPosition > previousScrollPosition) {
    goingDown = true;
  }

  previousScrollPosition = scrollPosition;

  return goingDown;
};

const isSwiperScrollingDown = () => {
  let previousScrollPosition = 200;
  let swiperGoingDown = false;

  let scrollPosition = window.pageYOffset;

  if (scrollPosition > previousScrollPosition) {
    swiperGoingDown = true;
  }

  previousScrollPosition = scrollPosition;

  return swiperGoingDown;
};

const isSocialScrollingDown = () => {
  let previousScrollPosition = 540;
  let socialGoingDown = false;

  let scrollPosition = window.pageYOffset;

  if (scrollPosition > previousScrollPosition) {
    socialGoingDown = true;
  }

  previousScrollPosition = scrollPosition;

  return socialGoingDown;
};

const isWaveScrollingDown = () => {
  let previousScrollPosition = 200;
  let nextScrollPosition = 1050;
  let waveGoingDown = false;

  let scrollPosition = window.pageYOffset;

  if (
    scrollPosition > previousScrollPosition &&
    scrollPosition < nextScrollPosition
  ) {
    waveGoingDown = true;
  }

  previousScrollPosition = scrollPosition;

  return waveGoingDown;
};

const isScrollPageScrollingDown = () => {
  let previousScrollPosition = 300;
  let scrollGoingDown = false;

  let scrollPosition = window.pageYOffset;

  if (scrollPosition > previousScrollPosition) {
    scrollGoingDown = true;
  }

  previousScrollPosition = scrollPosition;

  return scrollGoingDown;
};

const handleScroll = () => {
  if (isBookmarkScrollingDown()) {
    contentBookmark.classList.add("scroll-down");
    contentBookmark.classList.remove("scroll-up");
  } else {
    contentBookmark.classList.add("scroll-up");
    contentBookmark.classList.remove("scroll-down");
  }

  if (isSocialScrollingDown()) {
    contentSocial.classList.add("scroll-down");
    contentSocial.classList.remove("scroll-up");
  } else {
    contentSocial.classList.add("scroll-up");
    contentSocial.classList.remove("scroll-down");
  }

  if (isWaveScrollingDown()) {
    wave.classList.add("wave1");
  } else {
    wave.classList.remove("wave1");
  }

  if (isScrollPageScrollingDown()) {
    scrollPage.classList.add("go-up");
  } else {
    scrollPage.classList.remove("go-up");
  }

  if (isSwiperScrollingDown()) {
    content__swiper.classList.add("scroll-down");
    content__swiper.classList.remove("scroll-up");
  } else {
    content__swiper.classList.add("scroll-up");
    content__swiper.classList.remove("scroll-down");
  }
  console.log(isSwiperScrollingDown());
};

window.addEventListener("scroll", handleScroll);
