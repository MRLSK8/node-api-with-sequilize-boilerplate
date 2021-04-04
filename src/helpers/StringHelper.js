class StringHelper {
  random (length = 16) {
    const xl = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let result = '';

    for (let i = 0; i < length; i++) {
      result += xl.charAt(Math.floor(Math.random() * xl.length));
    }

    return result;
  }
}

export default new StringHelper();
