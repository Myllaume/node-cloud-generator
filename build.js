const fs = require('fs');

let nodes = ''
    , edges = ''
    , id = 0
    , x = 0
    , y = 1
    , m = 10 // node margin
    , p = 10 // node space
    , yMax = (p + m) * 10; // line break

const size = 1
    , color = '#f00'
    , nb = 100; // nb of node

function randInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function randFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function randName() {
    let name = [];
    const words = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'nullam', 'sodales', 'aliquet', 'massa', 'quis', 'mattis', 'quam', 'molestie', 'a', 'donec', 'lacinia', 'pretium', 'mi', 'in', 'luctus', 'vivamus', 'pellentesque', 'metus', 'in', 'mi', 'venenatis', 'sit', 'amet', 'cursus', 'leo', 'dignissim', 'nunc', 'convallis', 'eu', 'sem', 'a', 'aliquet', 'nunc', 'a', 'ex', 'dictum', 'sagittis', 'neque', 'non', 'mattis', 'purus', 'donec', 'ut', 'lorem', 'in', 'tortor', 'porttitor', 'tempor', 'in', 'sed', 'orci', 'maecenas', 'egestas', 'ante', 'id', 'euismod', 'fringilla', 'nunc', 'bibendum', 'nulla', 'velit', 'congue', 'ornare', 'magna', 'fermentum', 'ac', 'etiam', 'ut', 'porttitor', 'ligula', 'a', 'sollicitudin', 'mauris', 'interdum', 'et', 'malesuada', 'fames', 'ac', 'ante', 'ipsum', 'primis', 'in', 'faucibus', 'pellentesque', 'nunc', 'nibh', 'vestibulum', 'quis', 'dictum', 'id', 'scelerisque', 'a', 'nisl', 'quisque', 'ac', 'mi', 'sed', 'ligula', 'molestie', 'gravida', 'sed', 'ut', 'ligula', 'nullam', 'feugiat', 'turpis', 'vel', 'dui', 'consequat', 'sed', 'accumsan', 'lectus', 'hendrerit', 'donec', 'posuere', 'massa', 'vel', 'augue', 'mollis', 'ac', 'rhoncus', 'turpis', 'pellentesque', 'praesent', 'id', 'feugiat', 'quam'];
    for (let i = 0; i < 3; i++) {
        const int = randInt(words.length - 1);
        name.push(words[int]);
    }
    return name.join(' ')
}

for (let ix = 0; ix < nb; ix++) {
    x += m
    nodes += `{"id":${id++},"label":"${randName()}","x":${randFloat(x - p, x)},"y":${randFloat(y - p, y)},"size":${size},"color":"${color}"}`;

    if (x > (yMax - (m + p))) {
        x = 0;
        y += m;
    }
    x += m

    if (ix == nb - 1) { break; }
    nodes += ','
}

nodes = ['[', nodes, ']'].join('');

fs.writeFile('data.json', nodes, (err) => {
    if (err) {
        return console.error('Err. write data.json file')
    }
    console.log('data.json file');
});