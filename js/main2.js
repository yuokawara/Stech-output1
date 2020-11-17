// deferredのオブジェクトを作成
// var deferred = new $.Deferred();
// setTimeout(function() {
//     // コールバック関数を実行したのでresolveメソッドを実行
//     deferred.resolve();
// }, 2000)

// // .promiseはDeferredオブジェクトのサブセット。
// // resolveやreject等stateを変化させるメソッドを排除したオブジェクトを返す。
// // stateがresolveになった時、thenメソッドの関数が実行される。
// deferred.promise().then(function() {
//     // 戻り値がdeferred objectのため、新たにDeferredオブジェクトを作って返す必要がない。
//     return $.ajax({
//         url: "data.json"
//     });
// }).then(function(res) {
//     console.log(res);
// })

// // body要素をアニメーションさせて、完了後console表示
// $("body").animate({
//     marginTop: 100
// }, {
//     duration: 1000,
//     complete: function () {
//         deferred.resolve();
//     }
// });

// deferred.promise().then(function() {
//     console.log("done");
// });

function App(url) {
    var self = this;
    // fetchメソッドは$.ajaxを返却するので、deferred objectを受け取る。
    // そのため、thenメソッドを呼び出して処理することができます。
    this.fetch(url).then(function(data) {
        self.data = data;
    }, function(e) {
        console.error("データ取得失敗！");
    });
}

App.prototype.fetch = function(url) {
    return $ajax({
        url: url,
        dataType: "json"
    });
};

new App("data.json");