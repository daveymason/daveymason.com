const Node = require('./index');

test('Contains returns node with the same data', () => {
  const node = new Node(3,3);
  node.insert(0, 0);
  node.insert(1, 0);
  node.insert(-1, 0);
  node.insert(-2,0);
  node.insert(-2,1);
  node.insert(2,0);
  node.insert(2,1);
  node.insert(2,2);

  const three = node.down.down.right;
  expect(node.contains(5,5)).toEqual(three);
});

test('Contains returns null if value not found', () => {
  const node = new Node(1, 0);
  node.insert(0, 0);
  node.insert(1, 0);
  node.insert(-1, 0);
  node.insert(-2,0);
  node.insert(2,0);
  node.insert(3,0);

  expect(node.contains(5,5)).toEqual(null);
});
