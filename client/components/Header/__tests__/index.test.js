import React from 'react';
import serializer from 'jest-emotion';
import { Header } from '../index';

expect.addSnapshotSerializer(serializer);

describe('Header', () => {
  describe('optimal case', () => {
    const { asFragment, queryByText } = render(<Header />);
    it("should render the text 'Easily Find City Job Listings'", () => {
      expect(queryByText('Easily Find City Job Listings')).not.toBeNull();
    });

    it("should render the text 'NYC JOB SEARCHER'", () => {
      expect(queryByText('NYC JOB SEARCHER')).not.toBeNull();
    });

    it("should render with a badge that has the text 'BETA'", () => {
      expect(queryByText('BETA')).not.toBeNull();
    });

    it('should match snapshot', () => {
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
