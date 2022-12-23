# eui-poc
Prototype UI library to investigate Angular UI issues for HoSE 

There is a dependance peer mismatch in jest-preset-angular 
run npm i with --legacy-peer-deps for the time being


nx serve  (runs  angular front end) 

npx nx run adjunct-services:serve (starts the nestjs api) 

npm run e2e

Runs a set of Cypress end to end test which test individual features of the microsite.
