import { expect } from 'chai';

import { Tree } from '../src/tree';
import { nodesWithOneAirline } from './mocks/nodes-with-one-airline';

describe('Tree', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = new Tree();
  });

  it('should add one node', () => {
    const [node] = tree.normalize([
      { name: 'airline', value: 'gol', airline: 'gol' }
    ]);
    tree.add(node, null);

    const root = tree.get();

    const [child] = root.getChildren();

    expect(child.id).to.be.eq(node.id);
    expect(child.path).to.be.eq(node.path);
  });

  it('should add any nodes', () => {
    const [node1] = tree.normalize([
      { name: 'airline', value: 'gol', airline: 'gol' }
    ]);
    tree.add(node1, null);

    const [node2] = tree.normalize([
      { name: 'isInternational', value: true, airline: 'gol' }
    ]);
    tree.add(node2, node1);

    const [node3] = tree.normalize([
      { name: 'ranking', value: 3, airline: 'gol' }
    ]);
    tree.add(node3, node2);

    const root = tree.get();

    const rootChildren = root.getChildren();
    rootChildren.forEach(childNode1 => {
      expect(childNode1.name).to.be.eq(node1.name);
      expect(childNode1.id).to.be.eq(node1.id);

      expect(childNode1.getParent().id).to.be.eq('root');
      expect(childNode1.getParent().name).to.be.eq('root');
      expect(childNode1.getParent().value).to.be.eq(null);

      childNode1.getChildren().forEach(childNode2 => {
        expect(childNode2.name).to.be.eq(node2.name);
        expect(childNode2.id).to.be.eq(node2.id);
        expect(childNode2.value).to.be.eq(node2.value);

        expect(childNode2.getParent().id).to.be.eq(node1.id);
        expect(childNode2.getParent().name).to.be.eq(node1.name);
        expect(childNode2.getParent().value).to.be.eq(node1.value);

        childNode2.getChildren().forEach(childNode3 => {
          expect(childNode3.name).to.be.eq(node3.name);
          expect(childNode3.id).to.be.eq(node3.id);
          expect(childNode3.value).to.be.eq(node3.value);

          expect(childNode3.getParent().id).to.be.eq(node2.id);
          expect(childNode3.getParent().name).to.be.eq(node2.name);
          expect(childNode3.getParent().value).to.be.eq(node2.value);
        });
      });
    });
  });

  it('should add nodes with same name', () => {
    const nodes = [
      [
        { name: 'airline', value: 'gol', airline: 'gol' },
        { name: 'isInternational', value: true, airline: 'gol' },
        { name: 'ranking', value: 3, airline: 'gol' }
      ],
      [
        { name: 'airline', value: 'gol', airline: 'gol' },
        { name: 'isInternational', value: false, airline: 'gol' },
        { name: 'ranking', value: 4, airline: 'gol' }
      ]
    ];

    tree.build(nodes);
    const root = tree.get();
    const rootChildren = root.getChildren();
    rootChildren.forEach(children1 => {
      expect(children1.name).to.be.eq('airline');
      expect(children1.id).to.be.eq('gol-airline-gol');
      expect(children1.value).to.be.eq('gol');

      expect(children1.getParent().id).to.be.eq('root');
      expect(children1.getParent().name).to.be.eq('root');
      expect(children1.getParent().value).to.be.eq(null);

      children1.getChildren().forEach(children2 => {
        expect(children2.name).to.be.eq('isInternational');
        expect(children2.getParent().id).to.be.eq('gol-airline-gol');
        expect(children2.getParent().name).to.be.eq('airline');
        expect(children2.getParent().value).to.be.eq('gol');

        if (children2.value) {
          expect(children2.id).to.be.eq('gol-isInternational-true');
          expect(children2.value).to.be.eq(true);

          expect(children2.getParent().id).to.be.eq('gol-airline-gol');
          expect(children2.getParent().name).to.be.eq('airline');
          expect(children2.getParent().value).to.be.eq('gol');

          children2.getChildren().forEach(children3 => {
            expect(children3.id).to.be.eq('gol-ranking-3');
            expect(children3.name).to.be.eq('ranking');
            expect(children3.value).to.be.eq(3);

            expect(children3.getParent().id).to.be.eq(
              'gol-isInternational-true'
            );
            expect(children3.getParent().name).to.be.eq('isInternational');
            expect(children3.getParent().value).to.be.eq(true);
          });
        } else {
          expect(children2.id).to.be.eq('gol-isInternational-false');
          expect(children2.value).to.be.eq(false);
          children2.getChildren().forEach(children3 => {
            expect(children3.id).to.be.eq('gol-ranking-4');
            expect(children3.name).to.be.eq('ranking');
            expect(children3.value).to.be.eq(4);

            expect(children3.getParent().id).to.be.eq(
              'gol-isInternational-false'
            );
            expect(children3.getParent().name).to.be.eq('isInternational');
            expect(children3.getParent().value).to.be.eq(false);
          });
        }
      });
    });
  });

  it('should apply the ranking on the last node', () => {
    const nodes = [
      [
        { name: 'airline', value: 'gol', airline: 'gol' },
        { name: 'isInternational', value: true, airline: 'gol' },
        { name: 'ranking', value: 3, airline: 'gol' }
      ],
      [
        { name: 'airline', value: 'gol', airline: 'gol' },
        { name: 'isInternational', value: false, airline: 'gol' },
        { name: 'ranking', value: 4, airline: 'gol' }
      ]
    ];

    tree.build(nodes);
    const root = tree.get();
    const rootChildren = root.getChildren();

    const nodeName1 = 'ranking';
    const nodeValue1 = 3;
    const id1 = 'gol-ranking-3';
    const parent1 = { id: 'gol-isInternational-true', name: 'isInternational', value: true };
    
    const node1 = tree.transverseByNodeName(
      rootChildren,
      nodeName1,
      nodeValue1,
      id1,
      parent1
    );

    expect(node1.name).to.be.eq('ranking');
    expect(node1.value).to.be.eq(3);

    const nodeName2 = 'ranking';
    const nodeValue2 = 4;
    const id2 = 'gol-ranking-4';
    const parent2 = { id: 'gol-isInternational-false', name: 'isInternational', value: false };
    
    const node2 = tree.transverseByNodeName(
      rootChildren,
      nodeName2,
      nodeValue2,
      id2,
      parent2
    );

    expect(node2.name).to.be.eq('ranking');
    expect(node2.value).to.be.eq(4);
  });
});
