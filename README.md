Jeremías Alessandro Artiga Pérez

Seccion 01

00171124

TUTORIAL DE COMO USAR LOS ENDPOINTS

Para poder correr el codigo en tu consola pones "node app.js" el cual te dara un servidor local, en el cual puedes poner la direccion del endpoint para probar el codigo.
Con el endpoint /cuentas te listara todas las cuentas que hay.

Con el endpoitn /cuentas/buscar puedes hacer una busqueda mas especifica, puedes buscar con id,client,gender.

Para buscar con id pon /cuentas/buscar?id='numero id' (sin comillas)

para buscar con client pon /cuentas/buscar?client='nombre del cliente' (sin comillas)

para buscar con gender pon /cuentas/buscar?gender='male o female' (sin comillas)

Con el endpoint /cuentas/:id te encontrara el cliente con el id buscado

Para usar el endpoint se pone /cuentas/'numero del id' (sin comillas)

puedes probar tus endpoints en POSTMAN o en el buscador de tu motor de busqueda
