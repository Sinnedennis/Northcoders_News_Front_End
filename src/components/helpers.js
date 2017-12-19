
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

module.exports = { orderArticles };