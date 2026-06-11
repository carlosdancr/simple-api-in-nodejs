export class ValidationError extends Error {
  constructor({ message }) {
    super(message);

    this.name = "ValidationError";
    this.statusCode = 400;
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status_code: this.statusCode,
    };
  }
}

export class NotFoundError extends Error {
  constructor({ message }) {
    super(message);

    this.name = "NotFoundError";
    this.statusCode = 404;
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status_code: this.statusCode,
    };
  }
}
