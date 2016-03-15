var totalcost = 0

$("#addItem").click(function() {
	var item = $("#item").val();
	var itemcost = parseInt($("#itemcost").val());
	totalcost = totalcost+itemcost
	

	$("#itemList").append("<li>" + item + " $" + itemcost + "</li>");
	$("#totalcost").html(totalcost);
	document.getElementById('item').value = "";
	document.getElementById('itemcost').value = "";

});