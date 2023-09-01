# PC Gamers Paradise

![Proyecto Final ReactJS](./src/assets/PC%20Gamers%20Paradise.gif)

## Descripción

PC Gamers Paradise es una tienda en línea de productos de tecnología, con un enfoque especial en computadoras para gamers. Este proyecto fue desarrollado como parte del curso de ReactJS en CoderHouse.

## Autor

- **Nombre:** Luis Jaimes Omaña
- **Correo electrónico:** ferbluis143@gmail.com
- **LinkedIn:** [Luis Jaimes Omaña](https://www.linkedin.com/in/elejaimes/)

## Tecnologías Utilizadas

- ReactJS
- Vite
- Bootstrap-react
- CSS
- icons-bootstrap
- Firebase
- SweetAlert2

## Estructura de Archivos

- `src/`: Contiene todos los archivos de código fuente de la aplicación.
  - `components/`: Carpeta que contiene los componentes de React.
  - `App.jsx`: Archivo principal del componente App.
  - `main.jsx`: Archivo JavaScript principal que inicializa la aplicación.
  - `index.css`: Archivo CSS para estilos personalizados.
  - `assets/`: Carpeta para recursos como imágenes y otros archivos.
- `index.html`: Archivo HTML principal.
- `node_modules/`: Carpeta que contiene las dependencias de Node.js.
- `public/`: Carpeta que contiene archivos públicos como el favicon y otros recursos.

## Uso de Librerías

- **Firebase:** Firebase se utiliza para gestionar la base de datos de productos y almacenar las compras. Cada orden generada recibe un ID único.

- **SweetAlert2:** SweetAlert2 se utiliza para mostrar mensajes ante errores y eventos importantes, como agregar productos al carrito de compras. Estos mensajes mejoran la experiencia del usuario al proporcionar retroalimentación visual y mensajes claros.

## Rutas de Navegación

Aquí están las rutas de navegación de tu aplicación:

- `/`: Página de inicio.
- `/cart`: Página del carrito de compras.
- `/catalogue`: Página de catálogo.
- `/category/:category`: Página de catálogo filtrado por categoría.
- `/item/:id`: Página de detalles del producto.

## Iniciar la Aplicación

Para iniciar la aplicación, puedes ejecutar el siguiente comando:

```bash
npm run dev
```
