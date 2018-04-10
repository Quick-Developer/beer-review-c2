var renderBeers = function () {
	$('ul.beers-list').empty();
	for (var i = 0; i < beers.length; ++i) {
		$('ul.beers-list').append("<li>" + beers[i].name + ' \ ' + beers[i].category + ' \ ' + beers[i].rate + "</li>");
	}
}



var BeerReviewApp = function () {
	var beers = [];
	var sorted = false;
	var sortedAsc = false;

	var addBeer = function (_name, _category, _rate) {
		beers.push({ name: _name, category: _category, rate: _rate });
	}
	var updateBeers = function () {
		$('ul.beers-list').empty();
		for (var i = 0; i < beers.length; ++i) {
			$('ul.beers-list').append("<li>" + beers[i].name + ' \ ' + beers[i].category + ' \ ' + beers[i].rate + "</li>");
		}

	}
	var sortBeers = function () {
		sorted = true;
		if (sorted && sortedAsc) {
			beers.sort(SortDesByRate);
			sortedAsc = false;
		}
		else {
			beers.sort(SortAscByRate);
			sortedAsc = true;
		}
	}

	var SortAscByRate = function (a, b) {
		var aRate = a.rate.toLowerCase();
		var bRate = b.rate.toLowerCase();
		return ((aRate < bRate) ? -1 : ((aRate > bRate) ? 1 : 0));
	}

	var SortDesByRate = function (a, b) {
		var aRate = a.rate.toLowerCase();
		var bRate = b.rate.toLowerCase();
		return ((aRate > bRate) ? -1 : ((aRate < bRate) ? 1 : 0));
	}
	return {
		addBeer: addBeer,
		updateBeers: updateBeers,
		sortBeers : sortBeers
	}
}

$('.post-beer').click(function () {
	app.addBeer($('.beer-input').val(), $('.category-input').val(), $("#sel1").val());
	app.updateBeers();
	$('.category-input').val('');
	$('.beer-input').val('');
	$('#sel1').prop('selectedIndex', 0);
});

$('.sort-beer').click(function () {
	app.sortBeers();
	
	app.updateBeers();
});

var app = BeerReviewApp();



//beers.sort(function(a, b) {
//    return parseFloat(a.rate) - parseFloat(b.rate);
//});


