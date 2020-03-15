export default function ({ $axios, store }) {
    // onRequest是$axios模块提供的帮助文档
    $axios.onRequest(config => {
        if (store.state.user.token) {
            config.headers.Authorization = "Bearer " + store.state.user.token;
        }
        return config;
    });
}