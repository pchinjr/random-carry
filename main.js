var generate = function() {
    //clear div for new result
    $( ".content" ).empty();
    //load database
    var CarriesDataSource = TAFFY(carries);
    //declare variables
    var baseSize = document.getElementById("baseSize").value;
    var wrapSize = document.getElementById("wrapSize").value;
    var basemod = wrapSize - baseSize;
    var orientation = document.getElementById("orientation").value.toLowerCase();
    //query the database
    var result1 = CarriesDataSource( {baseModifier: basemod, location: orientation} ).get();
    var result2 = CarriesDataSource( {baseModifier: basemod, location: orientation} ).count();
    //run logic
    if (result2 > 0) {
        var randCarry = result1[Math.floor(Math.random() * result1.length)];    
        $( ".content" ).append( "<h2> You should try a " + randCarry.name + "</h2>" );
        $( ".content" ).append( "<h2>" + "<a href=" + randCarry.url +">" + "Check out this tutorial" + "<a/>" + "<h2>");
    } else {
        $( ".content" ).append("<h2> Sorry, No Matches Found </h2>");
    }
}
    
