/**
 * Created by lixuefeng on 15-12-10.
 */
window.onload = function () {
    show_restaurant_list()
};





function show_restaurant_list() {

    $.getJSON("../JSON/GoodsList.json", function (item) {

        item["resaturant"].forEach(function (rest) {
            var resturant_html = "<li class='apper'>" + "<div class='css_button_style' onclick='save_restaurants(" + '"' + rest + '"' + ")'>" + "<p class='css_font_style'>" + rest + "</p>" + "</div>" + "</li>";
            $("body").append(resturant_html)
        });
    })
}


function save_restaurants(name) {
    window.location='Order.html';
    localStorage.setItem("shop", name);
}
