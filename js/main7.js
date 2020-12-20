// var json = '{"id": 1,"name": "user01","gender": "women"}';
// console.log(typeof (json));

// var encode = JSON.parse(json);
// console.log(typeof (encode))

// var decode = JSON.stringify(encode)
// console.log(typeof (decode))

// var objct = JSON.parse(json)
// console.log(objct.id)
// console.log(objct.name)

// var mycar = {
//     make: 'honda',
//     name: 'civic',
//     year: '1989'
// }
// console.log(mycar)

// let arr = ['りんご', 'みかん', 'メロン', 'レモン'];
// let newlen = arr.push('イチゴ');

// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.unshift('ばなな');
// console.log(arr);

// arr.shift();
// console.log(arr);

// const list = document.querySelector('.output ul');
// const totalBox = document.querySelector('.output p');
// let total = 0;
// list.innerHTML = '';
// totalBox.textContext = '';

// let product = ['パンツ:6.99', '靴下:5.99', 'T シャツ:14.99', 'ズボン:31.99', '靴:23.99', ];

// for (let i = 0; i <= product.length; i++) {
//     let sub = product[i].split(':');
//     let name = sub[0];
//     let price = Number(sub[1]);
//     total += price;
//     item = name + '$' + price;

//     let listItem = document.createElement('li');
//     listItem.textContent = itemText;
//     list.appendChild(listItem);
// }

// totalBox.textContent = '合計' + total.toFixed(2);

let fruits = [
    ['りんご', "青森", 250],
    ["イチゴ", "栃木", 300],
    ["ばなな", "沖縄", 150],
    ["レモン", "神奈川", 200],
];

for (let i in fruits) {
    // console.log(i, fruits[i]);
    if (fruits[i][2] >= 220) {
        console.log(`${fruits[i][0]}, ${fruits[i][1]} は２２０円以上`);
    }
}

// input
var tate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var yoko = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// var double = [];
var double = tate.map(function (kuku) {
    return yoko.map(function (kuku2) {
        return kuku * kuku2;
    });
});

// for (var i = 0; i < tate.length; i++) {
//     var done = [];
//     for (var j = 0; j < yoko.length; j++) {
//         done.push(tate[i] * yoko[j]);
//     }
//     double.push(done);
// }
console.table(double);