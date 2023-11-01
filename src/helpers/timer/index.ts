import dayjs from "dayjs";

export const formatTime = (milliseconds: number) => {
  const hours = Math.floor(milliseconds / 3600000);
  const minutes = Math.floor((milliseconds % 3600000) / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);

  return `${padWithZeroes(hours)}:${padWithZeroes(minutes)}:${padWithZeroes(
    seconds
  )}`;
};

const padWithZeroes = (number: number, width: number = 2) => {
  const numberString = number.toString();
  return numberString.length >= width
    ? numberString
    : new Array(width - numberString.length + 1).join("0") + numberString;
};

export const dateToString = (date: Date): string => {
  return dayjs(date).format("YYYY-MM-DDTHH:mm");
};

export const stringToDate = (str: string): Date => {
  return dayjs(str).toDate();
};
