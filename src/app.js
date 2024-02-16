// // // // // //
//  Задание 1  //
// // // // // //

const userValue = +prompt('Пожалуйста, введите ваше число')

isNaN(userValue) && typeof userValue !== NaN
  ? console.log('Упс, похоже, вы ошиблись')
  : userValue % 2
    ? console.log('Ваше число нечетное')
    : console.log('Ваше число четное')


// // // // // //
//  Задание 2  //
// // // // // //

const x = undefined;

switch (typeof x) {
  case 'number': { console.log('x - число'); break; }
  case 'string': { console.log('x - строка'); break; }
  case 'boolean': { console.log('x - логический тип'); break; }
  default: { console.log('x - не определен'); break; }
}
