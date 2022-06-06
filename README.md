# DT173G - Projektuppgift - Publik webbplats
Skapad av Emma Forslund, emfo2102@student.miun.se

Detta repository innehåller filerna till den publika webbplatsen Trattoria Romantico. Det är en italiensk restaurang som erbjuder sina kunder bordsbokning via webbplatsen. Webbplatsen visar även en meny för deras mat och vinlista. 

## Länk
Länk till Trattoria Romanticos webbplats: https://studenter.miun.se/~emfo2102/writeable/trattoriaromantico/index.html  
Länk till API för bokningar: https://studenter.miun.se/~emfo2102/writeable/projekt_webservice/bookingapi.php  
Länk till API för maträtter: https://studenter.miun.se/~emfo2102/writeable/projekt_webservice/foodapi.php  
Länk till API för dryck: https://studenter.miun.se/~emfo2102/writeable/projekt_webservice/drinkapi.php  

## Struktur
Två kataloger har skapats i rotkatalogen. Katalogen src innehåller källkodsfilerna till detta projekt. Katalogen pub ignoreras med en .gitignore-fil och innehåller de publicerade filerna. I dessa två kataloger finns det en underkatalog för JavaScript, SCSS och bilder. HTML-filerna placeras inte i någon underkatalog. 

### JS
JavaScript-koden är uppdelade i tre olika filer. 
#### Booking.js
Denna fil gör ett fetch-anrop med POST till API:et för bokningar med funktionen addBooking(). Om alla fällt fylls i korrekt skapas en bokning som lagras i en MySql-databas. Användaren kan skapa en bokning på HTML-sidan book.html. Denna fil innehåller även formulär-validering och utskrift av felmeddelanden.
#### Hamburgermenu.js
Innehåller endast funktionen hamburgerMenu(). Används på alla HTML-sidor och är funktionen för att visa hamburgermenyns ul-lista. 
####  Menu.js
Denna JavaScript-fil innehåller två stycken fetch-anrop med metoden GET. Funktionen getDrinks() hämtar alla lagrade drycker med GET och getFood() hämtar alla lagrade maträtter. Maträtterna och dryckerna skrivs ut till HTML-sidan menu.html. För att skriva ut dom skapas funktioner där de loopas igenom med forEach-loop. 

### SASS/SCSS
I katalogen för SASS/SCSS finns det 5 filer :

* _base.scss
* _component.scss
* _layout.scss
* _reset.scss
* main.scss.

De filerna som börjar med ett understreck är partials och de importeras till filen main.scss med @import. I _base.scss finns variabler och importerade typsnitt. I component.scss finns klasser som återanvänds och komponenter. I layout.scss finns webbplatsens övriga style. I reset.scss finns kod för återställning av CSS. Den syntaxen som har använts är SCSS. 

### Images
Innehåller bilderna som används på webbplatsen. 

## Automatisering
En automatiserad arbetsprocess har skapats och använts i detta projekt. I projektets rotkatalog finns det en fil som heter gulpfile.js. I den filen hämtas olika npm-paket som används. 

### Gulp
Först inkluderas Gulp och i ett objekt sparas de funktioner som kommer att användas för detta projekt. Funktionerna är src, dest, parallel, series och watch. Filernas sökvägar sparas i ett objekt. De delas upp utifrån filtyp och sedan skapas funktioner för vardera filtyp. Funktionerna kopierar över filerna från katalogen src till motsvarande underkataloger i katalogen pub.

En Watch-task skapas för att automatisera processen. Den skapas med funktionen watch och alla funktioner körs parallelt. Watch-tasken märker om källkodsfilerna förändras och uppdaterar automatiskt. Till sist skapades en export-task som gör det möjligt att köra alla funktioner i en serie via terminalen. I watch-tasken initieras även browsersync.

SCSS-koden kompileras till vanlig CSS-kod och minfieras. JS-koden transpileras till äldre versioner av Ecmascript, så att koden ska fungera på alla webbläsare. JS-koden konkateneras och all JS-kod hamnar i en fil som heter main.js. Browsersync används för att kunna se förändringarna som görs direkt i de publicerade filerna. 

### Installering
För att installera systemet ska en del kommandon användas. Dessa kommandon har använts för att installera npm-paketen:
* npm i gulp --save-dev (installerar gulp)
* npm install --save-dev gulp-concat
* npm install gulp-terser --save-dev
* npm install browser-sync --save-dev
* npm install sass gulp-sass --save-dev
* npm i gulp-sourcemaps --save-dev
* npm install --save-dev gulp-babel @babel/core @babel/preset-env

#### Använda detta system
För att använda detta system måste alla JavaScript-modulerna laddas ner. Klona detta repo och använd kommandot _npm install_ i terminalen. När detta är gjort kommer samtliga npm-paket som används i detta projekt installeras. 

##### Kommando för att klona detta repo
git clone https://github.com/Webbutvecklings-programmet/projekt_publikwebbplats_vt22-eemmmaf.git

## Node_modules
Eftersom att katalogen node_modules innehåller väldigt många filer har den placerats i en .gitignore-fil. Det gör att node_modules inte versionshanteras med Git.

/ Emma Forslund, emfo2102@student.miun.se, 2022
