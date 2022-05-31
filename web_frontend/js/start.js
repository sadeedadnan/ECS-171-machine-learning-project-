
const main = document.querySelector("#main");
const header = document.querySelector("#header");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const loader = document.querySelector(".spinner-wrapper");

function goResult(text){
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  header.style.WebkitAnimation = "fadeOut 1s";
  header.style.animation = "fadeOut 1s";
  setTimeout(() => {
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block";
      loader.style.display = "block";
      header.style.display = "block";
      setTimeout(() => {
        loader.style.WebkitAnimation = "fadeOut 1s";
        loader.style.animation = "fadeOut 1s";
        setTimeout(() => {
          result.style.WebkitAnimation = "moveFromBottomFade 1s";
          result.style.animation = "moveFromBottomFade 1s";
          setTimeout(() => {
            loader.style.display = "none";
          }, 500);
        },);
      },4000);
    }, 500);
  });
  document.getElementById("output").innerHTML=text;
}

function begin(){
  main.style.WebkitAnimation = "moveToTop 1s";
  main.style.animation = "moveToTop 1s";
  header.style.display = "none";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    header.style.WebkitAnimation = "fadeIn 1s";
    header.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block";
      header.style.display = "flex";
    }, 500);
  }, 500);
}

function calcResult(){
  var cityValue=document.getElementById('city').value;
  var bedValue=document.getElementById('bedId').value;
  var bathValue=document.getElementById('bathId').value;
  var interiorValue=document.getElementById('interiorId').value;
  var elementValue=document.getElementById('elementaryId').value;
  var middleValue=document.getElementById('middleId').value;
  var highValue=document.getElementById('highId').value;
  var taxAssessValue=document.getElementById('taxAssessId').value;
  var annTaxValue=document.getElementById('annTaxId').value;
  goResult(cityValue);
}

function setList(){
  var x = ['Acampo', 'Aguanga', 'Alameda', 'Alamo', 'Albany', 'Alpine', 'Alturas', 'American Canyon', 'Anaheim', 'Angels Camp', 'Angelus Oaks', 'Aptos', 'Arcata',
                'Armona', 'Artesia', 'Arvin', 'Atascadero', 'Atherton', 'Auburn', 'Avenal',
                'Avery', 'Avila Beach', 'Badger', 'Bakersfield', 'Bell Gardens',
                'Belvedere Tiburon', 'Ben Lomond', 'Berkeley', 'Bethel Island',
                'Beverly Hills', 'Big Sur', 'Biola', 'Bishop', 'Bloomington', 'Bodfish',
                'Bonita', 'Bonsall', 'Borrego Springs', 'Boulder Creek', 'Boulevard', 'Brea',
                'Brisbane', 'Brookdale', 'Buena Park', 'Burbank', 'Byron', 'Calexico',
                'California City', 'Calipatria', 'Camino', 'Campbell', 'Canby', 'Canoga Park',
                'Capistrano Beach', 'Capitola', 'Cardiff By The Sea', 'Carmel Valley',
                'Carmichael', 'Carpinteria', 'Carson', 'Castro Valley', 'Castroville',
                'Cerritos', 'Chualar', 'Chula Vista', 'Citrus Heights', 'Clarksburg',
                'Clayton', 'Clearlake', 'Clearlake Oaks', 'Coachella', 'Coalinga',
                'Coarsegold', 'Cobb', 'Compton', 'Concord', 'Corcoran', 'Corning', 'Corona',
                'Corte Madera', 'Cotati', 'Courtland', 'Covina', 'Crescent City', 'Crestline',
                'Creston', 'Crockett', 'Culver City', 'Cupertino', 'Cutler', 'Davenport',
                'Del Mar', 'Del Rey', 'Delano', 'Delhi', 'Denair', 'Diablo', 'Diamond Springs',
                'Dixon', 'Dodgertown', 'Dos Palos', 'Downey', 'Duarte', 'Earlimart', 'Earp',
                'Echo Lake', 'Edison', 'El Cerrito', 'El Dorado', 'El Segundo', 'Eldridge',
                'Elk Grove', 'Elmira', 'Elverta', 'Emigrant Gap', 'Empire', 'Encino', 'Escalon',
                'Escondido', 'Fairfax', 'Farmington', 'Fawnskin', 'Felton', 'Fiddletown',
                'Finley', 'Floriston', 'Fontana', 'Forest Falls', 'Fowler', 'Freedom', 'Fresno',
                'Fulton', 'Galt', 'Garden Grove', 'Gardena', 'Gilroy', 'Glen Ellen', 'Glendale',
                'Glendora', 'Gonzales', 'Grand Terrace', 'Greenbrae', 'Greenfield',
                'Grizzly Flats', 'Grover Beach', 'Gustine', 'Harbor City', 'Hathaway Pines',
                'Hawaiian Gardens', 'Hayward', 'Herald', 'Hercules', 'Hesperia', 'Hilmar',
                'Homeland', 'Hood', 'Hopland', 'Hughson', 'Huntington Park', 'Huron',
                'Inglewood', 'Inyokern', 'Irvine', 'Isleton', 'Ivanhoe', 'Jacumba', 'Jamul',
                'Keene', 'Kenwood', 'Kerman', 'Kernville', 'Keyes', 'King City', 'Klamath',
                'La Mesa', 'La Puente', 'La Verne', 'Lake Arrowhead', 'Lake Isabella',
                'Lakeport', 'Lakewood', 'Lamont', 'Larkspur', 'Laton', 'Lawndale', 'Livingston',
                'Loma Linda', 'Lomita', 'Long Beach', 'Los Alamitos', 'Los Altos',
                'Los Angeles', 'Los Gatos', 'Los Osos', 'Lynwood', 'Lytle Creek', 'Madeline',
                'Madera', 'Manteca', 'Maricopa', 'Mather', 'Maxwell', 'Maywood', 'McFarland',
                'Mckinleyville', 'Mecca', 'Menifee', 'Menlo Park', 'Mentone', 'Merced',
                'Middletown', 'Midway City', 'Millbrae', 'Milpitas', 'Mission Hills',
                'Mission Viejo', 'Modesto', 'Mojave', 'Montague', 'Montclair', 'Monterey',
                'Monterey Park', 'Montrose', 'Moreno Valley', 'Morgan Hill', 'Morongo Valley',
                'Morro Bay', 'Moss Landing', 'Mount Hermon', 'Mountain Center',
                'Mountain View', 'Mt Baldy', 'Murphys', 'Napa', 'Needles', 'Newcastle',
                'Nogales', 'Norden', 'North Highlands', 'North Hollywood',
                'North Palm Springs', 'Northridge', 'Novato', 'Nuevo', 'Oak Park', 'Oak View',
                'Oakland', 'Oceano', 'Ojai', 'Orange', 'Orange Cove', 'Orangevale', 'Orosi',
                'Oroville', 'Palo Alto', 'Pasadena', 'Patterson', 'Pebble Beach',
                'Penn Valley', 'Penngrove', 'Perris', 'Pine Mountain Club', 'Pine Valley',
                'Pinole', 'Pinon Hills', 'Pioneertown', 'Pismo Beach', 'Placerville',
                'Planada', 'Playa Vista', 'Pollock Pines', 'Pomona', 'Port Costa',
                'Porterville', 'Rancho Cordova', 'Rancho Santa Fe', 'Redding', 'Redlands',
                'Redwood City', 'Redwood Valley', 'Reedley', 'Rescue', 'Rialto', 'Richmond',
                'Rio Dell', 'Rio Rico', 'Ripon', 'Riverbank', 'Riverside', 'Rodeo',
                'Rohnert Park', 'Rosemead', 'Ross', 'Ryde', 'Sacramento', 'Salida', 'Salinas',
                'San Anselmo', 'San Bernardino', 'San Bruno', 'San Carlos', 'San Clemente',
                'San Diego', 'San Fernando', 'San Francisco', 'San Gabriel', 'San Jacinto',
                'San Jose', 'San Leandro', 'San Lorenzo', 'San Luis Obispo', 'San Marino',
                'San Martin', 'San Mateo', 'San Quentin', 'San Rafael', 'San Ramon',
                'San Ysidro', 'Sanger', 'Santa Barbara', 'Santa Clara', 'Santa Clarita',
                'Santa Cruz', 'Santa Fe Springs', 'Santa Margarita', 'Santa Monica',
                'Santa Rosa', 'Saratoga', 'Scotts Valley', 'Seaside', 'Sebastopol', 'Selma',
                'Shafter', 'Sheridan', 'Sierra Madre', 'Signal Hill', 'Silverado',
                'Sloughhouse', 'Soda Springs', 'Solana Beach', 'Soledad', 'Somerset', 'Sonoma',
                'Soquel', 'South Pasadena', 'South San Francisco', 'Spreckels',
                'Spring Valley', 'Squaw Valley', 'Stanford', 'Stevinson', 'Stockton',
                'Stonyford', 'Sugarloaf', 'Sultana', 'Summerland', 'Sun Valley', 'Sunnyvale',
                'Sunol', 'Sylmar', 'Tehachapi', 'Temecula', 'Templeton', 'Terra Bella',
                'Torrance', 'Tracy', 'Tubac', 'Tulare', 'Tumacacori', 'Ukiah', 'Upland',
                'Valencia', 'Vallecito', 'Van Nuys', 'Villa Park', 'Visalia', 'Walnut Creek',
                'Walnut Grove', 'Wasco', 'Watsonville', 'West Covina', 'West Hollywood',
                'Whitewater', 'Whittier', 'Wildomar', 'Willits', 'Wilmington', 'Wilton',
                'Windsor', 'Winterhaven', 'Winters', 'Winton', 'Wofford Heights', 'Woodbridge',
                'Woodlake', 'Woodland', 'Wrightwood', 'Yolo', 'Yorba Linda', 'Yountville',
                'Yuba City', 'Zamora'];
  var selection = document.getElementById('city');
  var cf = document.createDocumentFragment();

  x.forEach(function(e, index) {
      var options = document.createElement('option');
      options.innerHTML = e;
      options.value = e;
      cf.appendChild(options);
  });
  selection.appendChild(cf);
}