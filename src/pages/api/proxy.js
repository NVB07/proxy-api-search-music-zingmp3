import { createProxyMiddleware } from "http-proxy-middleware";

const proxy = createProxyMiddleware({
    target: "http://ac.mp3.zing.vn", // Đặt URL máy chủ gốc 1
    changeOrigin: true,
    pathRewrite: {
        "^/api/proxy": "/complete",
    },
});

export default (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    return proxy(req, res);
};
