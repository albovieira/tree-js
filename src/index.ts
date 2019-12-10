import { Tree } from './tree';

//Ref: https://code.tutsplus.com/articles/data-structures-with-javascript-tree--cms-23393
const tree = new Tree();

// const datas = [
//   {
//     nodes: [
//       { name: 'airline', value: 'azul', id: 'azul-airline',  path: 'azul-airline' },
//       { name: 'isMiles', value: false, id: 'azul-is-miles-true', path: 'azul-airline~azul-is-miles-true' },
//       {
//         name: 'hasBaggage',
//         value: false,
//         id: 'azul-has-baggage-false',
//         path: 'azul-airline~azul-is-miles-true~azul-has-baggage-false'
//       },
//       {  
//         name: 'ranking',
//         value: -1,
//         id: 'azul-ranking~3',
//         path: null,
//       }
//     ]
//   },
//   {
//     nodes: [
//       { name: 'airline', value: 'azul', id: 'azul-airline',  path: 'azul-airline' },
//       { name: 'isMiles', value: true, id: 'azul-is-ota-true', path: 'azul-airline~azul-is-miles-true' },
//       {
//         name: 'hasBaggage',
//         value: true,
//         id: 'azul-has-baggage-true',
//         path: 'azul-airline~azul-is-miles-true~azul-has-baggage-true'
//       },
//       {
//         name: 'isInternational',
//         value: false,
//         id: 'azul-is-international-false',
//         path: 'azul-airline~azul-is-miles-true~azul-has-baggage-true~azul-is-international-false'
//       },
//       {  
//         name: 'ranking',
//         value: 2,
//         id: 'azul-ranking~2',
//         path: null,
//       }
//     ]
//   },
//   {
//     nodes: [
//       { name: 'airline', value: 'gol', id: 'gol-airline',  path: 'gol-airline' },
//       { name: 'isOta', value: true, id: 'gol-is-ota-true', path: 'gol-airline~gol-is-ota-true' },
//       {
//         name: 'hasBaggage',
//         value: true,
//         id: 'gol-has-baggage-true',
//         path: 'gol-airline~gol-is-ota-true~gol-has-baggage-true'
//       },
//       {
//         name: 'isInternational',
//         value: false,
//         id: 'gol-is-international-false',
//         path: 'gol-airline~gol-is-ota-true~gol-has-baggage-true~gol-is-international-false'
//       },
//       {  
//         name: 'ranking',
//         value: 3,
//         id: 'gol-ranking~3',
//         path: null,
//       }
//     ]
//   },
//   {
//     nodes: [
//       { name: 'airline', value: 'gol', id: 'gol-airline',  path: 'gol-airline' },
//       { name: 'isOta', value: false, id: 'gol-is-ota-false', path: 'gol-airline~gol-is-ota-false' },
//       {
//         name: 'hasBaggage',
//         value: true,
//         id: 'gol-has-baggage-true',
//         path: 'gol-airline~gol-is-ota-false~gol-has-baggage-true'
//       },
//       {
//         name: 'isInternational',
//         value: true,
//         id: 'gol-is-international-true',
//         path: 'gol-airline~gol-is-ota-false~gol-has-baggage-true~gol-is-international-true'
//       },
//       {  
//         name: 'ranking',
//         value: 4,
//         id: 'gol-ranking~4',
//         path: null,
//       }
//     ]
//   }
// ];

// datas.forEach(data => {
//   const { nodes } = data;
//   nodes.forEach((node, key) => {
//     const { name, value, id } = node;
//     const parent = nodes[key - 1] || null;
//     tree.add(name, value, id, parent);
//   });
// });

const rawNodes = [
  [
    { name: 'airline', value: 'gol', airline: 'gol' },
    { name: 'isOta', value: true, airline: 'gol' },
    {
      name: 'hasBaggage',
      value: true,
      airline: 'gol'
    },
    {
      name: 'isInternational',
      value: false,
      airline: 'gol'
    },
    {  
      name: 'ranking',
      value: 3,
      airline: 'gol'
    }
  ],
  [
    { name: 'airline', value: 'gol', airline: 'gol' },
    { name: 'isMiles', value: true, airline: 'gol' },
    {
      name: 'hasBaggage',
      value: true,
      airline: 'gol'
    },
    {
      name: 'isInternational',
      value: true,
      airline: 'gol'
    },
    {  
      name: 'ranking',
      value: 4,
      airline: 'gol'
    }
  ],
  [
    { name: 'airline', value: 'gol', airline: 'gol' },
    { name: 'isOta', value: true, airline: 'gol' },
    {
      name: 'hasBaggage',
      value: false,
      airline: 'gol'
    },
    {
      name: 'isInternational',
      value: true,
      airline: 'gol'
    },
    {  
      name: 'ranking',
      value: -1,
      airline: 'gol'
    }
  ]
]


tree.build(rawNodes);
console.log(JSON.stringify(tree.show()));
