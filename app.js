const fs = require('fs')
    , rand = require('./rand');

const nbNodes = 800
    , nbLinksPerNodes = 2;

let id, nodes = [], links = [];

for (let i = 1, x = 1; i <= nbNodes; i++) {
    nodes.push({
        id: i,
        label: rand.name(2),
        titre: rand.name(3),
        titre_en: rand.name(3),
        group: 'collaborateur',
        photo: 'blank.png',
        genre: 'femme',
        annee_naissance: rand.int(2002, 1500),
        annee_mort: rand.int(2002, 1500),
        pays: rand.name(1),
        pays_en: rand.name(1),
        domaine: rand.name(2),
        domaine_en: rand.name(2),
        description: rand.name(200),
        description_en: rand.name(200),
        lien_wikipedia: ''
    })

    for (let y = 1; y <= nbLinksPerNodes; y++) {
        let to = rand.int(nbNodes), from = i;
        while (to === from) {
            to = rand.int(nbNodes);
        }

        links.push({
            id: x++,
            from: from,
            to: to,
            label: rand.name(10),
            label_en: rand.name(10)
        })
    }
}

const dir = './build', nodeFileName = 'entites', linkFileName = 'liens';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

fs.writeFile(`${dir}/${nodeFileName}.json`, JSON.stringify(nodes), (err) => {
    if (err) { return console.error('Err. write nodes.json file'); }
    console.log('nodes.json file');
});

fs.writeFile(`${dir}/${linkFileName}.json`, JSON.stringify(links), (err) => {
    if (err) { return console.error('Err. write links.json file'); }
    console.log('nodes.json file');
});