const PDFImage = require('pdf-image').PDFImage;
const path = require('path');
const fs = require('fs');
const expect = require("chai").expect;

const convert = async() => {
    const pdfImage = new PDFImage(path.join(__dirname, '../dist/cv/edgar-zorrilla-cv.pdf'), {
        combinedImage: true
    });
    await pdfImage.convertFile().then(function(imagePath) {
        // /dist/cv/edgar-zorrilla-cv.png
        resolve();
    }).catch(function (error) {
        console.dir(error);
    });
    // await pdfImage.convertPage(0);
};
const converted = async() => {
    try {
        await convert();
    } catch (e) {
        console.dir(e);
    }
};
converted();
