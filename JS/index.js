/**
 * Created by lixuefeng on 15-12-8.
 */
/*function get_name(){
 var person=document.getElementById(person)
 localStorage.setItem("man","person")
 }*/

function AcceptData(name) {
    localStorage.setItem("man", name)
    // document.getElementById("accepDate").value;
}
function Accept(name) {
    localStorage.setItem("shop", name);
    // document.getElementById("accepDate").value;
}
function Receive(name) {
    localStorage.setItem("food", name)
}
if (document.getElementsByName("shop_input") != "" && document.getElementsByName("input_one") != "" && document.getElementsByName("input_food") != "") {
    document.getElementById("door").disabled = "";
}
else {
    disabled = true
}


function clean() {
    var persons = ["赵大", "钱二", "张三", "李四", "王五", "赵六"];
    persons.forEach(function (per) {
        var array_info = [];
        var obj_info = {};
        obj_info.name = person;
        obj_info.shop = shop;
        obj_info.foo = food;
        array_info.push(obj_info);

        localStorage.setItem("hh", array_info);
        console.log(array_info)
    });

    document.getElementById("nameid").value = "";
    document.getElementById("restid").value = "";
    document.getElementById("foodid").value = "";
    localStorage.removeItem("man");
    localStorage.removeItem("shop");
    localStorage.removeItem("food");

}


var h = localStorage.getItem("hh")[0].name;
var p = document.getElementsByName("finalid");
p[0].value = h;