/*!
 * @license MIT
 * Prefetch all images for your web app, especially for mobile/h5 promotion pages.
 * https://github.com/JasonBoy/prefetch-image
 */

let imageCache = {};

/**
 * Preload all images
 * @param {Array|string} images
 * @param {object=} options
 * @return {Promise}
 */
function preloadImages(images, options = {}) {
    const isArray = Array.isArray(images);

    if (!images || images instanceof String || !isArray) {
        console.error('[preloadImages]: images not provided, please pass images src in Array or string!');
        return Promise.reject([]);
    }

    return loadImagesParallel(isArray ? images : [images]);
}

/**
 * Load images on an array in parallel (limited by browser max connections)
 * @param {Array} images
 * @return {Promise}
 */
function loadImagesParallel(images) {
    let imagePromises = [];

    for (let i = 0, len = images.length; i < len; i++) {
        const src = images[i];
        if (!src) continue;
        imagePromises.push(loadImage(src));
    }

    return Promise.all(imagePromises);
}

/**
 * Load images on an array in sequentially
 * @param {Array} images
 * @return {Promise}
 */
function loadImagesSequentially(images) {
    return new Promise((resolve, reject) => {
        images = images.filter(src => src);
        let imagesLoaded = [];
        let loadNextImage = (idx) => {
            if (idx >= images.length) {
                resolve(imagesLoaded);
            }

            loadImage(images[idx]).then((src) => {
                imagesLoaded.push(src);
                loadNextImage(idx + 1);
            });

        };

        loadNextImage(0);
    });
}

/**
 * Start loading every single image
 * @param {string} src image src
 * @return {Promise}
 */
function loadImage(src) {
    // console.log(`-> Start loading img src: "${src}"`);
    return imageCache[src] ?
        Promise.resolve(src) :
        new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                console.log(`Img loaded completed src: "${src}""`);
                resolve(src);
            };
            img.onerror = () => {
                console.error(`Img loaded failed src: "${src}"`);
                resolve(src); // still resolve even if some image failed loading.
            };
            img.src = src;
            imageCache[src] = img;
        });
}

export default preloadImages;