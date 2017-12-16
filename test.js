const axios = require('axios');

axios.get('https://northcoders-news-backend-api.herokuapp.com/api/articles/')
.then(response => {
    console.log(response.data.articles[0]);
})
.catch(err => {
    console.log(err);
})