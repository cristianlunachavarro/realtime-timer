import { render, screen } from "@testing-library/react";
import PillButton from "./index";
import { AddOutlined, PlayArrowOutlined } from "@mui/icons-material";

const fn = jest.fn(() => {});

const leftActiveButton = (
  <PillButton
    IconLeft={PlayArrowOutlined}
    IconRight={AddOutlined}
    activeButton={"left"}
    actionLeft={fn}
    actionRight={fn}
  />
);

const rightActivebutton = (
  <PillButton
    IconLeft={PlayArrowOutlined}
    IconRight={AddOutlined}
    activeButton={"right"}
    actionLeft={fn}
    actionRight={fn}
  />
);

test("Check that makes the render, has the left button and primary classes and it is clickable", () => {
  render(leftActiveButton);

  const iconLeft = screen.getByTestId("icon-left");
  expect(iconLeft).toBeInTheDocument();
  expect(iconLeft).toHaveClass("pillButton_button");
  expect(iconLeft).toHaveClass("pillButton_leftButton");
  expect(iconLeft).toHaveClass("pillButton_primary");

  iconLeft.click();
  expect(fn).toBeCalled();
});

test("Check that makes the render, has the right button and primary classes and it is clickable", () => {
  render(leftActiveButton);

  const iconRight = screen.getByTestId("icon-right");
  expect(iconRight).toBeInTheDocument();
  expect(iconRight).toHaveClass("pillButton_button");
  expect(iconRight).toHaveClass("pillButton_rightButton");
  expect(iconRight).toHaveClass("pillButton_secondary");

  iconRight.click();
  expect(fn).toBeCalled();
});

test("Check that makes the render and has the secunday class", () => {
  render(rightActivebutton);
  const iconLeft = screen.getByTestId("icon-left");
  expect(iconLeft).toBeInTheDocument();
  expect(iconLeft).toHaveClass("pillButton_secondary");

  iconLeft.click();
  expect(fn).toBeCalled();
});

test("Check that makes the render and has the primary class", () => {
  render(rightActivebutton);
  const iconRight = screen.getByTestId("icon-right");
  expect(iconRight).toBeInTheDocument();
  expect(iconRight).toHaveClass("pillButton_primary");

  iconRight.click();
  expect(fn).toBeCalled();
});
