module.exports = {
  users: {
    admin: {password: 'password', scopes: 'fruits:all fruits:read fruits:write fruits:add fruits:remove'.split(' ')}
  },
  jwtSecret: '08098grrgaorugh',
  port: process.env.PORT || 3000,
  enableAuth: true
}
