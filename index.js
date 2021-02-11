const setColor = (selectors, colorAttribute, newColor) => {
    console.log(selectors);
    selectors.forEach(([,selector,]) => {
        $(selector).css(colorAttribute,newColor);
    })
}

const setEyes = (element, [,,eyeElement, eyeCss]) => {
    console.log(element);
    element.find('svg').remove();
    const eye = $(eyeElement);
    if (eyeCss) {
        eye.css(eyeCss);
    }
    element.append(eye);
}

const setMouth = (element, [,,mouthElement, mouthCss]) => {
    console.log(element)
    element.find('svg').remove();
    const elm = $(mouthElement);
    elm.css(mouthCss);
    element.append(elm);
}

const setHat = (element, [,,hatElement, hatCss]) => {
    console.log(element)
    element.find('svg').remove();
    const elm = $(hatElement);
    elm.css(hatCss);
    element.append(elm);
}

const colorChangeEventHandler = (ev, func) => {
    if (typeof(func) !== 'function') {
        throw "val not a function!";
    }
    const color = ev.target.value;
    return func(color);
}

const eyeChangeHandler = (ev, func) => {
    if (typeof(func) !== 'function') {
        throw "val not a function!";
    }
    const selectedEye = ev.target.value;
    return func(selectedEye);
}


const setStyling = (selector, selectorAndValues) => {
    selectorAndValues.forEach(([selector,val]) => {
        $(selector).css(selector, val);
    })

}
const createEntirePepe = (element, [[,,eyeElement, eyeCss],], [[,,mouthElement, mouthCss],], [[,,hatElement, hatCss],], skinColor = "#5b8e43") => {
    const defaultStyling = [
        ['--skin-color', skinColor],
        ['--stroke-width', 4]
    ];

    const headElm = $(head.trim());
    if (!!headCss) {
        headElm.css(headCss);
    }
    const eyeElm = $(eyeElement);
    if (!!eyeCss) {
        eyeElement.css(eyeCss);
    }
    const wrinklesElm = $(wrinkles);
    if (!!wrinklesCss) {
        wrinklesElm.css(wrinklesCss);
    }
    const mouthElm = $(mouthElement);
    if (!!mouthCss) {
        mouthElm.css(mouthCss);
    }
    const hatElm = $(hatElement);
    if (!!hatCss) {
        hatElm.css(hatCss);
    }
    element.find('#head').append(headElm);
    element.find('#eyes').append(eyeElm);
    element.find('#wrinkles').append(wrinklesElm);
    element.find('#mouth').append(mouthElm);
    element.find('#hat').append(hatElm);
    setStyling("#rightEye", defaultStyling);
    setStyling("#head", defaultStyling);
}


const setupInputs = () => {

}

$("document").ready(() => {
    const ctx = document.getElementById("ctx").getContext('2d');
    const bodyElement = $("#pepe");
    const pepeBodyElements = [
        ['default head', 'svg#head',head, headCss],
        ['default wrinkles', 'svg#wrinkles',wrinkles, wrinklesCss],
        ['default mouth', 'svg#mouth',mouth, mouthCss],
        ['default eyes', 'svg.eyes',],
    ]
    const eyes = [
        ['sadEyes', '#sadEyes', $(sadEyes), sadEyesCss],
        ['happyEyes','#happyEyes', happyEyes, happyEyesCss],
        ['kekEyes','#kekEyes', kekEyes, kekEyesCss]
    ];
    const mouths = [
        ['sadMouth', 'svg#mouth', mouth, mouthCss],
        ['happyMouth', 'svg#happyMouth', happyMouth, happyMouthCss],
        ['kekMouth', 'svg#kekMouth', kekMouth, kekMouthCss]
    ];
    const hats = [ // TODO
        ['noHat', 'noHat', '',{}],
        ['magaHat', 'svg#magaHat', magaHat, magaHatCss],
        ['hornsHat', 'svg#hornsHat', hornsHat, hornsHatCss]
    ];
    let skinColor = "#5b8e43";
    let mouthColor = '#a25737';
    let eyeBackgroundColor = '#ffffff';
    let selectedEyes = eyes[0];
    let selectedMouth = mouths[0];

    createEntirePepe(bodyElement, eyes, mouths, hats, skinColor);

    $("#skin-color").on('input',
        (ev) => colorChangeEventHandler(ev, (color) => {
            skinColor = color;
            setColor(pepeBodyElements, '--skin-color', color)
        }))

    $("#mouth-color").on('input',
        (ev) => colorChangeEventHandler(ev, (color) => {
            mouthColor = color;
            setColor(mouths, '--mouth-color', color)
        }))

    $("#eye-background-color").on('input',
        (ev) => colorChangeEventHandler(ev, (color) => {
            eyeBackgroundColor = color;
            setColor(eyes, '--eye-back-color', color)
        }))

    $("#eye-type").on('change',
        (ev) => eyeChangeHandler(ev, (selected) => {
            selectedEyes = eyes.find(([name,]) => name === selected);
            setEyes($("div#eyes"), selectedEyes, eyes);
            setColor(eyes, '--skin-color', skinColor);
            setColor(eyes, '--eye-back-color', eyeBackgroundColor);
        }));

    $("#mouth-type").on('change',
        (ev) => eyeChangeHandler(ev, (selected) => {
            selectedMouth = mouths.find(([name,]) => name === selected);
            setMouth($("div#mouth"), selectedMouth, mouths);
            setColor(mouths, '--mouth-color', mouthColor);
        }));

    $("#hat-type").on('change',
        (ev) => eyeChangeHandler(ev, (selected) => {
            selectedMouth = hats.find(([name,]) => name === selected);
            setHat($("div#hat"), selectedMouth, hats);
        }));
})
