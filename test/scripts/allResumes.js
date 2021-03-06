const path = require('path');
const fs = require('fs');

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
    const srcpath = path.join(__dirname, '../../src/pages');
    return fs.readdirSync(srcpath)
    .filter(file => file !== 'template.vue' && file !== 'options.js');
};

module.exports = getResumesFromDirectories;
