export class CreateCourtScheduleDTO {
  constructor({
    court_id,
    opening_time,
    closing_time,
    game_duration,
    price_brl,
    price_uyu,
  }) {
    this.court_id = court_id;
    this.opening_time = opening_time;
    this.closing_time = closing_time;
    this.game_duration = game_duration;
    this.price_brl = price_brl;
    this.price_uyu = price_uyu;
  }
}

export class UpdateCourtScheduleDTO {
  constructor({
    opening_time,
    closing_time,
    game_duration,
    price_brl,
    price_uyu,
  }) {
    this.opening_time = opening_time;
    this.closing_time = closing_time;
    this.game_duration = game_duration;
    this.price_brl = price_brl;
    this.price_uyu = price_uyu;
  }
}
