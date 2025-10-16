export class CreateEstablishmentDTO {
  constructor({ name, latitude, longitude, owner_id, working_days, photo }) {
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
    this.owner_id = owner_id;
    this.working_days = working_days;
    this.photo = photo;
  }
}

export class UpdateEstablishmentDTO {
  constructor({ name, latitude, longitude, working_days, photo }) {
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
    this.working_days = working_days;
    this.photo = photo;
  }
}
