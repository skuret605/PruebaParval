# Prueba Técnica Parval

Este repositorio contiene dos proyectos:

## 🖥️ Frontend (React)
Ubicación: `./frontend`

- SPA que simula un portafolio de inversiones
- TailwindCSS
- Estado con `useState`
- Link Vercel: https://portfolio-investmens.vercel.app/

## 🔐 Backend (Node.js)
Ubicación: `./backend`

- API RESTful con autenticación JWT
- Control de acceso por roles (`admin` y `analyst`)
- GetAllInvestments --> Ver todas la inverciones
  AddInvestment --> Agregar nueva inversión (SOLO ADMIN)
  DeleteInvestment --> Eliminar inversión (SOLO ADMIN)

## 🚀 Cómo ejecutar

### Frontend
```bash
cd frontend
npm install
npm start
```
### Backend
```bash
cd backend
npm install
npm run start --> correr proyecto normal
npm run dev --> correr proyecto con autorefresh de los cambios
