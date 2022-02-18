const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const http = require('http');
const config = require('../config');

const {
    interval
} = require('rxjs');
const {
    filter,
    first,
    mergeMap
} = require('rxjs/operators');

const fetchResponse = () => {
    return new Promise((res, rej) => {
        try {
            const req = http.request(`http://localhost:${config.dev.port}/#/`, response => res(response.statusCode));
            req.on('error', (err) => rej(err));
            req.end();
        } catch (err) {
            rej(err);
        }
    });
};

const waitForServerReachable = () => {
    return interval(1000).pipe(
        mergeMap(async () => {
            try {
                const statusCode = await fetchResponse();
                if (statusCode === 200) return true;
            } catch (err) {}
            return false;
        }),
        filter(ok => !!ok)
    );
};
/*
const timedOut = timeout => {
    return new Promise(res => {
        setTimeout(res, timeout);
    });
};
*/
const convert = async () => {
    await waitForServerReachable().pipe(
        first()
    ).toPromise();
    
    try {
        const fullDirectoryPath = path.join(__dirname, '../dist/cv/');
        const printCSSPath = path.join(__dirname, '../src/assets/css/');
        const directories = getResumesFromDirectories();
        directories.forEach(async () => {
            const browser = await puppeteer.launch({
                args: ['--no-sandbox']
            });
            const page = await browser.newPage();
            await page.goto(`http://localhost:${config.dev.port}/#/`, {
                waitUntil: 'networkidle2'
            });

            if (
                !fs.existsSync(fullDirectoryPath)
            ) {
                fs.mkdirSync(fullDirectoryPath);
            }
            await page.addStyleTag({ path: printCSSPath + 'print.css' });
            await page.emulateMedia('print');
            await page.screenshot({
                path: fullDirectoryPath + 'edgar-zorrilla-cv.png',
                fullPage: true,
                omitBackground: false
            });
            await page.pdf({
                path: fullDirectoryPath + 'edgar-zorrilla-cv' + '.pdf',
                format: 'A4',
                margin: {
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px'
                }
            });
            await page.close();
            await browser.close();
        });
    } catch (err) {
        throw new Error(err);
    }
};

const getResumesFromDirectories = () => {
    const directories = getDirectories();
    return directories
    .map(dir => {
        const fileName = dir.replace('.vue', '');
        return {
            path: fileName,
            name: fileName
        };
    });
};

const getDirectories = () => {
    const srcpath = path.join(__dirname, '../src/pages');
    return fs.readdirSync(srcpath)
    .filter(file => file !== 'template.vue' && file !== 'options.js');
};
convert();
console.log('Finished exports.');
