export class LoginDTO {
  constructor({ email, password }) {
    this.email = email;
    this.password = password;
  }
}

export class RegisterDTO {
  constructor({ name, email, phone, password, birth_date, photo, role_id }) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.birth_date = birth_date;
    this.photo = photo;
    this.role_id = role_id;
  }
}

export class AuthResponseDTO {
  constructor({ user, token }) {
    this.user = user;
    this.token = token;
  }
}
