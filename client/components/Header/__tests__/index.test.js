import React from 'react';
import serializer from 'jest-emotion';
import { Header } from '../index';

expect.addSnapshotSerializer(serializer);

describe('Header', () => {
  describe('optimal case', () => {
    it('should match snapshot', () => {
      const { asFragment } = render(<Header />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
