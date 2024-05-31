var add = require('./add');

function main() {
  console.log(add(1, 2));
  console.log('hoge', 'fuga', 'piyo');
  console.log({
    justArray: [
      'hoge',
      'fuga',
      'piyo',
      1,
      2,
      3,
      { key: 'value' },
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      'foo',
      'bar',
    ],
  });
}

main();
