var totalcost = 0

$("#addItem").click(function() {
	var item = $("#item").val();
	var itemcost = parseFloat($("#itemcost").val());
	totalcost = totalcost+itemcost
	

	$("#itemList").append("<li>" + item + " $" + itemcost.toFixed(2) + "</li>");
	$("#totalcost").html(totalcost.toFixed(2));
	document.getElementById('item').value = "";
	document.getElementById('itemcost').value = "";

});