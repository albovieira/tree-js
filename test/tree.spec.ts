import { expect } from 'chai';

import { Tree } from '../src/tree';
import { nodesWithOneAirline } from './mocks/nodes-with-one-airline';

const DIFFICULTY = 2;
const REWARD = 10;

describe('Tree', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = new Tree();
  });

  it('should build a tree for one airline', () => {
    const result = tree.build(nodesWithOneAirline() as any);
  });
});
