## Plan: Portafolio Angular Desde Mockup

Construir un portafolio SPA (single-page) en Angular 19 replicando la estructura visual del mockup (hero, proyectos, conocimientos, contacto) y alimentarlo con datos reales del PDF cuando estén disponibles. Ya se confirmaron desde el PDF: teléfono, correo, LinkedIn y GitHub; el resto del contenido permanece comprimido, por lo que se definirá una capa de datos editable para completar textos/proyectos sin tocar la UI.

## Steps
1. Fase 1 - Base visual y arquitectura: definir tokens globales (colores, tipografía, espaciado, sombras), layout principal y estrategia responsive mobile-first en src/styles.css y app root. Esta fase desbloquea todas las demás.
2. Fase 1 - Decisión de navegación: implementar SPA con anclas de scroll (INICIO, SOBRE MÍ, EXPERIENCIA, PROYECTOS, CONTACTO) y conservar router mínimo sin rutas complejas. Esto evita sobreingeniería y coincide con el mockup.
3. Fase 2 - Modelo de contenido: crear interfaces de dominio (perfil, proyecto, skill, experiencia, contacto) y un único punto de verdad en service/data file. Definir placeholders para campos aún no extraíbles del PDF. Depende de 1.
4. Fase 2 - Ingesta de datos confirmados del PDF: precargar contacto confirmado (tel, email, LinkedIn, GitHub) y marcar explícitamente campos pendientes (bio extensa, experiencia detallada, educación, descripción completa de proyectos). Paralelo con 3.
5. Fase 3 - Componentización de secciones: crear componentes standalone para navbar, hero, experiencia, proyectos, conocimientos y contacto, con inputs tipados y separación presentación/datos. Depende de 3.
6. Fase 3 - Tarjetas y bloques reutilizables: crear componentes compartidos para card de proyecto, badge de skill y botones CTA. Paralelo con 5 después de definir el modelo.
7. Fase 4 - Integración visual del mockup: aplicar composición final (jerarquía tipográfica, bloques oscuros, acentos verdes, imagen de perfil destacada, panel de proyectos), incluyendo estados hover/focus y transiciones intencionales. Depende de 5 y 6.
8. Fase 4 - Assets y contenido multimedia: preparar estructura public para foto, previews de proyectos y logo personal; enlazar CV descargable. Paralelo con 7.
9. Fase 5 - Accesibilidad y SEO técnico: revisar contraste, navegación por teclado, landmarks ARIA, meta tags y títulos; asegurar rendimiento visual sin saltos de layout. Depende de 7.
10. Fase 5 - QA y cierre: validar en desktop y móvil, ejecutar pruebas existentes de Angular y checklist manual contra el mockup (estructura, secciones, navegación, contacto funcional). Depende de 9.

## Relevant files
- src/app/app.component.ts - mantener root shell e importar componentes de sección.
- src/app/app.component.html - layout principal con orden de secciones y anclas.
- src/app/app.component.css - reglas locales del shell si son necesarias.
- src/styles.css - sistema visual global (variables, tipografía, utilidades base).
- src/app/app.routes.ts - mantener routing simple o vacío para enfoque SPA por scroll.
- src/index.html - meta tags y fuentes.
- public - assets finales (foto, imágenes de proyectos, logo, CV si aplica).
- desig/mockup.png - referencia visual principal para UI.
- desig/CV_Gustavo_Gutierrez_2026.pdf - fuente de contenido personal/profesional.

## Verification
1. Ejecutar npm start y revisar visualmente la página completa en desktop y viewport móvil (320px-1440px).
2. Validar navegación por anclas desde navbar y retorno correcto al hacer scroll.
3. Verificar que correo, teléfono, LinkedIn y GitHub rendericen y abran correctamente.
4. Ejecutar npm test y confirmar que no haya regresiones en AppComponent ni errores de compilación.
5. Hacer comparación visual contra mockup: presencia de hero, proyectos, conocimientos y contacto en el mismo orden y con jerarquía similar.
6. Revisar accesibilidad mínima: foco visible, contraste legible, headings en orden y textos alternativos en imágenes.

## Decisions
- Enfoque principal: SPA de una sola página con scroll, no multi-ruta.
- Datos: separar contenido de UI para actualizar textos del CV sin rediseñar componentes.
- Estado de información del PDF: confirmados teléfono (+57 3228291082), email (adolfogutierra0108@gmail.com), LinkedIn (https://www.linkedin.com/in/gustavoa198/), GitHub (https://github.com/GustavoA198); el resto queda pendiente por compresión interna del PDF.
- Decisión tomada contigo: lo faltante de texto e imágenes se completará con placeholders/referencias temporales para avanzar ya, y luego se reemplaza con contenido final.
- Alcance incluido: estructura visual del mockup, sección experiencia, proyectos, skills y contacto funcional.
- Alcance excluido por ahora: panel administrativo, backend, CMS y autenticación.

## Further considerations
1. Fuente de datos faltantes del CV: RESUELTO -> usar placeholders de texto e imágenes de referencia durante la implementación inicial, luego reemplazar por contenido final validado.
2. Estrategia de proyectos: RESUELTO -> 3 proyectos destacados en home para la primera versión.
3. Idioma del portafolio: RESUELTO -> bilingüe ES/EN desde la versión inicial.
