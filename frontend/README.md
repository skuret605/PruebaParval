# Portfolio Simulator (Frontend)

Aplicación React + Vite para simular y gestionar inversiones en portafolios. Permite visualizar, agregar y listar inversiones de manera interactiva.

## Características

- Visualización de inversiones en una tabla con estilos modernos (TailwindCSS).
- Formulario para agregar nuevas inversiones con validaciones.
- Estado reactivo para la gestión de inversiones.
- Configuración ESLint y Vite optimizada para React 19.
- Estructura modular con componentes reutilizables.

## Estructura de Carpetas

```
frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── PortfolioInvestments.js
│   ├── index.css
│   ├── main.jsx
│   ├── assets/
│   │   └── react.svg
│   └── components/
│       ├── PortfolioForm.jsx
│       └── PortfolioTable.jsx
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## Instalación

```sh
npm install
```

## Scripts

- `npm run dev` — Inicia el servidor de desarrollo.
- `npm run build` — Compila la aplicación para producción.
- `npm run preview` — Previsualiza la build de producción.
- `npm run lint` — Ejecuta ESLint.

## Uso

1. Ejecuta `npm run dev` y abre [http://localhost:5173](http://localhost:5173) en tu navegador.
2. Agrega inversiones usando el formulario.
3. Visualiza el listado actualizado en la tabla.

## Componentes Principales

- [`App`](src/App.jsx): Componente raíz, gestiona el estado global de inversiones.
- [`PortfolioForm`](src/components/PortfolioForm.jsx): Formulario para agregar inversiones con validaciones.
- [`PortfolioTable`](src/components/PortfolioTable.jsx): Tabla para mostrar las inversiones.
- [`PortfolioInvestments`](src/PortfolioInvestments.js): Datos iniciales de ejemplo.

## Estilos

- Utiliza [TailwindCSS](https://tailwindcss.com/) para estilos rápidos y responsivos.

## Notas

- Los datos de inversiones se almacenan en memoria (no persistente).
