export class CreateCourtDTO {
  constructor({ name, establishment_id, sport_id, photo }) {
    this.name = name;
    this.establishment_id = establishment_id;
    this.sport_id = sport_id;
    this.photo = photo;
  }
}

export class UpdateCourtDTO {
  constructor({ name, sport_id, photo }) {
    this.name = name;
    this.sport_id = sport_id;
    this.photo = photo;
  }
}
