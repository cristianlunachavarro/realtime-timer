import { FC } from "react";
import { formatTime } from "../../helpers/timer";

interface props {
  timer: number;
}

const Display: FC<props> = ({ timer }) => {
  return <div className="display_Container">{formatTime(timer)}</div>;
};

export default Display;
