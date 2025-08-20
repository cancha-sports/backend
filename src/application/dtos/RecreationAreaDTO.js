export class CreateRecreationAreaDTO {
  constructor({ name, establishment_id, recreation_area_type_id, photo }) {
    this.name = name;
    this.establishment_id = establishment_id;
    this.recreation_area_type_id = recreation_area_type_id;
    this.photo = photo;
  }
}

export class UpdateRecreationAreaDTO {
  constructor({ name, recreation_area_type_id, photo }) {
    this.name = name;
    this.recreation_area_type_id = recreation_area_type_id;
    this.photo = photo;
  }
}
