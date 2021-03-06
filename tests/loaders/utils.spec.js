/* eslint-disable import/no-extraneous-dependencies, no-unused-expressions */
import { expect } from 'chai';

import { getChannelStats } from '../../src/loaders/utils';

describe('Test getChannelStats Small Array', () => {
  it('Stats Test Small', async () => {
    const loader = {
      isPyramid: false,
      getRaster: async () => {
        return {
          data: [
            [0, 1, 2, 3],
            [0, 2, 0, 2],
            [0, 0, 1, 1]
          ]
        };
      }
    };
    const channelStats = await getChannelStats({ loader });
    const means = channelStats.map(stat => stat.mean);
    const domains = channelStats.map(stat => stat.domain);
    const standardDeviations = channelStats.map(stat => stat.sd);
    const thirdQuartiles = channelStats.map(stat => stat.q3);
    const firstQuartiles = channelStats.map(stat => stat.q1);
    const medians = channelStats.map(stat => stat.median);
    expect(means).to.deep.equal([1.5, 1, 0.5]);
    expect(domains).to.deep.equal([
      [0, 3],
      [0, 2],
      [0, 1]
    ]);
    expect(standardDeviations).to.deep.equal([1.118033988749895, 1, 0.5]);
    expect(firstQuartiles).to.deep.equal([1, 0, 0]);
    expect(thirdQuartiles).to.deep.equal([3, 2, 1]);
    expect(medians).to.deep.equal([2, 2, 1]);
  });
});

describe('Test getChannelStats Big Array', () => {
  it('Stats Test Big', async () => {
    const loader = {
      isPyramid: false,
      getRaster: async () => {
        return {
          data: [
            [0, 1, 2, 3, 7, 8, 9, 10, 4, 5, 6, 11],
            [0, 1, 5, 6, 7, 2, 9, 10, 3, 4, 8, 11, 12]
          ]
        };
      }
    };
    const channelStats = await getChannelStats({ loader });
    const means = channelStats.map(stat => stat.mean);
    const domains = channelStats.map(stat => stat.domain);
    const standardDeviations = channelStats.map(stat => stat.sd);
    const thirdQuartiles = channelStats.map(stat => stat.q3);
    const firstQuartiles = channelStats.map(stat => stat.q1);
    const medians = channelStats.map(stat => stat.median);
    expect(means).to.deep.equal([5.5, 6]);
    expect(domains).to.deep.equal([
      [0, 11],
      [0, 12]
    ]);
    expect(standardDeviations).to.deep.equal([
      3.452052529534663,
      3.7416573867739413
    ]);
    expect(firstQuartiles).to.deep.equal([3, 3]);
    expect(thirdQuartiles).to.deep.equal([9, 9]);
    expect(medians).to.deep.equal([6, 6]);
  });
});
