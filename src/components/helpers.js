
function orderArticles(articles, order) {
  let x = 1;
  let y = -1;

  if (order === "low") {
    x = -1;
    y = 1;
  }

  return articles.sort((a, b) => {
    if (a.votes === b.votes) return 0;
    return a.votes < b.votes ? x : y;
  })

}

function addDefaultAvatar(e) {
  e.target.src = "https://www.keita-gaming.com/assets/profile/default-avatar-c5d8ec086224cb6fc4e395f4ba3018c2.jpg";
}

module.exports = { orderArticles, addDefaultAvatar };