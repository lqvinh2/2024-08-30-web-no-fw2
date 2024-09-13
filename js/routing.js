//
//
// Vinh
//
//

const { onAfterLoadPage, onStartLoadPage, onLoadPageError } = require("./app");

//const BASE_DOMAIN = window.location.origin + '/2024-08-30-web-no-fw2/' // -- test GITHUB
const BASE_DOMAIN = window.location.origin + '/'



const pageLAYOUT = `${BASE_DOMAIN}layout`

const pageINDEXs = [`${BASE_DOMAIN}`, `${BASE_DOMAIN}index`, `${BASE_DOMAIN}home`]

const pageA = `${BASE_DOMAIN}a`
const pageB = `${BASE_DOMAIN}b`
const pageC = `${BASE_DOMAIN}c`

document.addEventListener('DOMContentLoaded', function () {
  // Mảng chứa các trang HTML
  const pages = [...pageINDEXs, pageA, pageB, pageC];

  // Hàm để load layout
  function loadLayout() {
    return fetch(pageLAYOUT)
      .then((response) => response.text())
      .then((html) => {
        document.body.innerHTML = html;
      });
  }

  // Hàm để load nội dung trang
  async function loadContent(page) {
    startLoadPage();

    try {
      let res = await fetch(page);
      let html = await res.text();
      document.getElementById("content").innerHTML = html;
    } catch (error) {
      loadPageError(error);
    } finally {
      if (typeof afterLoadPage === "function") {
        afterLoadPage();
      }
    }
  }

  // function appendScript(src) {
  //     return new Promise((resolve, reject) => {
  //         const script = document.createElement('script');
  //         script.src = src;
  //         script.onload = resolve;
  //         script.onerror = reject;
  //         document.head.appendChild(script);
  //     });
  // }

  const currentPath = window.location.pathname.toLowerCase(); // '/a' .. '/b'
  const urlSplit = window.location.href.split("/");

  let currentPage = [...pageINDEXs][0]; // default is BASE_DOMAIN

  // Xác định trang cần load dựa trên URL
  pages.forEach((page1) => {
    if (page1.endsWith(currentPath)) {
      currentPage = page1;
    }
  });

  [...pageINDEXs].forEach((page1) => {
    if (page1.endsWith(currentPage)) {
      currentPage = pageINDEXs[1];
    }
  });

  currentPage = currentPage + "-content" + ".html";

  loadLayout().then(async() => await loadContent(currentPage));

  //======================== ở đây là ĐỢI cho người dùng truy cập thì mới chạy code này S

  let routeMAP = {};

  pages.map((pageLINK) => {
    let routePage = "/" + pageLINK.replace(BASE_DOMAIN, ""); // Tạo route từ tên file (vd: 'a.html' thành '/a')
    let routeFullPage = pageLINK;
    routeMAP[`${routePage}`] = routeFullPage;
  });
  routeMAP[""] = routeMAP["/"];

  // Sử dụng page.js để định nghĩa route cho từng trang trong mảng
  pages.forEach((pageLINK) => {
    let routePage = "/" + pageLINK.replace(BASE_DOMAIN, ""); // exp ->  '/a'
    let contentPAGE = "";

    page(routePage, function () {
      
      contentPAGE = routePage;

      const currentRoutePage = routeMAP[contentPAGE];

      if ([...pageINDEXs].includes(currentRoutePage)) {
        contentPAGE = "index";
      }

      contentPAGE = contentPAGE.replace(".html", "").replace("/", "");

      let contentLINK = "/" + contentPAGE + "-content" + ".html";

      if (currentPage.includes(contentLINK) == false) {
        currentPage = contentLINK;
        loadContent(contentLINK, afterLoadPage);
      }
    });
  });

  // page('/', function () {
  //     loadLayout().then(()=> {
  //         loadContent('index-content.html')
  //     })

  // });

  //======================== ở đây là ĐỢI cho người dùng truy cập thì mới chạy code này E

  function startLoadPage() {
    onStartLoadPage();
  }

  function afterLoadPage() {
    onAfterLoadPage();
  }

  function loadPageError(error) {
    onLoadPageError(error);
  }

  // Khởi tạo router
  page.start();
});
