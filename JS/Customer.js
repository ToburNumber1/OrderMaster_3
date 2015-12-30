/**
 * Created by lixuefeng on 15-12-21.
 */
window.onload = function () {
    show_names()

}

function show_names() {

    $.getJSON("../JSON/customers.json", function (name) {

        name["man"].forEach(function (persons) {
            var customers_html = "<li class='apper'>" + "<a href='Order.html' class='css_button_style' onclick='get_name_list(" + '"' + persons + '"' + ")'>" + "<b><p class='css_font_style'>" + persons + "</p>" + "</b>"
                + "</a>" + "</li>";
            $("body").append(customers_html)
        });
    })
}


function get_name_list(name) {
    localStorage.setItem("man", name);

}

//window.onload=function (){
//    var customers=["赵大", "钱二", "张三", "李四", "王五", "赵六"];
//
//    customers.forEach(function(persons){
//        var customers_html="<li class='apper'>"+"<a href='Order.html' class='css_button_style' onclick='AcceptData("+'"'+persons+'"'+")'>"+"<b><p class='css_font_style'>"+persons+"</p>"+"</b>"
//            +"</a>"+"</li>";
//        $("body").append(customers_html)
//    });
//}

// document.getElementById("accepDate").value;

//person= localStorage.getItem("man");
//$("#name_id")[0].value=localStorage.getItem("man")
