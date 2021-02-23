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

const changeMouthStyling = (mouthDelta, [,,,mouthCss]) => {
    $("div#mouth svg").css({
        width: mouthDelta.size + mouthCss.width,
        left: mouthCss.left + mouthDelta.x - mouthDelta.size/2,
        top: mouthCss.top + mouthDelta.y,
        height: 'auto'
    });
}

const changeEyeStyling = (mouthDelta, [,,,eyeCss]) => {
    $("div#eyes svg").css({
        width: mouthDelta.size + eyeCss.width,
        left: eyeCss.left + mouthDelta.x - mouthDelta.size/2,
        top: eyeCss.top + mouthDelta.y,
        height: 'auto'
    });
}

const colorChangeEventHandler = (ev, func) => {
    if (typeof(func) !== 'function') {
        throw "val not a function!";
    }
    const color = ev.target.value;
    return func(color);
}

const rangeEventHandler = (ev, func) => {
    if (typeof(func) !== 'function') {
        throw "val not a function!";
    }
    const color = Number(ev.target.value);
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

const saveAs = (uri, filename) => {

    var link = document.createElement('a');

    if (typeof link.download === 'string') {

        link.href = uri;
        link.download = filename;

        //Firefox requires the link to be in the body
        document.body.appendChild(link);

        //simulate click
        link.click();

        //remove the link when done
        document.body.removeChild(link);

    } else {

        window.open(uri);

    }
}



$("document").ready(() => {
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
    let mouthDelta = {
        size: 0,
        x: 0,
        y: 0
    }
    let eyeDelta = {
        size: 0,
        x: 0,
        y: 0
    }

    createEntirePepe(bodyElement, eyes, mouths, hats, skinColor);

    $("#mouth-size").on('input',(ev) => rangeEventHandler(ev, (val) => {
        mouthDelta.size = val;
        changeMouthStyling(mouthDelta, selectedMouth);
    }))

    $("#mouth-x").on('input',(ev) => rangeEventHandler(ev, (val) => {
        mouthDelta.x = val;
        changeMouthStyling(mouthDelta, selectedMouth);
    }))

    $("#mouth-y").on('input',(ev) => rangeEventHandler(ev, (val) => {
        mouthDelta.y = val;
        changeMouthStyling(mouthDelta, selectedMouth);
    }))

    $("#eye-size").on('input',(ev) => rangeEventHandler(ev, (val) => {
        eyeDelta.size = val;
        changeEyeStyling(eyeDelta, selectedEyes);
    }))

    $("#eye-x").on('input',(ev) => rangeEventHandler(ev, (val) => {
        eyeDelta.x = val;
        changeEyeStyling(eyeDelta, selectedEyes);
    }))

    $("#eye-y").on('input',(ev) => rangeEventHandler(ev, (val) => {
        eyeDelta.y = val;
        changeEyeStyling(eyeDelta, selectedEyes);
    }))

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
            changeMouthStyling(mouthDelta, selectedMouth);
        }));

    $("#hat-type").on('change',
        (ev) => eyeChangeHandler(ev, (selected) => {
            selectedMouth = hats.find(([name,]) => name === selected);
            setHat($("div#hat"), selectedMouth, hats);
        }));

    $("#downloadButton").on('click', () => {
        let element = document.querySelector("#screenshot");
        html2canvas(element,{
            backgroundColor: null,
            scrollX: 0,
            scrollY: 0,
            windowWidth: element.scrollWidth,
            windowHeight: element.scrollHeight
        }).then(canvas => {
            document.body.appendChild(canvas)
        });

    });
})
