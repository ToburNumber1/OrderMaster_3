/**
 * Created by lixuefeng on 15-12-22.
 */
window.onload = function () {
    //show_no_order_condition();
    show_order_condition();
};

//function show_no_order_condition() {
//    var order_customers = JSON.parse(localStorage.getItem("info"));
//    if (order_customers == null) {
//        get_part();
//        get_another_part();
//    }
//}

function show_order_condition() {
    var order_customers = JSON.parse(localStorage.getItem("info"))||[];
    //if (order_customers != null) {
        get_no_order_list();
        get_order_list();
        get_sum_price();
        get_no_order_num()
    //}
}

//function get_part() {
//    $('#get_num').append(0);
//    $('#get_num_per').append(0);
//    $('#get_sum').append((0).toFixed(2));
//}
//
//function get_persons_array(){
//    var no_order_num = [];
//    $.ajaxSettings.async = false;
//    $.getJSON("../JSON/Customers.json", function (date) {
//        date["man"].forEach(function (person) {
//            no_order_num.push(person);
//        })
//    })
//    return no_order_num
//}
//function get_another_part() {
//   var no_order_num=get_persons_array()
//        $('#get_nun').append(no_order_num.length);
//        $('#get_nun_per').append(no_order_num.length);
//        no_order_num.forEach(function (person) {
//            var part_html = "<div class='someone' id=" + person + "><span class='per_no'>" + person + "</span></div>";
//            $("#part_low").append(part_html);
//        })
//
//}

function show_order() {
    var order_customers = JSON.parse(localStorage.getItem("info"))||[];
    var order_num = [];
    var obj_order = {};
    for (var i = 0; i < order_customers.length; i++) {
        if (order_num.indexOf(order_customers[i].name) == -1) {
            order_num.push(order_customers[i].name);
        }
    }
    order_num.forEach(function (name) {
        obj_order[name] = name;
    });
    return {k_obj: obj_order, k_array: order_num, k_local: order_customers};
}


function get_no_order_array() {
    var order_info = show_order();
    var order = [];
    $.ajaxSettings.async = false;
    $.getJSON("../JSON/Customers.json", function (date) {

        date["man"].forEach(function (person) {
            if (order_info.k_obj[person] == undefined) {
                order.push(person);
            }
        })
    });
    $.ajaxSettings.async = true;
    return order;
}

function get_no_order_list() {
    var no_order_array = get_no_order_array();
    $('#get_nun').append(no_order_array.length);
    $('#get_nun_per').append(no_order_array.length);
    no_order_array.forEach(function (person) {
        var part_html = "<div class='someone' id=" + person + "><span class='per_no'>" + person + "</span></div>";
        $("#part_low").append(part_html);
    })
}
function get_no_order_num() {
    var order_info = show_order();
    $('#get_num').append(order_info.k_array.length);
    $('#get_num_per').append(order_info.k_array.length);
}

function get_order_list() {
    var buy_list = JSON.parse(localStorage.getItem("info"))||[];
    buy_list.forEach(function (items) {
        var order_list_html = "<div class='someone' type='text'><span class='return-na' id=" + items.name + ">" + items.name + "</span><span class='return-pr' id='" + items.shop + "'>" + items.shop + "  " + items.food + " </span><span class='return' id='" + items.food + "'>" + "￥" + JSON.parse(items.money).toFixed(2) + "</span></div>";
        $("#part").append(order_list_html);
        if (items.money > 12)
            $('#' + items.food).css('color', '#FF0000');
    })
}

function get_sum_price() {
    var buy_list = JSON.parse(localStorage.getItem("info"))||[];
    var sum = 0;
    buy_list.forEach(function (price) {
        sum += JSON.parse(price.money)
    });
    $('#get_sum').append(sum.toFixed(2));
}
