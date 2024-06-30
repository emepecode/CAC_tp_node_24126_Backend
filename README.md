# Grupo 5 - COMISION 24126 Piclu Julieta Javier Alvaredo Marisol Pascua Elvira Maria Maggiolo

Nuestro proyecto presenta dos CRUD: uno para el ingreso o registro de usuarios y otro para administrar los paseos ofrecidos por la veterinaria.

1. CRUD USUARIOS
API Endpoints
Descripción de los endpoints disponibles en la API:

POST /login-form : Valida datos ingresados (nombre de usuario/mail y contraseña) por el usuario para el inicio de sesión.
POST /registro-form :  Crea el registro de un nuevo usuario, las claves se guardan encriptadas en la base de datos. (*)

(*) El frontend del sitio está integrado (sección "LOG IN") con el backend a través de métodos POST para las operaciones de login y registro de usuarios.

GET /registro-form : Muestra todos los registros realizados por los usuarios.
GET /registro-form/:id : Muestra un registro de un usuario según su ID.
PUT /registro-form/:id : Actualiza un registro de un usuario existente según su ID.
DELETE /registro-form/:id : Elimina un registro de un usuario según su ID.


ACLARACIÓN: Desde el FRONT, una vez realizado el registro o iniciada la sesión, se ingresa automáticamente al administrador de paseos (CRUD detallado a continuación).

2. CRUD PASEADORES
API Endpoints
Descripción de los endpoints disponibles en la API:

GET /paseadores : Muestra la lista de todos los paseadores.
GET /paseadores/:id : Muestra un paseador según su ID.
POST /paseadores: Crea un nuevo paseador.
PUT /paseadores/:id : Actualiza un paseador existente según su ID.
DELETE /paseadores/:id : Elimina un paseador según su ID.

Este segundo CRUD está integrado con el frontend del sitio, para las cinco operaciones ya detalladas, y sumamos una tabla dinámica para que se logre visualizar los datos y los cambios aplicados a través de los métodos HTTP: POST, GET, PUT Y DELETE.




Conectarse a servidor alwaysdata desde consola windows

      USUARIO     ssh+DIRECCION SERVER       
ssh javi-alvaredo@ssh-javi-alvaredo.alwaysdata.net