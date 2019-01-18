function* gen() {
    var a = yield 'start';
    console.log(a);
    var b = yield 'end';
    console.log(b);
    return 'over';
  }
  var it = gen();
  console.log(it.next()); // {value: 'start', done: false}
  console.log(it.next(22)); // 22 {value: 'end', done: false}
  console.log(it.next(333)); // 333 {value: 'over', done: true}
  