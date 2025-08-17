export default class UserDTO {
  constructor({ name, email, phone, password, birth_date, role_id }) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.birth_date = birth_date;
    this.role_id = role_id;
  }
}
