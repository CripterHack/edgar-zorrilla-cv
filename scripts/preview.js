const mv = require('mv');
const PDFImage = require('pdf-image').PDFImage;
const path = require('path');
const fs = require('fs');

const getDirectories = () => {
    const srcpath = path.join(__dirname, '../pdf');
    return fs.readdirSync(srcpath);
};


const convert = async (PDF) => {
    const pdfImage = new PDFImage(path.join(__dirname, '../pdf/' + PDF));
    await pdfImage.convertPage(0);
};

const directories = getDirectories();
directories.forEach(async (dir) => {
    try {
        await convert(dir);
    } catch (e) {
        console.dir(e);
    }
    const source = path.join(__dirname, '../pdf/' + 'edgar-zorrilla-cv' + '.png');
    const output = path.join(__dirname, '../dist/' + 'edgar-zorrilla-cv' + '.png');
    console.log(output);
    mv(source, output, function (err) {
        if (err) console.dir(err);
    });
});
