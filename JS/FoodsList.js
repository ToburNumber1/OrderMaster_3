///**
// * Created by lixuefeng on 15-12-21.
// */
//
window.onload = function () {
    show_foods()
    judge()
}
function show_foods() {

    $.getJSON("../JSON/GoodsList.json", function (sdf) {

        sdf["food_lists"][localStorage.getItem('shop')].forEach(function (foo) {
            var foods_with_price_html = "<li class='apper'><a href='Order.html' class='choose-style' onclick='receive(" + '"' + foo.fo + '"' + ","+'"'+foo.price+'"'+")'>" + "<p class='css_font_style'><b>" + foo.fo + "</b></p><p class='same_body'>" +"￥"+foo.price + "</p></a></li>";
            $("body").append(foods_with_price_html)
        })
    })
}
function receive(name, price) {
    localStorage.setItem("food", name);
    localStorage.setItem("sdfa", price)

}

//function show_foods() {
//
//    $.getJSON("../JSON/GoodsList.json", function (sdf) {
//
//        sdf["food_lists"][localStorage.getItem('shop')].forEach(function (foo) {
//            var foods_with_price_html = "<li class='apper'><a href='Order.html' class='choose-style' onclick='receive(" + '"' + foo.fo + '"' + ")'>" + "<p class='css_font_style'><b>" + foo.fo + "</b></p><p class='same_body'>" + foo.price + "</p></a></li>";
//            $("body").append(foods_with_price_html)
//        })
//    })
//}
//function receiver(){
// var lists=[{
//     fo: "田园脆鸡堡",
//     price: "￥10.00"
// },
//     {
//         fo: "黄金咖喱猪排饭",
//         price: "￥23.50"
//     },
//     {
//         fo: "意式肉酱肉丸饭",
//         price: "￥16.00"
//     },
//     {
//         fo: "老北京鸡肉卷",
//         price: "￥14.00"
//
//     },
//     {
//         fo: "劲脆鸡腿堡",
//         price: "￥15.00"
//     }];
//   lists.forEach(function(foo){
//       if(foo.fo==food){
//           localStorage.setItem("per",foo.price)
//           alert("sdfasdfsd")
//
//       }
//
//   })
//
//}
//price = localStorage.getItem("per");
//price = localStorage.getItem("per");
//window.onload = function () {
//    show_foo  ds()
//}
//function show_foods() {
//    var foods_with_price = [
//        {food: {fo: "田园脆鸡堡", price: "￥10.00"}, clas: "same_body"},
//        {
//            food: {d
//                fo: "黄金咖喱猪排饭",
//                price: "￥23.50"
//            },
//            clas: "same-body"
//        },
//        {
//            food: {
//                fo: "意式肉酱肉丸饭",
//                price: "￥16.00"
//            },
//            clas: "other-body"
//        },
//        {
//            food: {
//                fo: "老北京鸡肉卷",
//                price: "￥14.00"
//            },
//            clas: "other_body"
//        },
//        {
//            food: {fo: "劲脆鸡腿堡", price: "￥15.00"}, clas: "another-body"
//        }
//    ];
//    foods_with_price.forEach(function (foo) {
//        var foods_with_price_html = "<li class='apper'><a href='Order.html' class='choose-style' onclick='Receive(" + '"' + foo.food + '"' + ")'>" + "<p class='css_font_style'><b>" + foo.food.fo + "</b></p><p class='" + foo.clas + "'>" + foo.food.price + "</p></a></li>";
//        $("body").append(foods_with_price_html)
//    })
//}
/**
 * Created by lixuefeng on 15-12-21.
 */


//function show_foods() {
//    var foods_with_price = [
//        {
//            food: "田园脆鸡堡",
//            price: "￥10.00"
//        },
//        {
//            food: "黄金咖喱猪排饭",
//            price: "￥23.50"
//        },
//        {
//            food: "意式肉酱肉丸饭",
//            price: "￥16.00"
//        },
//        {
//            food: "老北京鸡肉卷",
//            price: "￥14.00"
//
//        },
//        {
//            food: "劲脆鸡腿堡",
//            price: "￥15.00"
//        }
//    ];
//    foods_with_price.forEach(function (foo) {
//        var foods_with_price_html = "<li class='apper'><a href='Order.html' class='choose-style' onclick='Receive(" + '"' + foo.food + '"' + ")'>" + "<p class='css_font_style'><b>" + foo.food + "</b></p><p class='same_body'>" + foo.price + "</p></a></li>";
//        $("body").append(foods_with_price_html)
//    })
//}

//food= localStorage.getItem("food");
//
//
//$("#food_id")[0].value=localStorage.getItem("food");


//function show_foods() {
//    var foods_with_price = [
//        {
//            fo: "田园脆鸡堡",
//            price: "￥10.00"
//        },
//        {
//            fo: "黄金咖喱猪排饭",
//            price: "￥23.50"
//        },
//        {
//            fo: "意式肉酱肉丸饭",
//            price: "￥16.00"
//        },
//        {
//            fo: "老北京鸡肉卷",
//            price: "￥14.00"
//
//        },
//        {
//            fo: "劲脆鸡腿堡",
//            price: "￥15.00"
//        }
//    ];
//    foods_with_price.forEach(function (foo) {
//        var foods_with_price_html = "<li class='apper'><a href='Order.html' class='choose-style' onclick='Receive(" + '"' + foo.fo + '"' + ")'>" + "<p class='css_font_style'><b>" + foo.fo + "</b></p><p class='same_body'>" + foo.price + "</p></a></li>";
//        $("body").append(foods_with_price_html)
//    })
//}
//function show_foods(){
//    if(localStorage.getItem("shop")=="KFC"){
//        var foods_with_price = [
//            {
//                fo: "田园脆鸡堡",
//                price: "￥10.00"
//            },
//            {
//                fo: "黄金咖喱猪排饭",
//                price: "￥23.50"
//            }
//            ];
//
//    }
//    else if(localStorage.getItem("shop")=="7-11"){
//        var foods_with_price = [
//            {
//                fo: "田园脆鸡堡",
//                price: "￥10.00"
//            },
//            {
//                fo: "黄金咖喱猪排饭",
//                price: "￥23.50"
//            },
//            {
//                fo: "意式肉酱肉丸饭",
//                price: "￥16.00"
//            },
//            {
//                fo: "老北京鸡肉卷",
//                price: "￥14.00"
//
//            }
//            ];
//
//    }
//    else{
//        var foods_with_price = [
//            {
//                fo: "田园脆鸡堡",
//                price: "￥10.00"
//            },
//            {
//                fo: "黄金咖喱猪排饭",
//                price: "￥23.50"
//            },
//            {
//                fo: "意式肉酱肉丸饭",
//                price: "￥16.00"
//            },
//            {
//                fo: "老北京鸡肉卷",
//                price: "￥14.00"
//
//            },
//            {
//                fo: "劲脆鸡腿堡",
//                price: "￥15.00"
//            }
//        ];
//
//    }
//    foods_with_price.forEach(function (foo) {
//        var foods_with_price_html = "<li class='apper'><a href='Order.html' class='choose-style' onclick='Receive(" + '"' + foo + '"' + ")'>" + "<p class='css_font_style'><b>" + foo.fo + "</b></p><p class='same_body'>" + foo.price + "</p></a></li>";
//        $("body").append(foods_with_price_html)
//    })
//}
