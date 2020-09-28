
Creamos el proyecto node.js
con: 
*npm init --yes*
Con lo que tenemos el package.json

Instalamos typescript como depencencia para desarrollo con lo que 
no necesitaríamos tenerlo a nivel global con -g

Para crear el tsconfig.json
ejecutamos *npx tsc --init*

Si tenemos instalado tupescript 
a nivel global tanbién valdría:
*tsc --init*
Con lo que tenemos el tsconfig.json

Además del outDir hemos añadido a continuación de  "compilerOptions":

,
  "exclude": [
    "node_modules"
  ]
Para que no transpile  los ficheros de esta carpeta

Instalo *npm i mongoose*
Me pide instara el módulo de los tipos:
*npm install @types/mongoose*

Podemos compilar con:
npx tsc -w

Hemos incluido, para que no se suban al repositorio, en .gitignore las carpetas:
dist
node_modules

