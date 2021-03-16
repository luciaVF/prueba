

# Getting Started 

`npm i`  for install
Run `npm run start` for a dev server. 
Navigate to `http://localhost:4200/`.


# Notas del desarrollador:
notas:
1.He utilizado la api https://reqres.in/api  para hacer el login y el registro ,aunque también lo he implementado para usar el json que tenemos en la app.
Para usar esta api el único requisito es usar  el email eve.holt@reqres.in(tanto para login , como nombre de usuario, como para registro, metiéndolo en el campo email) y la contraseña que quieras.

He usado concretamente ésta porque nos devuelve el TOKEN , que podemos utilizar para que persista los datos del usuario correctamente, simulando un ejemplo real.
Para usar las cookies en Angular existe esta librería ngx-cookie-service.
Para usar este modulo hay que importarlo en el app.module.ts. Dentro de la sección providers, ya que es un servicio.
se meten  dos nuevos métodos en el servicio de usuarios, uno para guardar token en cookies y otro para recuperarlo simulando un caso real.
De esta forma se guarda el token en el login y el registro this.userService.setToken(data.token)

En un caso real, la api nos devolvería el usuario logeado al pasarle el TOKEN , por ello se crea este servicio  getUserLogged().
por último al hacer logout this.cookies.delete("token").

si nos queremos logear con un usuario de los que tenemos almacenado en el JSON, tenemos que meter uno de los nombres y contraseña la que sea.

2. he inyectado distintas páginas en la principal ships.

3. he puesto en el menú esas páginas tb para que sean independientes, es decir,las puedes consultar por el menú o en la principal.

4 . patron redux-->  no he seguido la estructura como tal del patrón redux, 
porque me cuesta hacer un caso práctico con el ejemplo de ships. 
Como sabemos que se basa en : El flujo de la aplicación es en una única dirección y los datos siempre van a las vistas. 
Cuando se requiere un cambio se lanza una “Acción” que llama al módulo de funciones “Reducers”, donde se cambiará el estado del “Store” y con el nuevo estado se llamará a la “Vista”.
lo que he hecho es  aprovecharme de una característica que tiene este patrón. Los datos que llegan a la vista son copias y cualquier modificación que se haga sobre ellos, no modifican los datos originales que se conservan intactos,
y para ello he utilizado el BehaviorSubject, que permite emitir los valores a los componentes que se suscriban ( relación padre /hijo). por ello , lo que he querido hacer es:
tener un padre, que gestiona los observables y emite ese valor cuando se subscriben.

ejemplo..> podemos borrar las filas de la tabla de vehículos, que aunque vayamos a la página principal, no se perderá lo q se ha borrado, o podemos modificar algunas de las características
de las CARDS mediante un diálogo que he creado(en el componente ship principal), que van a persistir tb  y si viajamos a el componente hijo Ships modificados, esos cambios no se perderán.

5.En cuanto a las medidas que se pueden implementar para evitar la saturación del servidor , podrían ser, hacer pool de conexiones que permita que los distintos usuarios las reutilicen , o 
alojarlo en azure y poner los nodos necesarios después de haber hecho un test de estres y ver cuanta carga soporta, ente otras opciones.

6.test unitarios , sé que se usa Jasmine y Karma pero no lo he usado nunca.LO he intentado , pero  no me ha dado tiempo (veréis que modificque el package.json, porque lo meti en la aplicación)
En su dia , utilice JUNit con JAva, pero con angular nunca lo he hecho y es algo que me gustaría aprender.


