/**
 * Obtenir un nom aléatoire
 * @param {number} min - Nombre minimum
 * @param {number} max - Nombre maximum
 * @returns {number}
 */

 function int(max, min = 1) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

exports.int = int;

/**
 * Obtenir un nombre décimal aléatoire
 * @param {number} min - Nombre minimum
 * @param {number} max - Nombre maximum
 * @returns {number}
 */

function float(min, max) {
    return Math.random() * (max - min) + min;
}

exports.float = float;

/**
 * Obtenir un nombre de mots aléatoires
 * @param {number} nb - Nombre de mot
 * @returns {number}
 */

function name(nb) {
    let name = [];
    const words = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'nullam', 'sodales', 'aliquet', 'massa', 'quis', 'mattis', 'quam', 'molestie', 'donec', 'lacinia', 'pretium', 'mi', 'in', 'luctus', 'vivamus', 'pellentesque', 'metus', 'in', 'mi', 'venenatis', 'sit', 'amet', 'cursus', 'leo', 'dignissim', 'nunc', 'convallis', 'eu', 'sem', 'a', 'aliquet', 'nunc', 'a', 'ex', 'dictum', 'sagittis', 'neque', 'non', 'mattis', 'purus', 'donec', 'ut', 'lorem', 'in', 'tortor', 'porttitor', 'tempor', 'in', 'sed', 'orci', 'maecenas', 'egestas', 'ante', 'id', 'euismod', 'fringilla', 'nunc', 'bibendum', 'nulla', 'velit', 'congue', 'ornare', 'magna', 'fermentum', 'ac', 'etiam', 'ut', 'porttitor', 'ligula', 'a', 'sollicitudin', 'mauris', 'interdum', 'et', 'malesuada', 'fames', 'ac', 'ante', 'ipsum', 'primis', 'in', 'faucibus', 'pellentesque', 'nunc', 'nibh', 'vestibulum', 'quis', 'dictum', 'id', 'scelerisque', 'a', 'nisl', 'quisque', 'ac', 'mi', 'sed', 'ligula', 'molestie', 'gravida', 'sed', 'ut', 'ligula', 'nullam', 'feugiat', 'turpis', 'vel', 'dui', 'consequat', 'sed', 'accumsan', 'lectus', 'hendrerit', 'donec', 'posuere', 'massa', 'vel', 'augue', 'mollis', 'ac', 'rhoncus', 'turpis', 'pellentesque', 'praesent', 'id', 'feugiat', 'quam'];
    for (let i = 0; i < nb; i++) {
        const number = int(words.length - 1);
        name.push(words[number]);
    }
    return name.join(' ')
}

exports.name = name;