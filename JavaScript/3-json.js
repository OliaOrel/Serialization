'use strict';

let obj1 = {
  field: 'Value',
  subObject: {
    arr: [7, 10, 2, 5],
    fn: x => x / 2
  }
};

console.log(JSON.stringify(obj1));