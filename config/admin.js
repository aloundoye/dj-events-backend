module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'eebe909f35f6d7f2e00c8955b97d1764'),
  },
});
