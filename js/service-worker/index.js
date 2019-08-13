// if (navigator.serviceWorker) {
//   navigator.serviceWorker.register('sw.js').then(function(reg){console.log('注册成功')}.catch(() => {console.log('注册失败')})
// }
if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register('sw.js')
    .then(function (registration) {
      console.log('service worker 注册成功')
    })
    .catch(function (err) {
      console.log(err, 'servcie worker 注册失败')
    })
}