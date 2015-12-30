/**
 * Created by lixuefeng on 15-12-22.
 */


window.onload = function () {
    //show_order();
    //show_order_info()
    //unique()
    show_no_order()
    show_order()
};

function show_no_order(){
    var obj_order = {};

    var order_customers = JSON.parse(localStorage.getItem("info"));
    if (order_customers == null) {
        structure_part()
        structure_another_part()
    }
}
function show_order() {
    var no_order = [];
    var obj_order = {};
    var order = [];
    var sum = 0;
    var buy_order = [];
    var order_customers = JSON.parse(localStorage.getItem("info"));

    var buy_list = JSON.parse(localStorage.getItem("info"));
    for (var i = 0; i < order_customers.length; i++) {
        if (no_order.indexOf(order_customers[i].name) == -1) {
            no_order.push(order_customers[i].name);
        }
    }
    no_order.forEach(function (sd) {
        obj_order[sd] = sd;

    })
    $.getJSON("../JSON/customers.json", function (date) {

        date["man"].forEach(function (good) {
            if (obj_order[good]) {
            }
            else {
                order.push(good)
            }
        })

        $('#get_num').append(no_order.length);
        $('#get_num_per').append(no_order.length);
        $('#get_nun').append(order.length);
        $('#get_nun_per').append(order.length);


        order.forEach(function (per) {
            var part_html = "<div class='someone' id=" + per + "><span class='per_no'>" + per + "</span></div>"
            $("#part_low").append(part_html)
        })
    })
    $(document).ready(function () {
        buy_list.forEach(function (sddf) {
            var array_order= [];
           array_order.push(sddf.foo);
            //console.log(d)
            $.getJSON("../JSON/OrderMaster.json", function (sdf) {

                sdf["goods_info"].forEach(function (food) {

                    if (food.fo == array_order) {
                        var jj = "<div class='someone' type='text'><span class='return-na' id=" + sddf.name + ">" + sddf.name + "</span><span class='return-pr' id='" + sddf.shop + "'>" + sddf.shop + "  " + sddf.foo + " </span><span class='return' id='" + sddf.foo + "'>" + "￥" + food.price + "</span></div>"
                        $("#part").append(jj)
                        if (food.price > 12)
                            $('#' + sddf.foo).css('color', '#FF0000');
                    }
                })
            })
        })
    });
    $.getJSON("../JSON/OrderMaster.json", function (date) {

        date["goods_info"].forEach(function (good) {
            order_customers.forEach(function (food) {
                buy_order.push(food.foo);
                obj_order[food.foo] = food.foo

                if (food.foo == good.fo)
                    sum += good.num;
            });
        })
        $('#get_sum').append(sum.toFixed(2))
    })

}
function structure_part(){
    var order = [];
    $.getJSON("../JSON/customers.json", function (date) {
        date["man"].forEach(function (good) {
            if (obj_order[good]) {
            }
            else {
                order.push(good)
            }
        })
        $('#get_nun').append(order.length);
        $('#get_nun_per').append(order.length);
        order.forEach(function (per) {
            var part_html = "<div class='someone' id=" + per + "><span class='per_no'>" + per + "</span></div>"
            $("#part_low").append(part_html)
        })
    })
}
function structure_another_part(){
    $('#get_num').append( 0)
    $('#get_num_per').append(0);
    $('#get_sum').append((0).toFixed(2));
}
function get_sum_price(){
    $.getJSON("../JSON/OrderMaster.json", function (date) {

        date["goods_info"].forEach(function (good) {
            order_customers.forEach(function (food) {
                buy_order.push(food.foo);
                obj_order[food.foo] = food.foo

                if (food.foo == good.fo)
                    sum += good.num;
            });
        })
        $('#get_sum').append(sum.toFixed(2))
    })
}