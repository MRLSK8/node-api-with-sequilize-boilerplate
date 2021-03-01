class AppError {
  public statusCode: number
  public message: string
  public data: any;

  constructor(message = '', data = null, statusCode = 400) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}

export default AppError;
