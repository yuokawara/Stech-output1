function App(url) {
    // オブジェクトを渡すとHTMLを返すfunctionをメンバに追加します
    this.template = _.template($('[data-template="item"]').html());
    this.bindEvents();
    var self = this;
    this.fetch(url).then(function (data) {
        self.data = data;
        // 初期表示のためAjax通信が終了したらrenderメソッドを実行
        self.render(self.data.list);
    }, function (e) {
        console.error("取得失敗");
    });

    // renderメソッドにより、this.templateメソッドにデータを渡す。$(".table tbody")に表示される。
    App.prototype.render = function (data) {

        var html = this.template({
            list: data
        });
        $(".table tbody").html(html);
    }
}