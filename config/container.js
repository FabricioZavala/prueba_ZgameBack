//Configurar nuestro contenedor de injección de depencia
const { createContainer, asClass, asValue, asFunction } = require("awilix");

//Config
const config = require(".");

//Routes
const Routes = require("../routes");

//Services
const {
    ExampleService,
    UserService,
    SportEventService,
    BetService
} = require("../services");
//Controllers
const {
    ExampleController,
    UserController,
    SportEventController,
    BetController
} = require("../controllers");

//Startup
const { Database, Server } = require("../startup");

//Routes

const {
    ExampleRoutes,
    UserRoutes,
    SportEventRoutes,
    BetRoutes
} = require("../routes/api/index");

//Models
const {
    Example,
    User,
    SportEvent,
    Bet
} = require("../models");

const { protect } = require("../middleware/authMiddleware");
const AuthUtils = require("../utils/auth");
const container = createContainer();
container
    .register({
        //Configuración principal
        router: asFunction(Routes).singleton(),
        config: asValue(config),
        AuthUtils: asClass(AuthUtils).singleton(),
        Database: asClass(Database).singleton(),
        Server: asClass(Server).singleton(),
    })
    .register({
        //Configuración de los servicios
        ExampleService: asClass(ExampleService).singleton(),
        UserService: asClass(UserService).singleton(),
        SportEventService: asClass(SportEventService).singleton(),
        BetService: asClass(BetService).singleton(),
    })
    .register({
        //Configuración de los controladores
        ExampleController: asClass(ExampleController.bind(ExampleController)).singleton(),
        UserController: asClass(UserController.bind(UserController)).singleton(),
        SportEventController: asClass(SportEventController.bind(SportEventController)).singleton(),
        BetController: asClass(BetController.bind(BetController)).singleton(),
    })
    .register({
        //Configuración de rutas
        ExampleRoutes: asFunction(ExampleRoutes).singleton(),
        UserRoutes: asFunction(UserRoutes).singleton(),
        SportEventRoutes: asFunction(SportEventRoutes).singleton(),
        BetRoutes: asFunction(BetRoutes).singleton(),
    })
    .register({
        //Configuración de modelos
        Example: asValue(Example),
        User: asValue(User),
        SportEvent: asValue(SportEvent),
        Bet: asValue(Bet),

    })
    .register({
        //middlewares
        AuthMiddleware: asFunction(protect).singleton(),
    });

module.exports = container;
