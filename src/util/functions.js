export const getDateNow = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Augt",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dateObject = new Date();
  let month = months[dateObject.getMonth()];

  return `${dateObject.getDate()} ${month} ${dateObject.getFullYear()}`;
};
