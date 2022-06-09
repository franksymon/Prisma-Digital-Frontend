Proyecto Realizado con React

# create-react-app

Se utiliza la libreria Axios para los metodos HTTP

Tenemos un estado gobal de Redux "userName"
EL cual permite capturar el nombre del usuario logeado en sesion
Este parametro se utiliza en los distintos endpoints para realizar las peticiones de los bills que le pertenece al usuario.

La caperta Pages, muestra las vistas totales de la app:

Page -> Home renderiza el componente Login, el cual inicia la seción del usuario
atravez del un metodo POST se envia un obj json

Page -> Bills renderiza los la coleccion de bills del usuario es seción,
manejamos un estado "isOpen" para ejecutar el modal, este stado se pasa por
props alos componentes "Register y UserBills".
Hay una funcion GET la cual obtiene los bills del usuario, se pasa por prosp a
los componentes "Register y UserBills", para actualizar los metodos "DELETE y POST",
renderizando la vista y actualizado la colencion de bills.

Se utilizo la libreria react-hook-form para hacer los realizar los input del modal,
el cual muestra el bills selecionado y permiter enviar un obj json
a la api creando un nuevo bills.

Para el login de usuario se utilizo el metodo de input controlados

Se utilizo el Metodo protecte-routes para validar el token del usuario
Nota:"crea token para usuarios no validos, muestra un error de cors desde el server"

Link de accseso : https://frank-urbina-test-prisma-digital.netlify.app/
