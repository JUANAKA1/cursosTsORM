import app from "./app";
import { AppDataSource } from "./db/connection";
const PORT = 9000;

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("base de datos conectada");

    app.listen(PORT, () => {
      console.log(`Ejecuntandose en el puerto http://localhost:${PORT}`);
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}
main();
