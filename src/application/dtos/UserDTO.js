export class CreateUserDTO {
  constructor({ name, email, phone, password, birth_date, role_id, photo }) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.birth_date = birth_date;
    this.role_id = role_id;
    this.photo = photo;
  }
}

export class UpdateUserDTO {
  constructor({ name, password, photo }) {
    this.name = name;
    this.password = password;
    this.photo = photo;
  }
}
