// for (var i = 1; i <=  100000; i++) {
//   document.write(i + ' ');
// }

for (var i = 1; i <=  100000; i++) {
 if (i % 3 === 0 && i % 5 === 0) {
  document.write('FizzBuzz<br>');
 } else if (i % 5 === 0) {
  document.write('Buzz<br>');
 } else if (i % 3 === 0) {
  document.write('Fizz<br>');
 } else {
  document.write(i + '<br>');
 }
}