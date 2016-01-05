/**
 * Created by lixuefeng on 15-12-21.
 */
window.onload = function () {
    show_names_list()

};

function show_names_list() {

    $.getJSON("../JSON/Customers.json", function (name) {

        name["man"].forEach(function (persons) {
            var customers_html = "<li class='apper'>" + "<div class='css_button_style' onclick='save_name_list(" + '"' + persons + '"' + ")'>" + "<b><p class='css_font_style'>" + persons + "</p>" + "</b>"
                + "</div>" + "</li>";
            $("body").append(customers_html)
        });
    })
}


function save_name_list(name) {
    window.location='Order.html';
    localStorage.setItem("man", name);

}
