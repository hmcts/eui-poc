# eui-poc
Prototype UI library to investigate Angular UI issues for HoSE 

There is a dependence peer mismatch in jest-preset-angular 
run npm i with --legacy-peer-deps for the time being


nx serve  (runs  angular front end) 

npx nx run adjunct-services:serve (starts the nestjs api) 

npm run e2e

Runs a set of Cypress end to end test which test individual features of the microsite.

npm run testAll

Runs all unit tests it finds in monorepo.
Outputs a report of the run and a coverage report.

For illustration purposes there are some deliberately broken tests to show the dashboard the developer sees. 

This is currently a highly experimental project being used to explore emerging industry best practise and its potential impact on estate code.