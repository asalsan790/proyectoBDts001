
# Creamos el proyecto node.js
con: 
*npm init --yes*
Con lo que tenemos el package.json

# Instalamos typescript como depencencia para desarrollo 
con:
*npm install typescript -D*
con lo que no necesitaríamos tenerlo a nivel global con -g
y typescript se instala en node_modules/typescript

# Creamos el tsconfig.json
con: *npx tsc --init*

Si tenemos instalado typescript 
a nivel global también valdría:
*tsc --init*

Además del outDir hemos añadido a continuación de  "compilerOptions":

, 
"exclude": [
    "node_modules"
  ]

Para que no transpile  los ficheros de esta carpeta

# Instalo monggose

con: *npm i mongoose*
Me pide instara el módulo de los tipos:
*npm install @types/mongoose*

Podemos compilar con:
npx tsc -w

# Configuramos .gitignore 
Hemos excluido, para que no se suban al repositorio, las carpetas:
*dist*
*node_modules*

Si tenemos varios usuarios que hacen uso se GitHub y no 
queremos que se guarden las credenciales en Windows 
hay que ejecutar:
*git config --system --unset credential.helper*-u 

# Recordatorio comandos para subir al repositorio
*git add .*
*git commit -m "mensaje"*
*git push -u origin master*
