import { render, screen } from "@testing-library/react";
import TimeSelector from "./index";

const fn = jest.fn(() => {});

const renderErrorComponent = (
  <TimeSelector
    startTime={new Date()}
    endTime={new Date()}
    timeError={true}
    onChangeStart={fn}
    onChangeEnd={fn}
    onErrorChange={fn}
  />
);

test("Check that makes the render and left input to have error class", () => {
  render(renderErrorComponent);

  const inputLeft = screen.getByTestId("input-left");
  expect(inputLeft).toBeInTheDocument();
  expect(inputLeft).toHaveClass("timeSelector_error");
});

test("Check that makes the render and right to have error class", () => {
  render(renderErrorComponent);

  const inputRight = screen.getByTestId("input-right");
  expect(inputRight).toBeInTheDocument();
  expect(inputRight).toHaveClass("timeSelector_error");
});
