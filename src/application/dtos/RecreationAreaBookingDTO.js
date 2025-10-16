export class CreateRecreationAreaBookingDTO {
  constructor({ recreation_area_id, user_id, start_time, end_time, status }) {
    this.recreation_area_id = recreation_area_id;
    this.user_id = user_id;
    this.start_time = start_time;
    this.end_time = end_time;
    this.status = status;
  }
}

export class UpdateRecreationAreaBookingDTO {
  constructor({ start_time, end_time, status }) {
    this.start_time = start_time;
    this.end_time = end_time;
    this.status = status;
  }
}
