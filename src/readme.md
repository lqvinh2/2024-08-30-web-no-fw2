0. 
FIX CLI
terminal : Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

1.
install complie
npm install --save-dev parcel
npm i rimraf


1.1
create file 
index.html

2.
edit package.json
========================== S
{
  "name": "learning2",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "clean-parcel-dist": "rimraf dist",
    "clean-parcel-cache": "rimraf .parcel-cache",
    "dev": "npm run clean-parcel-dist && npm run clean-parcel-cache && parcel *.html --no-cache --no-source-maps",
    "build": "npm run clean-parcel-dist && npm run clean-parcel-cache && parcel build *.html",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "devDependencies": {
    "@parcel/transformer-sass": "^2.12.0",
    "parcel": "^2.12.0"
  },
  "dependencies": {
    "rimraf": "^6.0.1"
  }
}
========================== E


2.1
chạy riêng không liên quan dự án

run terminal : node copyMaster.js

để copy LAYOUT-MASTER-NODEJS.html  vào các file trong [arrayFileName]

LAYOUT-MASTER-NODEJS.html  là file chung code START cho cả dự án

lưu ý : file copyMaster.js -> khi thêm page.html nào đó thì phải bổ sung vào [arrayFileName]

2.3
cách tạo page
ví dụ tạo a.html thì cần tạo a-content.html, đặt tên cho đúng ví dụ tạo file a.html thì phải có file "-content.html" -> a-content.html
thiết kế code cho page a sẽ nằm trong a-content.html


3
run code : yarn dev
