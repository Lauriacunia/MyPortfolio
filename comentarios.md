### Comentarios Generales

Lau, quiero en primer lugar felicitarte por un excelente trabajo. 

Si bien no evaluamos el aspecto visual de una web, ya que eso no forma parte de las habilidades requeridas para una desarrolladora front end, no puedo dejar de comentarlo: el diseño es maravilloso. Me admira lo bien que pudiste seguir todas las estructuras del modelo pero adaptarlas para que sean algo totalmente nuevo. El resultado es una web impactante a nivel visual, digna de un profesional. 

Si bien los distintos tamaños horizontales (width) de las secciones funcionan bien en desktop, quizá yo las repensaría para mobile, ya que tenés poco espacio y algunas cosas se ven algo "apretadas". Seguiría para todas las secciones de mobile, salvo el footer, la misma estructura que tenés en la seccion "Hola": width de 90% y padding: 20px. Pero entiendo que es preferencia. También revisaría el tamaño de los textos en mobile: se ven algo pequeños y se dificulta la lectura. 

Con respecto al código, en general destaco la legibilidad del mismo. En el HTML tenes mezclados dos tipos de tabulado: head con dos espacios, body con cuatro. No importa tanto, pero sería recomendable que te decantes por uno. El CSS está bastante más desprolijo, y por momentos se dificulta su lectura. La manera habitual de escribir css es: 

```
.nombre-clase {
  estilo: 20px;
  estilo-siguiente: 20px;
}
```

En tu css son habituales cosas como esta:

```
.nombre{
    display: flex;
    margin-bottom:20px;
    

}
```

Que si bien no afectan tu código, sí afectan la legibilidad y prolijidad del mismo. Tomá en cuenta que podés bajarte linters a VSCode para formatear el CSS con un clic: "CSS Formatter" es el que yo uso y recomiendo, pero hay muchísimos.

Veo mucha repetición entre los estilos para tablet y mobile. Recordá que si escribimos por ejemplo
```
@media (max-width: 900px) {
```

esos estilos se aplicaran tanto en tablet como en mobile. En tu caso, yo recomendaria tres media queries:
- una con max-width 900px, para todos los estilos comunes a tablet y mobile, 
- una de max-width 900px y min-width 600px para tablet, 
- una de min-width 600px para celular, 
Y asi repetiriamos muchisimo menos. 

Tus nombres de clases a veces son descriptivos en un sentido visual, no funcional, y eso afecta la legibilidad de tu código. "mas-margin" es un nombre de clase que describe qué estilo tendrá un elemento (y eso es algo que ya decimos en CSS) pero no le explica al lector de tu código qué es ese elemento o qué hace. Hay dos problemas con estos nombres: el primero es que no describen adecuadamente al elemento. El segundo es que los estilos cambian un montón a lo largo de la vida de una web. Mantener nombres funcionales nos permite que estos cambios sean más sencillos: boton-principal siempre será el botón principal de una sección, aunque cambie su margen, su color, o cualquier otra cosa. Dejé comentados en tu HTML algunos ejemplos más. 

Menciono lo bien ordenado de tu proyecto en github, y lo prolija que fuiste commit a commit agregando los cambios de a poco y describiendolos bien en tus mensajes.

Dejo algunos comentarios a lo largo de tu código. 

Obviamente es mi trabajo comentarte todo lo que vea para ayudarte a mejorar. No olvides que es mi deber ser quisquillosa: hiciste un gran trabajo más allá de los detalles que te comento aquí. 

### Nota final: 9

Nota desagregada: 
✅ Estructura correcta de documento HTML.
✅ Respeta la consigna.
✅ Respeta el diseño dado.
✅ Responsive funciona correctamente.
✔️ Código bien indentado. ---> con observaciones
✅ Comentarios que permiten mejorar la legibilidad del código.
✅ Uso correcto de etiquetas semánticas.
✔️ Buenos nombres de clases ---> con observaciones
✅ Reutilización de estilos.
❌ Código CSS ordenado.
✅ Commits con mensajes adecuados.
