# investment-api

API REST para la gestión de inversiones. Permite autenticación de usuarios, consultar, agregar y eliminar inversiones, con control de roles.

## Requisitos

- Node.js >= 18
- npm

## Instalación

```sh
npm install
```

## Scripts

- `npm start` — Inicia el servidor en modo producción.
- `npm run dev` — Inicia el servidor con nodemon para desarrollo.

## Endpoints

### Autenticación

#### `POST /login`

Autentica usuario y retorna un token JWT.

**Body:**

```json
{
  "username": "admin",
  "password": "admin"
}
```

**Respuesta:**

```json
{
  "token": "<jwt_token>"
}
```

### Inversiones

> Todos los endpoints requieren el header `Authorization` con el token JWT.

#### `GET /investments/getallinvestments`

Devuelve todas las inversiones.

#### `POST /investments/addinvestment`

Agrega una inversión (solo rol `admin`).

**Body:**

```json
{
  "cliente": "Juan",
  "activo": "Acciones",
  "monto": 10000,
  "tipo": "Compra",
  "fecha": "2025-07-17",
  "rentabilidad": 0.12
}
```

#### `DELETE /investments/deleteinvestment/:id`

Elimina una inversión por id (solo rol `admin`).

## Estructura

```
investment-api/
├── controllers/
│   └── investmentApiController.js
├── data/
│   └── investmentData.js
├── middleware/
│   ├── authenticationMD.js
│   └── userRole.js
├── routes/
│   ├── authentication.js
│   └── investmensRoutes.js
├── index.js
├── package.json
```

## Usuarios de ejemplo

```js
[
  { username: "admin", password: "admin", role: "admin" },
  { username: "analyst", password: "analyst", role: "analyst" },
];
```

## Notas

- El token debe enviarse en el header `Authorization`.
- Los datos de inversiones se almacenan en memoria (no persistente).
- Solo el usuario con rol `admin` puede agregar o eliminar inversiones.
