import axios from "axios";
import SWITCHES from "./switches-variables";

const BASE_URL =
  "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=";

class UserService {
  constructor() {
    // this.declination = this.declination.bind();
  }

  getPersonFromDepartment = (value) => {
    return axios.get(`${BASE_URL}${value}`);
  };

  getDescription = (department) => {
    var description = SWITCHES.items.find(
      (item) => item.department === department
    ).desc;
    return description;
  };

  // getAge = (date) => {
  //   const birthday = new Date(date).getFullYear();
  //   const now = new Date().getFullYear();
  //   var age = now - birthday;
  //   const title = this.declination(age, [" год", " года", " лет"]);
  //   age = age + title;
  //   return age;
  // };

  // declination = (number, titles) => {
  //   const cases = [2, 0, 1, 1, 1, 2];
  //   return titles[
  //     number % 100 > 4 && number % 100 < 20
  //       ? 2
  //       : cases[number % 10 < 5 ? number % 10 : 5]
  //   ];
  // };

  // numberValueReduced = (phone) => {
  //   var phone = phone.substr(2, phone.length - 1);
  //   return phone.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/g, "+7 ($1) $2 $3 $4");
  // };
}

export default new UserService();
