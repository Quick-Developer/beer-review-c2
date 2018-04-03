function addBeer (_name, _category, _rate){
	beers.push( {name: _name, category : _category,  rate : _rate });
}
function renderBeers (){
	$( 'ul.beers-list' ).empty();
	for (i = 0; i < beers.length; ++i) {
		$('ul.beers-list').append("<li>" + beers[i].name + ' \ ' + beers[i].category +  ' \ ' + beers[i].rate + "</li>");
	}
}

function sortBeers (_sorted, _sortedAsc){
	if (_sorted && _sortedAsc) {
		beers.sort(SortDesByRate);		
		sortedAsc = false;
	}
	else {
		beers.sort(SortAscByRate);
		sortedAsc = true;
	}
	
}

function SortAscByRate(a, b){
  var aRate = a.rate.toLowerCase();
  var bRate = b.rate.toLowerCase(); 
  return ((aRate < bRate) ? -1 : ((aRate > bRate) ? 1 : 0));
}
function SortDesByRate(a, b){
  var aRate = a.rate.toLowerCase();
  var bRate = b.rate.toLowerCase(); 
  return ((aRate > bRate) ? -1 : ((aRate < bRate) ? 1 : 0));
}

$( '.post-beer' ).click(function () {
	addBeer ( $( '.beer-input').val(), $( '.category-input' ).val(), $( "#sel1" ).val());
	renderBeers();
	$('.category-input').val('');
	$('.beer-input').val('');
	$( '#sel1' ).prop('selectedIndex', 0); 
	
});

$( '.sort-beer' ).click(function () {	
	sortBeers (sorted, sortedAsc);
	sorted = true;
	renderBeers();
});

var sorted = false;
var sortedAsc = false;
var beers = [];

//beers.sort(function(a, b) {
//    return parseFloat(a.rate) - parseFloat(b.rate);
//});


