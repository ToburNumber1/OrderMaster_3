/**
 * Created by lixuefeng on 15-12-17.
 */

function get_name_list(){
    var customers=["54", "55", "5", "李四", "王五", "赵六"];

    customers.forEach(function(persons){
        var customers_html="<li class='apper'>"+"<a href='order.html' class='css_button_style' onclick='AcceptData("+persons+")'>"+"<b><p class='css_font_style'>"+persons+"</p>"+"</b>"
+"</a>"+"</li>";
        $("body").append(customers_html)
    });
}
function AcceptData(name) {
    localStorage.setItem("man", name);
    // document.getElementById("accepDate").value;
}
function get_resturant_list(){

    var resturant=[{name:"KFC",idp:"lpo"},{name:4-11,idp:"lpo-li"},{name:"成都小吃",idp:"li-lpo"}];
    resturant.forEach(function(rest){
        var resturant_html="<li id='"+rest.idp+"'>"+"<a href='order.html' class='css_button_style' onclick='Accept("+""+rest.name+""+")'>"+"<p class='css_font_style'>"+rest.name+"</p>"+"</a>"+"</li>";
        $("body").append(resturant_html)

    });
}
function get_foods_lisst(){
    var foods_with_price=[{food:"田园脆鸡堡",price:"￥10.00",clas:"same_body"},{food:"黄金咖喱猪排饭",price:"￥23.50",clas:"same-body"},{food:"意式肉酱肉丸饭",price:"￥16.00",clas:"other-body"},{food:"老北京鸡肉卷",price:"￥14.00",clas:"other_body"},{food:"劲脆鸡腿堡",price:"￥15.00",clas:"another-body"}];
        foods_with_price.forEach(function(foo){
            var foods_with_price_html="<li class='apper'><a href='order.html' class='choose-style' onclick='Receive("+""+foo.food+""+")'>"+"<p class='css_font_style'><b>"+foo.food+"</b></p><p class='"+foo.clas+"'>"+foo.price+"</p></a></li>";
            $("body").append(foods_with_price_html)
        })
}