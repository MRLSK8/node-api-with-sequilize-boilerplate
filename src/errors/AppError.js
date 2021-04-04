class AppError {
  constructor(message = '', data = null, statusCode = 400) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}

export default AppError;
