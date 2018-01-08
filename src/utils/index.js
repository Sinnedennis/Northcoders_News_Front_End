import { articlePreviewLength } from '../config';

export function textPreview (text) {
  let textPreview;
  if (text.length >= articlePreviewLength) {
    textPreview = text.slice(0, articlePreviewLength);
    textPreview = textPreview + '...';
  } else textPreview = text;

  return textPreview;
}


export function orderArticles(list, order) {
  list = list.slice();
  
  let propName = 'created_at';
  if (order === 'high' || order === 'low') propName = 'votes';

  let x = 1;
  let y = -1;

  if (order === 'low' || order === 'old') {
    x = -1;
    y = 1;
  }

  const sortedList = list.sort((a, b) => {
    if (a[propName] === b[propName]) return 0;
    return a[propName] < b[propName] ? x : y;
  });

  return sortedList;
}


export function addDefaultAvatar(e) {
  e.target.src = 'https://www.keita-gaming.com/assets/profile/default-avatar-c5d8ec086224cb6fc4e395f4ba3018c2.jpg';
}


export function getTime(epochTime) {
  const currentTime = new Date();

  const secondsDifference = Math.floor((currentTime.getTime() - epochTime) / 1000);

  const timeObj = {
    year:   31556952,
    month:  2592000,
    day:    86400,
    hour:   3600,
    minute: 60
  };

  const timeAgo = {
    num: 0,
    name: ''
  };

  if (secondsDifference >= timeObj.year) {
    return ' over a year ago.';

  } else if (secondsDifference >= timeObj.month) {
    timeAgo.num = Math.floor(secondsDifference / timeObj.month);
    timeAgo.name = 'month';

  } else if (secondsDifference >= timeObj.day) {
    timeAgo.num = Math.floor(secondsDifference / timeObj.day);
    timeAgo.name = 'day';

  } else if (secondsDifference >= timeObj.hour) {
    timeAgo.num = Math.floor(secondsDifference / timeObj.hour);
    timeAgo.name = 'hour';

  } else if (secondsDifference >= timeObj.minute) {
    timeAgo.num = Math.floor(secondsDifference / timeObj.minute);
    timeAgo.name = 'minute';

  } else return ' less than a minute ago.';

  timeAgo.name = timeAgo.num > 1 ? timeAgo.name + 's' : timeAgo.name;
  return ` ${timeAgo.num} ${timeAgo.name} ago.`;
}


export function updateListVotes (list, id, vote) {
  if (list.length <= 0) return [];

  return list.map(article => {
    const articleCopy = Object.assign({}, article);
    if (id === articleCopy._id) {
      articleCopy.votes += vote === 'up' ? 1 : -1;
    }
    return articleCopy;
  });
}