import SWITCHES from "./CONSTANT";

export const getDescription = (department) => {
  var description = SWITCHES.items.find(
    (item) => item.department === department
  ).desc;
  return description;
};

export const getAge = (date) => {
  const birthday = new Date(date).getFullYear();
  const now = new Date().getFullYear();
  var age = now - birthday;
  const title = declination(age, [" год", " года", " лет"]);
  age = age + title;
  return age;
};

export const declination = (number, titles) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};

export const numberValueReduced = (phone) => {
  phone = phone.substr(2, phone.length - 1);
  return phone.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/g, "+7 ($1) $2 $3 $4");
};
