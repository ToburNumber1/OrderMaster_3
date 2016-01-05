window.onload = function () {
    init()
    button_judge()
    judge_food_list()
};
function init() {

    $("#food")[0].value = localStorage.getItem("food");
    $("#rest")[0].value = localStorage.getItem("shop");
    $("#name")[0].value = localStorage.getItem("man")
}

function button_judge() {
    if (!(document.getElementById("rest").value != "" && document.getElementById("name").value != "" && document.getElementById("food").value != "")) {
        $("#test").attr("disabled", true)
    }
}
function ensure() {
    get_item();
    remove_item();
    init();
    judge_food_list()
}
function get_item() {
    var person = localStorage.getItem("man");
    var shop = localStorage.getItem("shop");
    var price = localStorage.getItem("money");
    var food = localStorage.getItem("food");
    var array_info = JSON.parse(localStorage.getItem("info")) || [];
    var obj_info = {name: person, shop: shop, food: food, money: price};
    array_info.push(obj_info);
    localStorage.setItem("info", JSON.stringify(array_info));

}
function remove_item() {

    localStorage.removeItem("man");
    localStorage.removeItem("shop");
    localStorage.removeItem("food");
    localStorage.removeItem("money")
}

function judge_food_list() {
    if (document.getElementById("rest").value == "") {
        $("#bin_stop").attr("disabled", true)
    }
}
function food_list() {

    window.location = 'ChooseFoods.html'

}
function clear_food_input() {
    window.location = 'Restaurant.html';
    document.getElementById("food").value = "";

}
