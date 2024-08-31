//
//
// Vinh
//
//

const { onAfterLoadPage, onStartLoadPage, onLoadPageError } = require("./app");




document.addEventListener('DOMContentLoaded', function () {
    // Mảng chứa các trang HTML
    const pages = ['', 'index', 'a', 'b', 'c'];

    // Hàm để load layout
    function loadLayout() {
        return fetch('layout.html')
            .then(response => response.text())
            .then(html => {
                document.body.innerHTML = html;
            });
    }

    // Hàm để load nội dung trang
    function loadContent(page, callback) {

        startLoadPage()

        return fetch(page)
            .then(response => response.text())
            .then(html => {
                document.getElementById('content').innerHTML = html;

                // for test catch ()
                // throw new Error('Network response was not ok ');

                if (typeof callback === 'function') {
                    callback(); 
                }
            }) 
            .catch(error => {
                loadPageError(error)
            });
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

     // Kiểm tra URL hiện tại để xác định trang cần tải
     const currentPath = window.location.pathname;
     let currentPage = 'index.html'; // Mặc định là index.html
 
     // Xác định trang cần load dựa trên URL
     pages.forEach((page1) => {
       if (currentPath.endsWith("/" + page1)) {
         currentPage = page1;
       }
     });

     if (['', '/', 'index'].includes(currentPage)) {
        currentPage = 'index'
    }

    currentPage = '/' + currentPage.replace('.html', '') + '-content' + '.html'
    
    loadLayout().then(() => loadContent(currentPage, afterLoadPage))

    //======================== ở đây là ĐỢI cho người dùng truy cập thì mới chạy code này S


    // Sử dụng page.js để định nghĩa route cho từng trang trong mảng
    pages.forEach(pageLINK => {
        let route = '/' + pageLINK.replace('.html', ''); // Tạo route từ tên file (vd: 'a.html' thành '/a')
        page(route, function () {

            if (['', '/', 'index'].includes(route)) {
                route = 'index'
            }

            route = route.replace('.html', '').replace('/', '')

            let contentLINK = '/' + route.replace('.html', '') + '-content' + '.html'

            if (currentPage != contentLINK) {
                currentPage = contentLINK
                loadContent(contentLINK, afterLoadPage)
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
        onStartLoadPage()
    }

    function afterLoadPage() {
        onAfterLoadPage()
    }

    function loadPageError(error) {
        onLoadPageError(error)
    }

    // Khởi tạo router
    page.start();
});
