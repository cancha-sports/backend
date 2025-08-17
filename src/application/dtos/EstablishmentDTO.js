export default class EstablishmentDTO {
  constructor({ name, latitude, longitude, owner_id }) {
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
    this.owner_id = owner_id;
  }
}
