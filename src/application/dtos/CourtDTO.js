export class CreateCourtDTO {
  constructor({ name, establishment_id, sport_id }) {
    this.name = name;
    this.establishment_id = establishment_id;
    this.sport_id = sport_id;
  }
}

export class UpdateCourtDTO {
  constructor({ name, sport_id }) {
    this.name = name;
    this.sport_id = sport_id;
  }
}
