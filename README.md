# 币安英雄取消挂单，提币脚本
由于币安英雄现在挂单，英雄会丢掉，其实并没有，只是他合约有bug

此脚本用于取消币安英雄挂单

- 拉脚本代码
- 安装nodejs，自己百度
- 去config.js文件填写自己私钥
- 在powershell切到代码目录
- 执行npm install

- 取消挂单执行
  - node cancelOrder.js
- 循环提款执行
  - 这个脚本会有概率产生提币费用，账号里留0.001b就行
  - node claim.js


此脚本本人不负任何责任，由于要填写私钥风险自行承担

效果好的话可以 buy me a coffee

BEP20：
0x7C41566F81A9C9aE0b27324D414289A608765FdF