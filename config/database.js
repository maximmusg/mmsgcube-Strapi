module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cdqprio2i3mp6f01a240-a.ohio-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'mmsgcube_gpdi'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'Ad1n6SeFD9wxJJvOyz0j552iIueJZx6Z'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
