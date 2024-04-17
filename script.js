$(document).ready(function() {
    var cartItems = [];
    var cartTotal = 0;

    $(".add-to-cart").click(function() {
        var price = parseFloat($(this).data("price"));
        cartTotal += price;
        $("#cart-total").text(cartTotal.toFixed(2));

        var productName = $(this).siblings("h3").text();
        cartItems.push(productName);
        $("#cart-items").append("<li>" + productName + "</li>");
    });
});
