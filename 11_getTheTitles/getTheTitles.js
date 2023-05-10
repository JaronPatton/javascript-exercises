const getTheTitles = function (books) {
  let bookArr = []
  for (const book of books)
    bookArr.push(book["title"]);
  return bookArr;
};

// Do not edit below this line
module.exports = getTheTitles;
