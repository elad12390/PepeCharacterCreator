

const svgFiles = [
    './assets/js/Head.js',

    './assets/js/Wrinkles.js',

    './assets/js/Eyes/HappyEyes.js',
    './assets/js/Eyes/SadEyes.js',
    './assets/js/Eyes/KekEyes.js',

    './assets/js/Mouths/Mouth.js',
    './assets/js/Mouths/HappyMouth.js',
    './assets/js/Mouths/KekMouth.js',

    './assets/js/Hats/MagaHat.js',
    './assets/js/Hats/HornsHat.js',
    './index.js'
]
.map(src => {
    const elm = document.createElement('script');
    elm.src = src;
    return elm;
})
.forEach((elm) => {
    document.head.appendChild(elm);
});
