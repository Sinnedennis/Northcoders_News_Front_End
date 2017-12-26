const { expect } = require('chai');

const { orderArticles, getTime } = require('../src/components/helpers');

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

    expect(oldest[0].created_at).to.be.greaterThan(oldest[1].created_at);
    expect(oldest[2].created_at).to.be.lessThan(oldest[1].created_at);

    expect(newest[0].created_at).to.be.lessThan(newest[1].created_at);
    expect(newest[2].created_at).to.be.greaterThan(newest[1].created_at);
  })

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
})