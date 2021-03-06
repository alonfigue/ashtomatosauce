# Ash Tomato Sauce: A Manga/Comic Reader App
Aplicación enfocada para clientes con dispositivos móviles, desarrollada usando React Native. 

Es una aplicación que le permite a sus usuarios leer manga o cómic.

Proyecto No. 2 - Programación de Dispositivos Móviles, Universidad Rafael Urdaneta, período 2022-A.

Desarrolladores: Figueroa Alonso, C.I. V-28536894 y Muchacho Ricardo, C.I. V-27849052.

---

## **Descripción del proyecto:**


### *1. LOGO*:
![imagen](https://user-images.githubusercontent.com/65868683/163649311-67c875b5-a5ef-4427-9971-7fc2336c99c3.png)


### *2. Funciones*:
#### 2.1. General
- Opción de usar la app sin registrarse.
- Registro de usuario.
- Inicio de sesión y cierre de sesión.
 
#### 2.2. Visualización 
- Dentro del visor de imágenes, el usuario puede elegir la dirección de lectura:
	- Opciones: de arriba hacia abajo, de abajo hacia arriba, de izquierda a derecha, o de derecha a izquierda. (pendiente por implementarse)
                    
#### 2.3. Capacidades de un usuario de la aplicación

- Un *Usuario de Cualquier Rol* puede:
	- Leer los capítulos.

- Un *Usuario No Registrado* puede:
	- Usar la aplicación, teniendo SOLO la posibilidad de seguir las series.
	- Hacer seguimiento a una serie, y, al hacer eso, debe recibir una notificación push cada vez que se suba un capítulo nuevo. (pendiente por implementarse)

- Un *Usuario Registrado (Administrador y No Administrador)* puede:
	- Subir series con sus respectivos capítulos.
	- Subir varios archivos a la vez para publicar el episodio. (pendiente por implementarse)
	- Subir, editar o eliminar series y capítulos.
	- Hacer seguimiento a una serie, y, al hacer eso, debe recibir una notificación push cada vez que se suba un capítulo nuevo.
	- Suscribirse a una serie, y, cuando el mismo salga de la aplicación y vuelva a entrar, debe estar posicionado en la página del capítulo en donde quedó.
	- Contar con la opción de compartir con sus redes sociales su avance.
	- Hacer comentarios y responder a comentarios de otros usuarios (dentro de los propios capítulos).
	- Editar o eliminar sus propios comentarios.

- Un *Usuario Registrado (Administrador)* puede:
	- Aplicar la acción que le plazca con respecto a series y capítulos que no son suyos (subir, editar, eliminar).
	- Eliminar comentarios de otros usuarios.
	

### *3. Herramientas ulitizadas para su desarrollo*:
 - IDE (Entorno de Desarrollo Integrado): *Visual Studio Code*.
 - DVCS (Control de Versiones Distribuido): *Git* y la plataforma de *GitHub*.
 - Frontend: *React Native*.
 - Backend (API): *Node.js* y *Express.js* framework.
 - DBMS (Sistema de Gestión de Base de Datos): *MongoDB*.
 - REST Client: *Postman API Platform*.
 - PaaS (Plataforma como servicio): *Heroku*.


### *4. Instrucciones para usar la aplicación*:
 El servidor se encuentra en la nube, por lo que  no es necesario hacer más que correr el "frontend".

 Es recomendable hacer un clon local de este repositorio, usando Git, introduciendo en Git Bash lo siguiente: `https://github.com/alonfigue/ashtomatosauce.git`

 1. Desde la consola, situarse en la carpeta "native_app", usar el comando `npm install --global expo-cli` para instalar la Interfaz de Línea de Comandos (CLI) de Expo globalmente.
 2. Luego, desde la misma carpeta, usar el comando `npm i` para instalar las dependencias (pero antes, asegurarse de tener instalado Node.js).
 3. Por último, para correr la aplicación, en la misma carpeta, desde la consola, correr el comando `npm start`.


### *5. Además...*
Puedes revisar el [repositorio que contiene el código del backend.](https://github.com/RicardoMuchacho/ashtomatosauce-api)
