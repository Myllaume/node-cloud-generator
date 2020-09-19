const fs = require('fs');

let h = ''
    , id = 0
    , x = 0
    , y = 1
    , yMax = 100 // line break
    , m = 3 // node margin
    , p = 3; // node space

const size = 1
    , color = '#f00'
    , nb = 10; // nb of node

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

for (let p = 0; p < nb; p++) {
    h +=
    `{"id":${id++},"label":"${randName()}","x":${randFloat(x - p, x)},"y":${randFloat(y - p, y)},"size":${size},"color":"${color}"}`;

    if (p == nb - 1) { break; }

    h += ','

    if (x > (yMax - (m + p))) {
        x = 0;
        y += 3;
    }
    x += m * 2
}

h = ['[', h, ']'].join('');

fs.writeFile('data.json', h, (err) => {
    if (err) {
        return console.error('Err. write data.json file')
    }
    console.log('data.json file');
});