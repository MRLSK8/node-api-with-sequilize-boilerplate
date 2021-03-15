class UserController {
  async store(req, res) {
    res.json({ message: 'Success' });
  }
}

export default new UserController();
