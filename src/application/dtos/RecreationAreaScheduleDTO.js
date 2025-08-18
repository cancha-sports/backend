export class CreateRecreationAreaScheduleDTO {
  constructor({
    recreation_area_id,
    opening_time,
    closing_time,
    usage_duration,
    price,
  }) {
    this.recreation_area_id = recreation_area_id;
    this.opening_time = opening_time;
    this.closing_time = closing_time;
    this.usage_duration = usage_duration;
    this.price = price;
  }
}

export class UpdateRecreationAreaScheduleDTO {
  constructor({ opening_time, closing_time, usage_duration, price }) {
    this.opening_time = opening_time;
    this.closing_time = closing_time;
    this.usage_duration = usage_duration;
    this.price = price;
  }
}
