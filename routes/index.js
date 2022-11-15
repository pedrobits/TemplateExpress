import cors from "cors";
import "dotenv/config";

const routes = (app) => {
  app.use((_req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header(
      "Access-Control-Allow-Headers",
      "X-PINGOTHER, Content-Type, Authorization"
    );
    app.use(cors());
    next();
  });

  app.get('/', function(req, res) {
    return res.status(200).send('PaginaInicial')
  })
};



export default routes;
