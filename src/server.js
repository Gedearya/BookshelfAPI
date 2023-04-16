const Hapi = require("@hapi/hapi");
const routes = require("./routes");

// Kriteria 1 : Aplikasi menggunakan port 9000
const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server aktif, berjalan pada ${server.info.uri}`);
};

init();
