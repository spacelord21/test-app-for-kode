export const alphabeticalSort = (a, b) => {
  var nameA = a.firstName.toLowerCase();
  var nameB = b.firstName.toLowerCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
};
