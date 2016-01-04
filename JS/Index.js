/**
 * Created by lixuefeng on 15-12-8.
 */


function clean() {
    if (document.getElementById("rest").value != "" && document.getElementById("name").value != "" && document.getElementById("food").value != "") {

        get_item();
        remove_item();
    }
    else {
        $("#test").attr("disabled", "false")
    }

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
    document.getElementById("name").value = "";
    document.getElementById("rest").value = "";
    document.getElementById("food").value = "";
    localStorage.removeItem("man");
    localStorage.removeItem("shop");
    localStorage.removeItem("food");
    localStorage.removeItem("money")
}
//function cleanall() {
//    localStorage.clear()
//}
function judge() {
    if (document.getElementById("rest").value == "") {
        $("bin_stop").attr("disabled", "false")
    }
    else {
        window.location = 'ChooseFoods.html'
    }
}
function clear_food_input() {
    window.location = 'Restaurant.html';
    document.getElementById("food").value = "";
    localStorage.removeItem("food");
}
//
//console.log(document.getElementsByName("shop_input"))
//if (document.getElementsByName("shop_input") != "" && document.getElementsByName("input_one") != "" && document.getElementsByName("input_food") != "") {
//    document.getElementById("door").disabled = false;
//
//}
//    var persons = ["赵大", "钱二", "张三", "李四", "王五", "赵六"];
//    persons.forEach(function (per) {
//function testButton()
//{
//    if (document.getElementsByName("shop_input") != "" && document.getElementsByName("input_one") != "" && document.getElementsByName("input_food") != "") {
//        document.getElementById("door").disabled = true;
//    }
//    else {
//        disabled = false
//    } //使用true或false，控制是否让按钮禁用
//
//}
//
//$('#foodid').change(function(event) {
//    /* Act on the event */
//    var txtVal=$(this).val();
//    if (txtVal==='') {
//        $('#test').attr('disabled',"true");
//    }else{
//        $('#test').attr('disabled',"false");
//    }
//if(!String.prototype.trim) {
//    String.prototype.trim = function () {
//        return this.replace(/^\s+|\s+$/g,'');
//    };
//}
//$("input[name=input_food]").on("input",function(evt){
//    if($(this).val().trim().length){
//
//        $("#test").removeAttr("disabled");
//    }else{
//        $("#test").prop("disabled","disabled");
//    }
//});


