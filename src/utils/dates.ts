export const parseFullTimeDate = (fullTime: string) => {
  const [hour, minute] = fullTime.split(':');

  const currentHour = Number(hour);
  const currentMinute = Number(minute);

  const now = new Date();
  const getCurrentHour = new Date(now.getDate(), now.getMonth(), now.getFullYear(), currentHour, currentMinute);

  return getCurrentHour;
};
