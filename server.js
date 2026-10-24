const express = require('express');
const app = express();

// ============ 把下面引号里的【你的名字】改成你自己的名字 ============
const MY_NAME = '李梦宇';
// ==================================================================

app.get('/', (req, res) => {
  // 服务器时间（东八区，北京时间）
  const now = new Date().toLocaleString('zh-CN', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  res.send(`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hello World · ${MY_NAME}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #fff;
    }
    .card {
      background: rgba(255,255,255,0.15);
      backdrop-filter: blur(10px);
      padding: 48px 56px;
      border-radius: 20px;
      text-align: center;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    h1 { font-size: 2.4rem; margin-bottom: 16px; }
    p  { font-size: 1.15rem; opacity: 0.95; line-height: 1.8; }
    .time {
      margin-top: 20px;
      display: inline-block;
      padding: 8px 18px;
      background: rgba(255,255,255,0.2);
      border-radius: 999px;
      font-size: 1rem;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>Hello World！</h1>
    <p>我是 ${MY_NAME}，我的第一个 AI 开发的网站</p>
    <p class="time">🕐 当前服务器时间：${now}</p>
  </div>
</body>
</html>`);
});

// 本地运行时监听端口；部署到 Vercel 时由平台接管
const PORT = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`✅ 服务器已启动：http://localhost:${PORT}`);
  });
}

module.exports = app;
