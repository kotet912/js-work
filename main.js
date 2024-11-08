// Дополните решение так, чтобы оно перевернуло все слова в переданной строке.
// Слова разделяются ровно одним пробелом, начальные и конечные пробелы отсутствуют.
//   Пример(Вход -> Выход):
// "The greatest victory is that which requires no battle" -- > "battle no requires which that is victory greatest The"

const { assert } = require('chai');

describe("reverseWords", function () {
  it("should work for some examples", function () {
    assert.strictEqual(reverseWords("hello world!"), "world! hello")
    assert.strictEqual(reverseWords("yoda doesn't speak like this"), "this like speak doesn't yoda")
    assert.strictEqual(reverseWords("foobar"), "foobar")
    assert.strictEqual(reverseWords("kata editor"), "editor kata")
    assert.strictEqual(reverseWords("row row row your boat"), "boat your row row row")
    assert.strictEqual(reverseWords(""), "")
  });
});

function reverseWords (str) {
  const wordsArray = str.split(" ");
  const reversedArray = wordsArray.reverse();
  // Объединяем слова обратно в строку
  const result = reversedArray.join(" ");

  return result; // reverse those words
}




// // Найти простые числа до 𝑛
// function findPrimesUpTo (n) {
//   const primes = [];
//   for (let i = 2; i <= n; i++) {
//     if (isPrime(i)) {
//       primes.push(i);
//     }
//   }
//   return primes;
// }

// // Проверить, является ли число простым

// function isPrime (num) {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// // Пример использования:
// console.log(findPrimesUpTo(10)); // Ожидаемый результат: [2, 3, 5, 7]
// console.log(findPrimesUpTo(20)); // Ожидаемый результат: [2, 3, 5, 7, 11, 13, 17, 19]


// // Перевернуть число
// function reverseNumber (n) {
//   let reversed = 0;
//   while (n > 0) {
//     reversed = reversed * 10 + n % 10; // Добавляем последнюю цифру к обратному числу
//     n = Math.floor(n / 10); // Убираем последнюю цифру
//   }
//   return reversed
// }

// // Пример использования:
// console.log(reverseNumber(1234)); // Ожидаемый результат: 4321
// console.log(reverseNumber(98765)); // Ожидаемый результат: 56789

// function sumOfDigits (n) {
//   let sum = 0;
//   while (n > 0) {
//     sum += n % 10; // Получаем последнюю цифру
//     n = Math.floor(n / 10); // Убираем последнюю цифру
//   }
//   return sum;
// }

// // Пример использования:
// console.log(sumOfDigits(123)); // Ожидаемый результат: 6
// console.log(sumOfDigits(4567)); // Ожидаемый результат: 22
