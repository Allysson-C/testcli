import { render } from '@testing-libary/react';
import '@testing-library/jest-dom';

describe('Teste02', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Teste02 />);
    expect(baseElement).toBeTruthy();
  })
})