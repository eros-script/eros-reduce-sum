const reduceSum = require('./index');

let hero = [{ name: 'Jendral Soedirman', level: 7 }, { name: 'Pangeran Deponegoro', level: 7 }, { name: 'Kapitan Pattimura', level: 9 }]
let totalItems = reduceSum('level', hero)

console.log(totalItems)
