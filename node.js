const imagemin = require('imagemin');
const webp = require('imagemin-webp');

(async () => {
    await imagemin(['images/*.{jpg,png}'], {
        destination: 'images/optimized',
        plugins: [
            webp({ quality: 75 })
        ]
    });

    console.log('Images optimized');
})();