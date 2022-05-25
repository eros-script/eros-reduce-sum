<h1 align="center">
  eros-reduce-sum
</h1>

<p align="center">Summing the total, from the specific key of the object array</p>

## Install

Add reduce-sum to your project using npm or yarn.

Install (NPM):

```bash
$ npm i eros-reduce-sum --save
```

Install (Yarn):

```bash
$ yarn add eros-reduce-sum
```

## Usage

Import reduceSum into Your Project

```js
import reduceSum from 'eros-reduce-sum'
```

Use reduceSum

```js

let hero = [{ name: 'Jendral Soedirman', level: 7 }, { name: 'Pangeran Deponegoro', level: 7 }, { name: 'Kapitan Pattimura', level: 9 }]
let totalItems = reduceSum('level', hero)
// 23
```

## Contributing

EROS SCRIPT
open source initiative indonesia
