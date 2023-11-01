import { ChangeEvent, FC, useCallback, useEffect, useMemo } from "react";
import "./style.css";
import { ArrowForward } from "@mui/icons-material";
import { dateToString, stringToDate } from "../../helpers/timer";
import clsx from "clsx";

export type Props = {
  startTime?: Date;
  endTime?: Date;
  timeError?: boolean;
  onChangeStart: (date: Date) => void;
  onChangeEnd: (date: Date) => void;
  onErrorChange: (hasError: boolean) => void;
};

const TimeSelector: FC<Props> = ({
  startTime,
  endTime,
  timeError,
  onChangeStart,
  onChangeEnd,
  onErrorChange,
}) => {
  const startTimeString = useMemo(
    () => dateToString(startTime || new Date()),
    [startTime]
  );
  const endTimeString = useMemo(
    () => dateToString(endTime || new Date()),
    [endTime]
  );

  const handleStartChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChangeStart(stringToDate(value));
  }, []);

  const handleEndChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChangeEnd(stringToDate(value));
  }, []);

  useEffect(() => {
    if (endTime && startTime && startTime > endTime) {
      onErrorChange(true);
    } else {
      onErrorChange(false);
    }
  }, [startTime, endTime]);

  return (
    <div className="timeSelector_container">
      <input
        data-testid="input-left"
        value={startTimeString}
        type="datetime-local"
        onChange={handleStartChange}
        className={clsx({ timeSelector_error: timeError })}
      />
      <ArrowForward htmlColor="#6666" />
      <input
        data-testid="input-right"
        value={endTimeString}
        type="datetime-local"
        onChange={handleEndChange}
        className={clsx({ timeSelector_error: timeError })}
      />
    </div>
  );
};

export default TimeSelector;
