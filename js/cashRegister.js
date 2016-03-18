var totalCost = 0

$("#addItem").click(function() {
	var item = $("#item").val();
	var itemcost = parseFloat($("#itemcost").val());
	totalCost = totalCost+itemcost
	

	$("#itemList").append("<li data-cost='" + itemcost + "'>" + item + " $" + itemcost + "<button class='delete-button'>X</button>" + "</li>");
	$("#totalCost").html(totalCost);
	document.getElementById('item').value = "";
	document.getElementById('itemcost').value = "";

});

$(document).on("swipeleft", "li", function() {
	//Get the cost
	var cost = $(this).data("cost")

	//Subtract cost from total
	totalCost -= cost;
	$("#totalCost").html(totalCost.toFixed(2));

	//Remove the item from the list
	$(this).remove();
});

$(document).on("click", ".delete-button", function() {
	//Get the cost
	var cost = $(this).parent().data("cost")

	//Subtract cost from total
	totalCost -= cost;
	$("#totalCost").html(totalCost.toFixed(2));

	//Remove the item from the list
	$(this).parent().remove();
});