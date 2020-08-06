

require('dotenv-safe').config();

const { createServer } = require('./server');

const main = async () => {
  // Inicializando servidor
  const server = await createServer();
  console.log('>> Server created');
  await server.start();
  console.log('>> Server running: ', server.info.uri);
  process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
  });
};

main();
