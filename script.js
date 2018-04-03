function addBeer (_name, _category, _rate){
	beers.push( {name: _name, category : _category,  rate : _rate });
}
function renderBeers (){
	$( 'ul.beers-list' ).empty();
	for (i = 0; i < beers.length; ++i) {
		$('ul.beers-list').append("<li>" + beers[i].name + ' \ ' + beers[i].category +  ' \ ' + beers[i].rate + "</li>");
	}
}

function sortBeers (){
	beers.sort(SortByRate);
}
function SortByRate(a, b){
  var aName = a.rate.toLowerCase();
  var bName = b.rate.toLowerCase(); 
  return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
}

$( '.post-beer' ).click(function () {
	addBeer ( $( '.beer-input').val(), $( '.category-input' ).val(), $( "#sel1" ).val());
	renderBeers();
	$('.category-input').val('');
	$('.beer-input').val('');
	$( '#sel1' ).prop('selectedIndex', 0); 
	
});

$( '.sort-beer' ).click(function () {
	sortBeers ();
	renderBeers();
});

var beers = [];

//beers.sort(function(a, b) {
//    return parseFloat(a.rate) - parseFloat(b.rate);
//});


