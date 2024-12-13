Este es un proyecto base para que poder reutilizarlo.
para probarlo:
npm i
y en postman probar esta url en get:
http://localhost:3005/v1/api/example/hello

```
backend
├─ .env
├─ .gitignore
├─ config
│  ├─ container.js
│  └─ index.js
├─ controllers
│  ├─ base.controller.js
│  ├─ example.controller.js
│  └─ index.js
├─ index.js
├─ middleware
│  ├─ authMiddleware.js
│  ├─ errorMiddleware.js
│  └─ index.js
├─ models
│  ├─ example.models.js
│  └─ index.js
├─ package-lock.json
├─ package.json
├─ readme.md
├─ routes
│  ├─ api
│  │  ├─ index.js
│  │  └─ v1.example.js
│  └─ index.js
├─ services
│  ├─ base.service.js
│  ├─ example.service.js
│  └─ index.js
├─ startup
│  ├─ database.js
│  ├─ index.js
│  └─ server.js
└─ utils
   ├─ app-error.js
   ├─ auth.js
   ├─ catch-controller-async.js
   ├─ catch-service-async.js
   ├─ constants.js
   ├─ handleHttpResponse.js
   ├─ handlePagination.js
   ├─ handlePatterns.js
   └─ handleValidator.js

```