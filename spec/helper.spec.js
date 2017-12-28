const { expect } = require('chai');

const { orderArticles, getTime } = require('../src/utils');

describe('#orderArticles', () => {
  it('should order a list based on prop "created_at"', () => {

    const d = new Date();

    const input = [
      { created_at: d.getTime() },
      { created_at: d.getTime() - 1000 },
      { created_at: d.getTime() - 2000 },
    ];

    const oldest = orderArticles(input, 'old');
    const newest = orderArticles(input, 'new');

    expect(oldest[0].created_at).to.be.lessThan(oldest[1].created_at);
    expect(oldest[2].created_at).to.be.greaterThan(oldest[1].created_at);

    expect(newest[0].created_at).to.be.greaterThan(newest[1].created_at);
    expect(newest[2].created_at).to.be.lessThan(newest[1].created_at);
  });


  it('should order a list based on the prop "votes"', () => {

    const input = [
      { votes: 10 },
      { votes: 20 },
      { votes: 30 },
    ];

    const highest = orderArticles(input, 'high');
    const lowest = orderArticles(input, 'low');

    expect(highest[0].votes).to.be.greaterThan(highest[1].votes);
    expect(highest[2].votes).to.be.lessThan(highest[1].votes);

    expect(lowest[0].votes).to.be.lessThan(lowest[1].votes);
    expect(lowest[2].votes).to.be.greaterThan(lowest[1].votes);
  });
});


describe('#getTime', () => {

  let pastTime = new Date();
  pastTime = pastTime.getTime();

  it('should return " less than a minute ago." when passed a difference of less than a second', () => {
    expect(getTime(pastTime - (10 * 1000))).to.equal(' less than a minute ago.');
    expect(getTime(pastTime - (61 * 10000))).to.not.equal(' less than a minute ago.');
  });


  it('should return " # minute(s) ago." when passed a difference of minutes', () => {

    expect(getTime(pastTime - (60 * 1000))).to.equal(' 1 minute ago.');
    expect(getTime(pastTime - (130 * 1000))).to.equal(' 2 minutes ago.');
  });


  it('as above with hours', () => {

    expect(getTime(pastTime - (3600 * 1000))).to.equal(' 1 hour ago.');
    expect(getTime(pastTime - (7200 * 1000))).to.equal(' 2 hours ago.');
  });


  it('as above with days', () => {

    expect(getTime(pastTime - (86400 * 1000))).to.equal(' 1 day ago.');
    expect(getTime(pastTime - (188000 * 1000))).to.equal(' 2 days ago.');
  });


  it('as above with months', () => {

    expect(getTime(pastTime - (2592000 * 1000))).to.equal(' 1 month ago.');
    expect(getTime(pastTime - (5184000 * 1000))).to.equal(' 2 months ago.');
  });


  it('should return "over a year ago" when passed a difference of 1+ years', () => {

    expect(getTime(pastTime - (31556952 * 1000))).to.equal(' over a year ago.');
    expect(getTime(pastTime - (63113904 * 1000))).to.equal(' over a year ago.');
  });
});