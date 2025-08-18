export class CreateCourtScheduleDTO {
  constructor({ court_id, opening_time, closing_time, game_duration, price }) {
    this.court_id = court_id;
    this.opening_time = opening_time;
    this.closing_time = closing_time;
    this.game_duration = game_duration;
    this.price = price;
  }
}

export class UpdateCourtScheduleDTO {
  constructor({ opening_time, closing_time, game_duration, price }) {
    this.opening_time = opening_time;
    this.closing_time = closing_time;
    this.game_duration = game_duration;
    this.price = price;
  }
}
