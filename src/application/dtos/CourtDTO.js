export class CreateCourtDTO {
  constructor({ name, establishment_id, sport, photo }) {
    this.name = name;
    this.establishment_id = establishment_id;
    this.sport = sport;
    this.photo = photo;
  }
}

export class UpdateCourtDTO {
  constructor({ name, sport, photo }) {
    this.name = name;
    this.sport = sport;
    this.photo = photo;
  }
}
