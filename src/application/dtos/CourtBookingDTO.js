export class CreateCourtBookingDTO {
  constructor({
    court_id,
    user_id,
    start_time,
    end_time,
    amount_paid,
    status,
  }) {
    this.court_id = court_id;
    this.user_id = user_id;
    this.start_time = start_time;
    this.end_time = end_time;
    this.amount_paid = amount_paid;
    this.status = status;
  }
}

export class UpdateCourtBookingDTO {
  constructor({ start_time, end_time, amount_paid, status }) {
    this.start_time = start_time;
    this.end_time = end_time;
    this.amount_paid = amount_paid;
    this.status = status;
  }
}
