import { render } from '@testing-library/react';

import EditorBar from './EditorBar';

describe('EditorBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EditorBar />);
    expect(baseElement).toBeTruthy();
  });
});
