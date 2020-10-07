This is just a basic git test


* npm install -g typescript
* npm init -y 
    * _Hit enter (lots of times) to accept all the default settings_
* tsc --init
* npm install --save @types/node
* npm install --save readline-sync
* npm install --save-dev @types/readline-sync


* npm install --save express
* npm install --save-dev @types/express

* npx create-react-app your-app-name --typescript
* code your-app-name
* cd your-app-name
* npm start



Let’s install ESlint for a new test project

* npm init -y
* npm install typescript
* tsc --init
* npm install --save-dev eslint @typescript-eslint/parser  @typescript-eslint/eslint-plugin

There’s three things that we install, actually.
* eslint
The core ESLint linting library
* @typescript-eslint/parser
allows for linting TypeScript code
* @typescript-eslint/eslint-plugin
 A plugin that contains a bunch of TypeScript specific ESLint rules