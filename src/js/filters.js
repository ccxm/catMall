/**
 * 过滤器
 */

// 格式化钱
let formatMoney = function (money) {
  console.log(money)
  money = money.split('')
  money = money.reverse()
  let pointIndex = money.indexOf('.')
  let length = money.length - pointIndex
  let current = pointIndex
  for(let i = 1;i < length / 3;i++){
    current = i * 3 + i + pointIndex
    money.splice(current,0,',')
  }
  if(money[money.length - 1] === ',') {
    --money.length
  }
  return money.reverse().join('')
}

// console.log(formatMoney('789.01'))
module.exports = {
  formatMoney
}
