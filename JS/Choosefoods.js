/**
 * Created by lixuefeng on 15-12-9.
 */


food= localStorage.getItem("food")
var input_food= document.getElementsByName("input_food");
input_food[0].value = food;