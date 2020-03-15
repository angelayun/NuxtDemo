export const actions = {
    // nuxtServerInit必须声明在根模块当中
    // 参数一是action上下文   参数二是组件上下文
    nuxtServerInit ({ commit }, { app }) {
        const token = app.$cookies.get("token");
        if (token) {
            commit("user/SET_TOKEN", token);
        }
    }
};