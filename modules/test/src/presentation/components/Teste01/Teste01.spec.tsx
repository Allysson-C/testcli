import { render } from '@testing-libary/react';
import '@testing-library/jest-dom';

describe('Teste01', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Teste01 />);
    expect(baseElement).toBeTruthy();
  })
})