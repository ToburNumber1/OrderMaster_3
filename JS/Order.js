window.onload = function () {
    show_food()
    show_shop()
    show_customer()

}
function show_food() {

    $("#food")[0].value = localStorage.getItem("food");


}
function show_shop() {

    $("#rest")[0].value = localStorage.getItem("shop");

}
function show_customer() {

    $("#name")[0].value = localStorage.getItem("man")

}
//if (document.getElementsByName("shop_input") == "" && document.getElementsByName("input_one") == "" && document.getElementsByName("input_food") != "") {
//    test.disabled=false;
//    }
