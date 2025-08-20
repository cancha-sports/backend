export class CreateEstablishmentDTO {
  constructor({ name, latitude, longitude, owner_id, photo }) {
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
    this.owner_id = owner_id;
    this.photo = photo;
  }
}

export class UpdateEstablishmentDTO {
  constructor({ name, latitude, longitude, photo }) {
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
    this.photo = photo;
  }
}
