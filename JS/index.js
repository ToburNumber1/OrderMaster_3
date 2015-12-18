/**
 * Created by lixuefeng on 15-12-8.
 */
/*function get_name(){
 var person=document.getElementById(person)
 localStorage.setItem("man","person")
 }*/


function Accept(name) {
    localStorage.setItem("shop", name);
    // document.getElementById("accepDate").value;
}
function Receive(name) {
    localStorage.setItem("food", name)
}
if (document.getElementsByName("shop_input") == "" && document.getElementsByName("input_one") == "" && document.getElementsByName("input_food") != "") {
    document.getElementById("door").disabled = false;
}
else {
    disabled = true
}
//    var persons = ["赵大", "钱二", "张三", "李四", "王五", "赵六"];
//    persons.forEach(function (per) {




function clean() {

    var array_info = JSON.parse(localStorage.getItem("info"))||[]
    var obj_info = {name:person,shop:shop,foo:food};
//var obj_info={}
//            obj_info.name = person;
//            obj_info.shop = shop;
//            obj_info.foo = food;
    array_info.push(obj_info);
    localStorage.setItem("info", JSON.stringify(array_info));
    console.log(array_info);


    document.getElementById("nameid").value = "";
    document.getElementById("restid").value = "";
    document.getElementById("foodid").value = "";
    localStorage.removeItem("man");
    localStorage.removeItem("shop");
    localStorage.removeItem("food");
}
function Show_order_info(){
    //var array_mess = JSON.parse(localStorage.getItem("info"))[0].name
    //
    //var input_one= document.getElementsByName("final");
    //input_one[0].value = "sddfsf";
}
//var array_mess = JSON.parse(localStorage.getItem("info"))[0].name
//var array_mes = JSON.parse(localStorage.getItem("info"))[0].foo
//var input_one= document.getElementsByName("final");
//input_one.value = array_mess ;
//input_one[0].value =array_mes


