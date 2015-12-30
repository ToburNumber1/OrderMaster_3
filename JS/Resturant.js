/**
 * Created by lixuefeng on 15-12-10.
 */
window.onload = function () {
    show_resturant()
};




function show_resturant() {

    $.getJSON("../JSON/Resturant.json", function (name) {
        name["resturant"].forEach(function (rest) {
            var resturant_html = "<li id='" + rest.css + "'>" + "<a href='Order.html' class='css_button_style' onclick='accept(" + '"' + rest.name + '"' + ")'>" + "<p class='css_font_style'>" + rest.name + "</p>" + "</a>" + "</li>";
            $("body").append(resturant_html)

        });
    })
}

function accept(name) {
    localStorage.setItem("shop", name);


}