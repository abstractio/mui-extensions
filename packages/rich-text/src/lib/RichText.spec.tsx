import { render } from '@testing-library/react';

import { RichText } from './RichText';

describe('RichText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <RichText
        id={''}
        value={''}
        onChange={function (...args: unknown[]): void {
          throw new Error('Function not implemented.');
        }}
        error={false}
        simple={false}
        sx={{}}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
