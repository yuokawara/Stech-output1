// 検索機能の実装

function App(url) {
    this.bindEvents();
    var self = this;
    this.fetch(url).then(function (data) {
        self.data = data;
    }, function (e) {
        console.log('エラー。取得失敗');
    });

    App.prototype.bindEvents = function () {
        // onChangeのthisを固定する
        _.bindAll(this, "onChange");
        // select要素のchangeイベントにonChangeを実装する
        $("select").on("change", this.onChange);
    }

    App.prototype.onChange = function (e) {
        var self = this;
        // mapメソッドを使って、$selectから新たなfunctionの配列を作成
        var where = $("select").map(function (i, el) {
            var $el = $(el);
            return function (list) {
                // this.sort this.filterに引数を渡す
                return self[$el.attr("name")](list, $el.val());
            };
        });
        // current(function)の引数にprev(Array)を渡して実行する
        var list = _.reduce(where, function () {
            return current(prev);
        }, this.data.list);
    };

    App.prototype.sort = function (list, key) {

        // 空であればlistをreturnする。
        if (this.isEnpty(key)) {
            return list;
        }
        return _.sortBy(list, function (e) {
            // sortはlistをkeyの値でソートした結果を返す。
            return e[key];
        });
    };

    App.prototype.filter = function (list, value) {
        if (this.isEnpty(value)) {
            return list;
        }
        return _.filter(list, function (e) {
            // filterはgroup keyの値が一致したものを選んでreturnする。
            return e["group"] === value;
        });
    };

    App.prototype.isEnpty = function (value) {
        return value === "";
    }
}