// controllers/users.js
let users = [];

// Create a new user
export const createUser = (req, res, next) => {
  const { username, password } = req.body;
  users.push({ username, password });
  res.status(201).json({ message: 'User created successfully' });
};

// Get all users
export const getAllUsers = (req, res, next) => {
  res.status(200).json(users);
};

// Get user by username
export const getUserByUsername = (req, res, next) => {
  const { username } = req.params;
  const user = users.find(user => user.username === username);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.status(200).json(user);
};

// Update user by username
export const updateUserByUsername = (req, res, next) => {
  const { username } = req.params;
  const { password } = req.body;
  const userIndex = users.findIndex(user => user.username === username);
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  users[userIndex].password = password;
  res.status(200).json({ message: 'User updated successfully' });
};

// Delete user by username
export const deleteUserByUsername = (req, res, next) => {
  const { username } = req.params;
  const userIndex = users.findIndex(user => user.username === username);
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  users.splice(userIndex, 1);
  res.status(200).json({ message: 'User deleted successfully' });
};
