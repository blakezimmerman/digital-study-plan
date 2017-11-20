const express = require('express');
const authRoutes = require('./auth.routes');
const usersRoutes = require('./users.routes');

module.exports = (app) => {
  app.use('/api/auth', authRoutes);
  app.use('/api/users', usersRoutes);
}
