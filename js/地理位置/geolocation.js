navigator.geolocation.getCurrentPosition(function(position){
    // position对象 -- 获取地理位置成功函数
    console.log(position.coords.latitude, '纬度')
    console.log(position.coords.longitude, '经度')
}, function (error){
    // 失败函数
    console.log(error.code, error.message)
}, {
    // 设定信息类型

})
// 跟踪用户的位置
var watchId = navigator.geolocation.watchPosition(function(position){

}, function(error){
    console.log(error.code, error.message)
})
// 取消监控
clearWatch(watchId);