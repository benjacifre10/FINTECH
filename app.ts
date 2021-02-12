import { App } from './src/config/index';

const main = async () => {
    const app = new App(process.env.FINTECH_SERVER_HTTP_PORT);
    await app.listen();
};

main();