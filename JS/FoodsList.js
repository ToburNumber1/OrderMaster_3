///**
// * Created by lixuefeng on 15-12-21.
// */
//
window.onload = function () {
    show_foods_list();
    judge()
};
function show_foods_list() {

    $.getJSON("../JSON/GoodsList.json", function (item) {

        item["food_lists"][localStorage.getItem('shop')].forEach(function (food) {
            var foods_with_price_html = "<li class='apper'><div class='choose-style' onclick='save_name_with_price(" + '"' + food.food + '"' + ","+'"'+food.price+'"'+")'>" + "<p class='css_font_style'><b>" + food.food + "</b></p><p class='same_body'>" +"￥"+food.price + "</p></div></li>";
            $("body").append(foods_with_price_html)
        })
    })
}
function save_name_with_price(name, price) {

    localStorage.setItem("food", name);
    localStorage.setItem("money", price)
    window.location='Order.html';
}
