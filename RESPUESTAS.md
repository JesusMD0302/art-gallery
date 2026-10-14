## 1. Explica con un ejemplo la diferencia entre renderizado en el cliente (CSR), del lado del servidor (SSR) y sitios estáticos (SSG). ¿Para un sitio corporativo informativo cuál elegirías y por qué?

`CSR` es un método de renderizado que delega el trabajo al navegador, entregando un html inicial con una estructura pequeña y generando el resto en la carga del sitio por ejemplo un sitio creado con `React` y manejo de estado. `SSR` delega el trabajo de renderizado al navegador siendo este el que genera la página con la estructura datos y demás recursos, entregando el resultado al cliente, por ejemplo un sitio hecho con `Next.js` donde se hace una petición aun `DB` o `API` y entrega el resultado al cliente sin exponer datos indeseados. Por otro lado el `SSG` es un método donde el renderizado del sitio se realiza al momento del build, de esta manera solo entregando los archivos estáticos al cliente, sin necesidad de generar la página con cada petición, un ejemplo sería una landing page o página de aviso de privacidad, donde el contenido no cambia constantemente y se evita el uso de recursos innecesarios.

## 2. Astro, Next.js y Svelte: elige uno con el que te sientas más cómodo y di en qué proyecto real lo usarías frente a los otros dos.

Elegiría Next.js para un proyecto de tienda en linea, ya que me permite una estructura del proyecto clara y cómoda, un enrutado sencillo, me permite hacer uso de `React` del lado del cliente para uso de su reactividad, además de contar con librerías que me permitiría manejar la autenticación y autorización de los usuarios, un buen manejo de `SEO` para el posicionamiento, entre otras características, esto mejorando los tiempos de desarrollo y entregas del producto.

## 3. ¿Cuándo recomendarías un CMS como WordPress y cuándo un sitio hecho a medida? Menciona una ventaja y una desventaja de cada camino.

Recomendaría WordPress como una alternativa rápida, económica y sencilla de administrar para el cliente, sin embargo si el cliente desea una aplicación más personalizada le recomendaría un sitio a la medida, el cual pueda adaptarse más a la identidad de su marca, y si lo desea agregar un Headless CMS como Strapi para ofrecerle esa facilidad al momento de administrar el contenido.

## 4. Para una tienda en línea, ¿qué preguntas le harías al cliente antes de decidir entre Shopify y Magento?

Le preguntaría:

- ¿Cuál es el presupuesto?
- ¿Cuál es el alcance del negocio?
- ¿Necesita funciones o características personalizadas?
- ¿Qué métodos de pago busca manejar?

## 5. Describe, paso a paso y con tus palabras, cómo llevarías un cambio de código desde tu computadora hasta producción usando Git y GitHub. Menciona ramas (branches) y Pull Requests.

Crearía una rama desde la rama de desarrollo, realizaría los cambios y sus respectivos commits, haría el pull de la rama y crearía el Pull Request a la rama de desarrollo para verificar el funcionamiento de la característica, una vez asegurado el correcto funcionamiento de la funcionalidad, haría un pull request a la rama de producción para hacer el despliegue final.

## 6. ¿Qué es un “build” y qué crees que pasa cuando conectas un repositorio de GitHub a un servicio como Vercel o Cloudflare Pages?

Un build es la compilación del código fuente del proyecto para poder realizar el despliegue, en el caso de la web para que los archivos como por ejemplo de TypeScript o frameworks CSS, se compilen a archivos JavaScript y CSS que el navegador pueda comprender.

Al momento de conectar un repositorio de GitHub a un servicio, este pasa por una serie de paso, donde se configura el entorno, se instalan dependencias, se realiza el build del proyecto, y de salir todo correctamente, se realiza el despliegue del resultado, si no se detiene el proceso. Igualmente al realizar cambios en el repositorio el servicio los recibe y realiza el proceso nuevamente.

## 7. Menciona 3 cosas que cuidarías para que una landing page cargue rápido y posicione bien (SEO/rendimiento).

1. Una utilización correcta de los meta tags y title de html, atributos como `alt` de las imágenes para una correcta descripción.

2. Optimización de los recursos como por ejemplo desechar código JavaScript no utilizado, minificación de los archivos JavaScript y CSS, y el uso de imágenes optimizadas.

3. Asegurar los Core Web Vitals para ver las posibles mejoras del sitio

## 8. Cuéntanos de una tecnología que aún no dominas. ¿Cómo aprenderías a usarla si empezaras la próxima semana?

Me gustaría aprender `Go`, para ello estudiaría la documentación del lenguaje, anotaría en una libreta los conceptos clave, y realizaría una prueba elaborando un entorno de pruebas y una idea de proyecto de ejemplo.
