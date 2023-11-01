import { render, screen } from '@testing-library/react';
import RoundButton from './index';
import StopOutlined from '@mui/icons-material/StopOutlined';

test('Check that makes the render and has error class', () => {
  render(<RoundButton Icon={StopOutlined} handleClick={() => {}} bgColor='error' />);
  const roundButton = screen.getByTestId('round-button')
  expect(roundButton).toBeInTheDocument();
  expect(roundButton).toHaveClass('round_button');
  expect(roundButton).toHaveClass('round_error');
});

test('Check that makes the render, has the primary class and it is clickable', () => {
    const fn = jest.fn(() => {})

    render(<RoundButton Icon={StopOutlined} handleClick={fn} bgColor='primary' />);
    const roundButton = screen.getByTestId('round-button')
    expect(roundButton).toBeInTheDocument();
    expect(roundButton).toHaveClass('round_button');
    expect(roundButton).toHaveClass('round_primary');
    
    roundButton.click()
    expect(fn).toBeCalled()
  });
