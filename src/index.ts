import { Tree } from './tree';

//Ref: https://code.tutsplus.com/articles/data-structures-with-javascript-tree--cms-23393
const tree = new Tree();

const datas = [
  {
    nodes: [
      { name: 'airline', value: 'azul', id: 'azul-airline' },
      { name: 'isOta', value: false, id: 'azul-is-ota' },
      {
        name: 'hasBaggage',
        value: false,
        id: 'azul-has-baggage'
      },
      {
        name: 'ranking',
        value: -1,
        id: 'azul-ranking~-1'
      }
    ]
  },
  {
    nodes: [
      { name: 'airline', value: 'azul', id: 'azul-airline' },
      {
        name: 'isOta',
        value: true,
        id: 'azul-is-ota',
      },
      {
        name: 'ranking',
        value: 1,
        id: 'azul-ranking~1'
      }
    ]
  },
  {
    nodes: [
      { name: 'airline', value: 'azul', id: 'azul-airline' },
      { name: 'isOta', value: false, id: 'azul-is-ota' },
      {
        name: 'hasBaggage',
        value: true,
        id: 'azul-has-baggage',
      },
      {  
        name: 'ranking',
        value: 2,
        id: 'azul-ranking~2'
      }
    ]
  },
  {
    nodes: [
      { name: 'airline', value: 'gol', id: 'gol-airline' },
      { name: 'isOta', value: true, id: 'gol-is-ota' },
      {
        name: 'hasBaggage',
        value: true,
        id: 'gol-has-baggage',
      },
      {
        name: 'isInternational',
        value: false,
        id: 'gol-is-international',
      },
      {  
        name: 'ranking',
        value: 3,
        id: 'gol-ranking~3'
      }
    ]
  },
  {
    nodes: [
      { name: 'airline', value: 'gol', id: 'gol-airline'  },
      { name: 'isOta', value: false,  id: 'gol-is-ota' },
      {
        name: 'hasBaggage',
        value: true,
        id: 'gol-has-baggage',
      },
      {
        name: 'isInternational',
        value: true,
        id: 'gol-is-international',
      },
      {  
        name: 'ranking',
        value: 4,
        id: 'gol-ranking~4'
      }
    ]
  }
];

datas.forEach(data => {
  const { nodes } = data;
  nodes.forEach((node, key) => {
    const { name, value, id } = node;
    const parent = nodes[key - 1] || null;
    tree.add(name, value, id, parent);
  });
});

console.log('done');
