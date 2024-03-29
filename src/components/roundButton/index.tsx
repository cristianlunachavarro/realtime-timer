import { FC } from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

import clsx from "clsx";

import "./style.css";

type TIcon = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
muiName: string;
};

type Props = {
  handleClick: () => void;
  Icon: TIcon;
  bgColor: "error" | "primary";
};

const RoundButton: FC<Props> = ({ handleClick, Icon, bgColor = "primary" }) => {
  return (
    <div
      data-testid="round-button"
      className={clsx("round_button", {
        round_error: bgColor === "error",
        round_primary: bgColor === "primary",
      })}
      onClick={() => handleClick()}
    >
      <Icon />
    </div>
  );
};
export default RoundButton;
