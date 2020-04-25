import React from 'react';
import mockJobItem from '../__mocks__/mockJobItem';
import JobResultItem from '../index';

describe('JobResultItem', () => {
  describe('optimal case', () => {
    const { asFragment } = render(<JobResultItem data={mockJobItem} />);

    it('should match snapshot', () => {
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
