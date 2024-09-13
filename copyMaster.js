const fs = require('fs');
const path = require('path');

const masterFilePath = path.join(__dirname, 'LAYOUT-MASTER-NODEJS.html');
const arrayFileName = ['index.html', 'a.html', 'b.html', 'c.html']; 

// Đọc nội dung của master.html
fs.readFile(masterFilePath, 'utf8', (err, masterContent) => {
    if (err) {
        console.error(`Lỗi khi đọc file master: ${err}`);
        return;
    }

    // Duyệt qua từng file trong mảng arrayFileName
    arrayFileName.forEach(fileName => {
        const filePath = path.join(__dirname, fileName);

        // Ghi nội dung master vào từng file
        fs.writeFile(filePath, masterContent, 'utf8', err => {
            if (err) {
                console.error(`Lỗi khi ghi file ${fileName}: ${err}`);
            } else {
                console.log(`Đã ghi nội dung của master.html vào ${fileName}`);
            }
        });
    });
});
