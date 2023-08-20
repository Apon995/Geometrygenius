const trianglecal = () => {
    let base = getvalue('triangle-base');
    let height = getvalue('triangle-height');
    if (isNaN(base) || isNaN(height)) {
        return;
    }


    setInnertext('triangle-base-show', base);
    setInnertext('triangle-height-show', height);
    setInnertext('triangle-show-base-onformula', base);
    setInnertext('triangle-show-height-onformula', height);

    let calculate = 0.5 * base * height;
    setInnertext('triangle-area-result', calculate);


    addcalcutaion('Triangle', base, height, calculate)
}



const reactanglecal = () => {
    let length = getvalue('rectangle-length');
    let width = getvalue('rectangle-width');
    if (isNaN(length) || isNaN(width)) {
        return;
    }
    setInnertext('rectangle=length-showOnformula', length);
    setInnertext('rectangle=width-showOnformula', width);
    setInnertext('rectangle-length-show', length);
    setInnertext('rectangle-width-show', width);
    let calculate = length * width;
    setInnertext('reactangle-area-result', calculate);

    addcalcutaionfor_baseOr_height('Rectangle', length, width, calculate);
}


const Rhombuscal = () => {
    let d1 = getvalue('rhombusd1');
    let d2 = getvalue('rhombusd2');
    if (isNaN(d1) || isNaN(d2)) {
        return;
    }
    setInnertext('rhombos-d1-showvalueonformula', d1);
    setInnertext('rhombosd-d2-showvalueonformula', d2);
    setInnertext('rhombosd1-showvalue', d1);
    setInnertext('rhombosd2-showvalue', d2);

    let calculate = 0.5 * d1 * d2;

    setInnertext('Rhombusshow-result', calculate);
    addcalcutaion('Rhombus', d1, d2, calculate)
}

const pentagoncal = () => {
    let p = getvalue('pentagon-p');
    let a = getvalue('pentagon-a');
    if (isNaN(p) || isNaN(a)) {
        return;
    }
    setInnertext('pentagon-a-valueonformula', p)
    setInnertext('pentagon-p-valueonformula', a)
    setInnertext('pentagon-p-value', p)
    setInnertext('pentagon-a-value', a)

    let calculate = 0.5 * p * a;

    setInnertext('pentagon-result', calculate)
    addcalcutaion('pentagon', p, a, calculate)
}

const parallelogramcal = () => {
    let base = getvalue('parallelogram-base');
    let height = getvalue('parallelogram-heigth');
    if (isNaN(base) || isNaN(height)) {
        return;
    }
    setInnertext('parallelogram-base-show', base)
    setInnertext('parallelogram-height-show', height)
    setInnertext('parallelogram-base-show-onformula', base)
    setInnertext('parallelogram-height-show-onformula', height)


    let calculate = base * height;

    setInnertext('parallelogram-result', calculate)

    addcalcutaionfor_baseOr_height('parallelogram', base, height, calculate);

}

const Ellipsecal = () => {
    let major = getvalue('Ellipse-major')
    let minor = getvalue('Ellipse-minor')
    if (isNaN(major) || isNaN(minor)) {
        return;
    }

    setInnertext('Ellipse-major-show', major)
    setInnertext('Ellipse-minor-show', minor)
    let calculate = Math.PI * major * minor;

    setInnertext('Ellipse-area-result', calculate);

    addcalcutaionforEllipse('Ellipse ', major, minor, calculate);

}