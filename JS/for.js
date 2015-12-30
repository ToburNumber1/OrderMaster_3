/**
 * Created by lixuefeng on 15-12-17.
 */
//
//window.onload=function (){
//    var customers=["赵大", "钱二", "张三", "李四", "王五", "赵六"];
//
//    customers.forEach(function(persons){
//        var customers_html="<li class='apper'>"+"<a href='order.html' class='css_button_style' onclick='AcceptData("+'"'+persons+'"'+")'>"+"<b><p class='css_font_style'>"+persons+"</p>"+"</b>"
//+"</a>"+"</li>";
//        $("body").append(customers_html)
//    });
//}
//function AcceptData(name) {
//    localStorage.setItem("man", name);
//    // document.getElementById("accepDate").value;
//}

//$('#goToPageB').on('click',function() {
//    sessionStorage.setItem("from","pageA");
//})
//window.onload = function() {
//    var from = sessionStorage.getItem("from");
//    if(from == 'pageA') {
//
//        $('#goToPageB').click(function get_name_list()  {  var customers=["赵大", "钱二", "张三", "李四", "王五", "赵六"];
//
//        customers.forEach(function(persons){
//            var customers_html="<li class='apper'>"+"<a href='order.html' class='css_button_style' onclick='AcceptData("+'"'+persons+'"'+")'>"+"<b><p class='css_font_style'>"+persons+"</p>"+"</b>"
//                +"</a>"+"</li>";
//            $("body").append(customers_html)
//        });
//    })
//        //要触发的点击事件  $('#xxx').click()
//        sessionStorage.setItem("from",""); //销毁 from 防止在b页面刷新 依然触发$('#xxx').click()
//    }
//}