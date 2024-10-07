const User = require("./model");

exports.getUsers = (query) => {
  //   -> add pagination
  const { page = 1, limit = 10 } = query;
  const offset = (page - 1) * limit;

  // -> filter by gender
  const filter = {};
  const { gender } = query;
  if (gender) filter.gender = gender;

  // -> implement other business logics if any

  return User.findAll({
    where: filter,
    limit,
    offset,
    order: [["name", "ASC"]],
  });
};

exports.createUser = (userData) => {
  // -> implement business logics if any
  return User.create(userData);
};

exports.updateUser = async (data, filter) => {
  const result = await User.update(data, filter);
  return result;
};

// < define other services like update, delete, etc >
