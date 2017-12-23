import { articlePreviewLength } from '../config';

export function orderArticles(articles, order) {
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

export function addDefaultAvatar(e) {
  e.target.src = "https://www.keita-gaming.com/assets/profile/default-avatar-c5d8ec086224cb6fc4e395f4ba3018c2.jpg";
}

export function textPreview (text) {
  let textPreview;
    if (text.length >= articlePreviewLength) {
      textPreview = text.slice(0, articlePreviewLength);
      textPreview = textPreview + '...';
    } else textPreview = text;

    return textPreview;
}

export function getTime(epochTime) {
  const currentTime = new Date();
  const postDate = new Date(epochTime);

  const yearDiff = Math.floor(currentTime.getFullYear() - postDate.getFullYear());
  const monthDiff = Math.floor(currentTime.getMonth() - postDate.getMonth());
  const dayDiff = Math.floor(currentTime.getDate() - postDate.getDate());
  const hourDiff = Math.floor(currentTime.getHours() - postDate.getHours());
  const secondDiff = Math.floor(currentTime.getSeconds() - postDate.getSeconds());

  if (yearDiff >= 1) return `${yearDiff} ${yearDiff === 1 ? 'year' : 'years'} ago.`;
  else if (monthDiff >= 1) return `${monthDiff} ${monthDiff === 1 ? 'month' : 'months'} ago.`;
  else if (dayDiff >= 1) return `${dayDiff} ${dayDiff === 1 ? 'day' : 'days'} ago.`;
  else if (hourDiff >= 1) return `${hourDiff} ${hourDiff === 1 ? 'hour' : 'hours'} ago.`;
  else if (secondDiff >= 1) return `${secondDiff} ${secondDiff === 1 ? 'second' : 'seconds'} ago.`;
  else return 'some time ago.'
}
