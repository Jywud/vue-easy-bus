/**
 * vue事件总线插件 by wujiayu
 */

module.exports = {
    install: function (Vue) {
        var Bus = new Vue({
            methods: {
                emit(event, params) {
                    this.$emit(event, params);
                },
                on(event, callback) {
                    this.$on(event, callback);
                },
                off(event, callback) {
                    this.$off(event, callback);
                }
            }
        });

        Vue.prototype.$bus = Bus;
    }
}