class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    console.log("3.-----from CrudRepository");
    const response = await this.model.create(data);
    return response;
  }

  async destroy(id) {
    const response = await this.model.destroy({
      where: {
        id: id,
      },
    });
    return response;
  }

  async get(id) {
    const response = await this.model.findByPk(id);
    return response;
  }

  async getAll() {
    try {
      const response = await this.model.findAll();
      console.log("-----------getAll----------");
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  async update(data, id) {
    const response = await this.model.update(data, { where: { id: id } });
    return response;
  }
}

module.exports = CrudRepository;
