    
	
	var generate = function() {
		
		$( ".content" ).empty();
		
		var CarriesDataSource = TAFFY(carries);
		
		var baseSize = document.getElementById("baseSize").value;
		var wrapSize = document.getElementById("wrapSize").value;
		var basemod = wrapSize - baseSize;
		var orientation = document.getElementById("orientation").value;
		
		var result1 = CarriesDataSource( {baseModifier: basemod, location: orientation} ).get();
		var result2 = CarriesDataSource( {baseModifier: basemod, location: orientation} ).count();

		if (result2 > 0) {
		    var randCarry = result1[Math.floor(Math.random() * result1.length)];    
		    $( ".content" ).append( "<h1>" + randCarry.name + "<h1>" );
		    $( ".content" ).append( "<h1>" + "<a href=" + randCarry.url +">" + "Link to tutorial" + "<a/>" + "<h1>");
		    
		} else {
			
		    alert("no matches found");
		    $( ".content" ).append("<h1> No Matches Found </h1>");
		    
		}
	}
    

    
    