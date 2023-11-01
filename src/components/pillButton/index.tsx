import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { FC } from "react";
import clsx from "clsx";

import "./style.css";

type Icon = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
  muiName: string;
};
export type Props = {
  IconLeft: Icon;
  IconRight: Icon;
  activeButton: "left" | "right";
  actionLeft: () => void;
  actionRight: () => void;
};

const Pillbutton: FC<Props> = ({
  IconLeft,
  IconRight,
  activeButton,
  actionLeft,
  actionRight,
}) => {
  return (
    <div className="pillButton_pill">
      <div
        data-testid="icon-left"
        onClick={() => actionLeft()}
        className={clsx("pillButton_button", "pillButton_leftButton", {
          pillButton_primary: activeButton === "left",
          pillButton_secondary: activeButton === "right",
        })}
      >
        <IconLeft color="inherit" />
      </div>
      <div
        data-testid="icon-right"
        onClick={() => actionRight()}
        className={clsx("pillButton_button", "pillButton_rightButton", {
          pillButton_primary: activeButton === "right",
          pillButton_secondary: activeButton === "left",
        })}
      >
        <IconRight color="inherit" />
      </div>
    </div>
  );
};

export default Pillbutton;
