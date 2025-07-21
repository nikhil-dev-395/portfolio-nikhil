module.exports = function experienceDuration(startDate, endDate) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const findStartDate = startDate.split(" ");
  let findEndDate = endDate.split(" ");

  if (findEndDate.length < 2) {
    const currentDate = new Date();
    findEndDate = [
      currentDate.getDate().toString(),
      months[currentDate.getMonth()],
      currentDate.getFullYear().toString(),
    ];
  }

  const monthsStart = months.findIndex((e) => e === findStartDate[1]);
  const monthsEnd = months.findIndex((e) => e === findEndDate[1]);

  const startYear = parseInt(findStartDate[2]);
  const endYear = parseInt(findEndDate[2]);

  let totalMonths = (endYear - startYear) * 12 + (monthsEnd - monthsStart);
  const years = Math.floor(totalMonths / 12);
  const monthsRemainder = totalMonths % 12;

  return `${years} year${years !== 1 ? "s" : ""}, ${monthsRemainder} month${
    monthsRemainder !== 1 ? "s" : ""
  }`;
};
