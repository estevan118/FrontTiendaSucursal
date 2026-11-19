# 🛒 FrontTiendaSucursal

Frontend de un **sistema de gestión para tiendas con sucursales**, construido con **Angular 13 + TypeScript**. Consume la API REST de [-backTiendaSucursal](https://github.com/estevan118/-backTiendaSucursal).

![Angular](https://img.shields.io/badge/Angular_13-DD0031?style=flat-square&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-B7178C?style=flat-square&logo=reactivex&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)

## ✨ Funcionalidades

- 🔐 Login
- 👥 Gestión y listado de **clientes**
- 🚚 Gestión de **proveedores**
- 📦 Gestión de **productos**
- 💰 Registro y listado de **ventas**
- 📊 **Reportes** y **consolidado** por sucursal
- 🔔 Notificaciones con `ngx-toastr`

## 🗂️ Estructura

```
lagenerica/
└── src/app/
    ├── login/          # Autenticación
    ├── menu/           # Navegación principal
    ├── cliente/        # CRUD de clientes
    ├── listadocliente/ # Listado de clientes
    ├── proveedores/    # CRUD de proveedores
    ├── products/       # Productos
    ├── sales/          # Ventas
    ├── listadoventas/  # Listado de ventas
    ├── reportes/       # Reportes
    └── consolidado/    # Consolidado por sucursal
```

## 🚀 Cómo ejecutarlo

```bash
cd lagenerica
npm install
npx ng serve
```

Abre `http://localhost:4200`. Necesitas el backend corriendo ([-backTiendaSucursal](https://github.com/estevan118/-backTiendaSucursal)).

## 👤 Autor

**Estevan Hernandez Capera** · [@estevan118](https://github.com/estevan118)
