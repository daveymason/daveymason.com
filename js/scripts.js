
/*Panels*/
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

/* For WebsiteSlider */
const websites = [
    {
      id: 1,
      title: "Terrific Taiyuan",
      img:
        "./assets/img/TerrificTaiyuanResponsive.png",
      text:
        "The go-to guide for English speakers living in, moving to or visiting Taiyuan city. This site lists and categorises bars, restaurants, services and highlights some of the best sightseeing locations in the city. It was important for the local businesses to have a presence on Google.",
      link:
        "https://terrifictaiyuan.com",
    },
    {
      id: 2,
      title: "Good Day Cork",
      img:
        "./assets/img/GDCResponsive-1.png",
      text:
        "Good Day Cork is a positive news subscription site with multiple subscriptions with varying levels of access. This site using the Strip payment gateway and allows the owner to easily access membership levels. Completely rebuilt from an old Wix site on Wordpress.",
      link:
        "https://gooddaycork.ie",
    },
    {
      id: 3,
      title: "BigPix Media",
      img:
        "./assets/img/BigPixResponsive.png",
      text:
        "BigPix Media is an advertising company that uses a large screen to advertise to a large amount of people. It was critical that the owners could update their site and use it as a hub for communication driving people too and from their existing social media accounts.",
      link:
        "http://bigpixmedia.ie",
    },
    {
      id: 4,
      title: "SERVE - Solidarity In Action",
      img:
        "./assets/img/ServeResponsive.png",
      text:
        "SERVE is a development and volunteering organisation committed to tackling poverty in the majority world. I designed and developed their e-commerce store using WooCommerce, decreasing their site loading time from 7 seconds down to under 1 second.  ",
      link:
        "https://serve.ie",
    },
  ];

  // select items
  const img = document.getElementById("site-img");
  const title = document.getElementById("title");
  const info = document.getElementById("info");
  const link = document.getElementById("btn-link");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", function () {
    const item = websites[currentItem];
    img.src = item.img;
    title.textContent = item.title;
    info.textContent = item.text;
    link.href = item.link;
    // link.setAttribute("href",
    //     item.link);
  });
  
  // show site based on item
  function showsite(site) {
    const item = websites[site];
    img.src = item.img;
    title.textContent = item.title;
    info.textContent = item.text;
    link.href = item.link;
  }
  // show next site
  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > websites.length - 1) {
      currentItem = 0;
    }
    showsite(currentItem);
  });
  // show prev site
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = websites.length - 1;
    }
    showsite(currentItem);
  });
/*!
* Start Bootstrap - Resume v7.0.0 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 30,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
