# Ahorcado Game
[ {Link} ](https://ahorcado-game-ashy.vercel.app/) para acceder al proyecto desplegado

## ¿Porque?
Este proyecto fue realizado para el programa Oracle ONE, con el proposito de poder en practica y mejorar mis conocimientos en el desarrollo web

## Requerimientos
En el programa Oracle ONE se nos solicito hacer un guego del ahorcado en base a un [ {Figma} ](https://www.figma.com/file/kCsAB7eHc6xpoYByBQxNrb/Alura-Challenge---Desaf%C3%ADo-2---L%C3%B3gica?node-id=10%3A158) <br> en este `modelo de figma` se pueden ver los siguientes requerimientos
- Una pagina de inicio `home` con 2 botones `iniciar el juego` y `agregar nueva palabra`
- Una pagina de `agregar palabra` donde habra un imput `escribir palabra` y 2 botones `jugar` y `cancelar`
- Una pagina de `jugar` donde ya es el juego, aqui simplemente estan los imputs de las letras a probar y el personaje muñeco del juego del ahorcado
- Ser desarrollado con `html`, `css` y `js`
- Sistema de guardado de palabras con LocalStorage
- Diseño adaptable a dispositibos mobiles

Este proyecto era muy simple por lo que decidi agregar los siguientes requerimientos para probar mis habilidades en desarrollo web moderno
- Sistema de pistas, al agregar una palabra tambien se puede agregar una pista para esta misma
- Una base de datos que guarden las palabras en automatico
- Uso de `React.js`, `Next.js` y `Node.js`, al igual que `Supabase` para la base de datos
- Actualizar el diseño del Ahorcado.
- implementar un UX mejor para dispositivos mobiles y computadores 

## Tecnologías usadas 
- React.js
- Next.js
- Node.js
- SASS
- Supabase
- Vercel

## Como funciona
- primero se tiene que acceder al siguiente [ {Link} ](https://ahorcado-game-ashy.vercel.app/): <br> Este llevara a la pagina `Home` donde habra 2 botones, uno para jugar con las palabras que ya estan en la base de datos y otro para poder agregar nuevas palabras y jugar con ello, se debe de dar click en cualquier boton
- En caso de dar Click en el boton de `Iniciar juego`:
1. Se encontrara en la pantalla una instruccion si esta en pc y si esta en mobil tendra un boton que al precionar se abrira un teclado <br> Una vez en esta pantalla solo es jugar y precionar teclas como en un juego del ahorcado clasico
- En caso de dar Click en el boton de `Agregar nueva palabra`:
  - Se encontrara en la pantalla un imput de texto tonde podra ingresar una palabra y el cual es obligatorio llenar para continuar
  - una vez llenado el imput de palabra vera abajo de el 3 botones uno largo `agregar pista`y 2 medianos `continuar` y `cancelar`, al precionar el boton de `agregar pista` se desplegara otro imput donde podra agregar una pista para descubrir la palara ingresada, este campo no es obligatorio
  - al precionar el boton de `continuar` se abrira una pequeña ventana modal donde se le pedira una contraseña, esta contraseña es para poder guardar la palabra en la base de datos, si no tiene la contraseña o no quiere ingresarla solo precione el boton que diga `Continuar sin guardar`, una vez presionado cualquiera de los dos botones lo enviara a la pagina de `jugar` y podra jugar con la palabra que usted selecciono (esta modalidad de juego se recomiendo jugarla con amigos).
  -  si requiere la contraseña requerida favor de contactarme

## Sobre este proyecto
Este proyecto fue complicado de realizar ya que antes de comenzar necesitaba buscar algo conque destacarme ya que este proyecto lo realizan todas las personas que participan en el proyecto **Oracle ONE** por lo que tome el figama que se nos proporciono y en base a este cree, modifique y diseñe componentes que me ayudaran a agregar lo que necesitaba para lograr mi meta de tener un proyecto real para formar parte de mi portafolio.



