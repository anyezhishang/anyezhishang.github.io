window.env = 'test'
// window.env = 'prod'
window.baseUrl = window.env !== 'prod' ? 'https://cloudtest.szbjh.com' : 'https://cloud.szbjh.com'

// 额外分数：修改数字
let extraScore = 1;

// 无敌模式：true 改为 false
let wuDi = true;

// 第一个水果：修改数字为 0-10, 0 为葡萄，9 为半个西瓜
let firstFruit = 1;

// 水果合成反转：false 改为 true
let reverseLevelUp = false;

// 指定生成的水果：默认值: 不开启反转 0-5 开启反转 6-11，修改对应数字即可控制随机生成的水果范围
const minRandomFruitNum = reverseLevelUp ? 6 : 2; // 生成随机水果最小值（0-10）0 为葡萄，9 为半个西瓜
const maxRandomFruitNum = reverseLevelUp ? 11 : 8; // 生成随机水果最大值（1-11）0 为葡萄，9 为半个西瓜
let setFruits = {
  // 指定前几次生成的水果，可填入任意数量的数字，0 为葡萄，9 为半个西瓜
  startFruits: reverseLevelUp ? [10, 10, 9, 8, 8, 7] : [1, 1, 2, 3, 3, 4],
  randomFunction: () => {
    return (minRandomFruitNum + Math.floor(Math.random() * (maxRandomFruitNum - minRandomFruitNum))) % 2 === 0 ?
      (minRandomFruitNum + Math.floor(Math.random() * (maxRandomFruitNum - minRandomFruitNum))) :
      (minRandomFruitNum + Math.floor(Math.random() * (maxRandomFruitNum - minRandomFruitNum))) + 1;
  }
}

// 让水果更 Q 弹：false 改为大于 0 小于 1 的任意小数（推荐 0.9）
let fruitQTan = false;

// 让水果下落缓慢：false 改为大于 0 的任意数，值越大阻力越大，下落越慢（推荐 5）
let fruitSlowDown = false;

// 点击右上方图标更换水果：false 改为 true 即可
let clickChangeFruit = false;

// 广告链接：false 或为空字符串表示不会跳转到广告
let adLink = window.location.href.split('#').length <= 1 ? '/assets/xcx_qr_code.png' : '/ckpi/assets/xcx_qr_code.png';

// 修改网页标题：将 "合成大西瓜" 进行替换
// document.getElementsByTagName("title")[0].innerText = '合成情人节大礼盒';

// 开启选分弹窗：将 false 改为 true
let selectModal = false;