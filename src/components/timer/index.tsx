import { useCallback, useEffect, useState, useRef, FC } from "react";

import PlayIcon from "@mui/icons-material/PlayArrowOutlined";
import AddIcon from "@mui/icons-material/AddOutlined";
import StopIcon from "@mui/icons-material/StopOutlined";

import Input from "../input";

import RoundButton from "../roundButton";
import Display from "../display";
import TimeSelector from "../timeSelector";
import Pillbutton from "../pillButton";

import "./Timer.css";

type Props = {
  onAddEntry: (start: Date, end: Date) => void;
};

const Timer: FC<Props> = ({ onAddEntry }) => {
  const [timer, setTimer] = useState<number>(0);
  const [startTime, setStartTime] = useState<Date>(new Date());
  const [endTime, setEndTime] = useState<Date>(new Date());
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [timeError, setTimeError] = useState<boolean>(false);

  const interval = useRef<NodeJS.Timer | null>(null);

  const [activeButton, setActiveButton] = useState<"left" | "right">("left");

  const handlePlay = useCallback(() => {
    if (activeButton === "right") {
      setActiveButton("left");
    } else {
      setIsRunning(true);
    }
  }, [activeButton, setIsRunning, setActiveButton]);

  const handleAdd = useCallback(() => {
    if (activeButton === "left") {
      setActiveButton("right");
    } else {
      if (!timeError) {
        const startDate = new Date(startTime);
        const endDate = new Date(endTime);
        alert(
          `Start date: ${startDate.toDateString()} ${startDate
            .toTimeString()
            .slice(0, 5)} - End date: ${endDate.toDateString()} ${endDate
            .toTimeString()
            .slice(0, 5)}`
        );
        onAddEntry(startTime, endTime);
      }
    }
  }, [activeButton, setActiveButton, startTime, endTime, timeError]);

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleOnChangeStart = useCallback((date: Date) => {
    setStartTime(date);
  }, []);

  const handleOnChangeEnd = useCallback((date: Date) => {
    setEndTime(date);
  }, []);

  const handleError = useCallback((hasError: boolean) => {
    setTimeError(hasError);
  }, []);

  useEffect(() => {
    if (isRunning) {
      interval.current = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 10);
      }, 10);
    } else {
      if (interval.current) {
        clearInterval(interval.current);
      }
    }

    return () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  }, [isRunning, timer]);

  return (
    <div className="timerContainer liner">
      <Input />
      <div>
        {activeButton === "left" ? (
          <Display timer={timer} />
        ) : (
          <TimeSelector
            startTime={startTime}
            endTime={endTime}
            onChangeStart={handleOnChangeStart}
            onChangeEnd={handleOnChangeEnd}
            onErrorChange={(hasError) => handleError(hasError)}
            timeError={timeError}
          />
        )}
      </div>
      <div className="buttonsContainer">
        {isRunning ? (
          <RoundButton
            handleClick={handleStop}
            Icon={StopIcon}
            bgColor="error"
          />
        ) : (
          <Pillbutton
            actionLeft={handlePlay}
            actionRight={handleAdd}
            IconLeft={PlayIcon}
            IconRight={AddIcon}
            activeButton={activeButton}
          />
        )}
      </div>
    </div>
  );
};

export default Timer;
