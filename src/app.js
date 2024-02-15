// // // // // //
//  Задание 1  //
// // // // // //

const userValue = +prompt('Пожалуйста, введите ваше число')

isNaN(userValue) && typeof userValue !== NaN
  ? console.log('Упс, похоже, вы ошиблись')
  : userValue % 2
    ? console.log('Ваше число нечетное')
    : console.log('Ваше число четное')
