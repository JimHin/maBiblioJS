//---------------------------------
// Ma Bibliothèque Javascript
// Crée le 22/02/2019
// par Jean-Michel Hinicker
// Dernière Date de modification: 22/02/2019
//---------------------------------

/*
* Fonction de récupération des paramètres GET de la page
* @return Array -- Tableau associatif contenant les paramètres GET
*/
	function getParameters()
	{
	var urlParams,
	match,
	pl = '/+/g', // Regex de remplacement des symboles addition par un espace
	search = /([^&=]+)=?([^&]*)/g,
	decode = function (s) { return decodeURIComponent(s.replace(pl, )); },
	query = window.location.search.substring(1);
	urlParams = {};
	while (match = search.exec(query))
	urlParams[decode(match[1])] = decode(match[2]);
	console.log(urlParams) //Pour afficher une autre sortie de la fonction et debugger
	return urlParams;
	}





//	-------------------------------
// 	CREATION DE DONNEES ALEATOIRES
// 	-------------------------------

/* Retour d'une chaîne de caractères aléatoires - @param: nombre de caractères de la chaîne */
function ChaineCaractereAlea(nbcar)
{
    
	var ListeCar = new Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","&","%","$","*","=","+","-","_",":",",","?",";","/","(",")","@","@","<",">","é","'","è","!","ç","à","^","¨","ù","£","`","€");
	var Chaine ='';
	for(i = 0; i < nbcar; i++)
	{
		Chaine = Chaine + ListeCar[Math.floor(Math.random()*ListeCar.length)];
	}
	return Chaine;
}

/* Retour d'un nombre entier aléatoire entre 0 et max - @param: max = maximum de la borne supérieure de la fourchette */
function NombreEntierAlea(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

//	-------------------------------
// 	ALGEBRE
// 	-------------------------------





// -------------------------------
// GEOMETRIE
// -------------------------------

// Périmètres 

/* Retour du périmètre d'un cercle selon son rayon - @param: le rayon du cercle */
function CalculPerimetreCercle(rayon) {
	return 2 * Math.PI * rayon;
}
/* Retour du périmètre d'un carré selon son côté - @param: le côté du carré */
function CalculPerimetreCarre(cote) {
	return cote * 4;
}
/* Retour du périmètre d'un rectangle selon sa longueur et sa largeur - @param: la longueur et la largeur du rectangle */
function CalculPerimetreRectangle(long, large) {
	return long * large * 2;
}
/* Retour du périmètre d'un triangle équilatéral selon son côté - @param: le côté du triangle équilatéral */
function CalculPerimetreTriangleEqui(cote) {
	return cote * 3;
}

// Aires 





// Volumes



// -------------------------------
// SCIENCES PHYSIQUES
// -------------------------------

/* calcul de la vitesse moyenne en km/h sur une distance donnée - @param: distance en km durée en heure/minute/seconde */
function VitesseMoyenne(distance,heure,minute,seconde){
	return distance/(heure+minute/60+seconde/3600);
}


// -------------------------------
// DATES
// -------------------------------

/* Retour d'un booléen déterminant si l'année passée en paramètre est bissextile - @param: un nombre entier représentant l'année */
function BissextileOuNon(annee)
{
if ((annee%4==0) && ((annee%100!=0) || (annee%400==0))) return true;
else return false;
}

// -------------------------------
// GESTION CLAVIER
// -------------------------------

// -------------------------------
// GESTION SOURIS
// -------------------------------