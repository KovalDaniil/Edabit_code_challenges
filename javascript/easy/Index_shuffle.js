// Index Shuffle
// Проверяем индекс на even/odd и пушим в массив значения, соединяем
function indexShuffle(str) {
    odd = [],
    even = [];
  for (var i = 0; i < str.length; i++) {
i % 2 === 0 ? even.push(str[i]) : odd.push(str[i])
}
  return even.join('') + odd.join('')
};

indexShuffle("abcdefg")