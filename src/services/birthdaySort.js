export const isBirthdayThisYear = (date1, date2) => {
  return calculatingDifference(date1, date2) > 0;
};

export const calculatingDifference = (date1, date2) => {
  return (date1 - date2) / (24 * 60 * 60 * 1000);
};

export const birthdaySort = (a, b) => {
  var now = new Date();
  var date1 = new Date(a.birthday).setFullYear(now.getFullYear());
  var date2 = new Date(b.birthday).setFullYear(now.getFullYear());
  var diff1 = calculatingDifference(date1, now);
  var diff2 = calculatingDifference(date2, now);
  diff1 = diff1 > 0 ? diff1 : 365 + diff1;
  diff2 = diff2 > 0 ? diff2 : 365 + diff2;
  if (diff1 < diff2) {
    return -1;
  }
  if (diff1 > diff2) {
    return 1;
  }
  return 0;
};
