(function(){
    var supportOrientation = (typeof window.orientation === 'number' &&
            typeof window.onorientationchange === 'object');
 
    var init = function(){
        var htmlNode = document.body.parentNode,
            orientation;
        var updateOrientation = function(){
            if(supportOrientation){
                orientation = window.orientation;
                switch(orientation){
                    case 90:
                    case -90:
                        orientation = 'landscape'; // 横屏
                        break;
                    default:
                        orientation = 'portrait';
                        break;
                }
            }else{
                orientation = (window.innerWidth > window.innerHeight) ? 'landscape' : 'portrait';
            }
            htmlNode.setAttribute('class',orientation);
        };
 
        if(supportOrientation){
            window.addEventListener('orientationchange',updateOrientation,false);
        }else{
            //监听resize事件
            window.addEventListener('resize',updateOrientation,false);
        }
 
        updateOrientation();
    };
 
    window.addEventListener('DOMContentLoaded',init,false);
})();
/* window.orientation 这个属性在大部分的手机是正常的。但是这个有个坑，部分安卓机横竖屏的值放好相反。
比如，百分之九十的手机都是orientation值为90或者-90的时候横屏。但是那一小部分安卓手机这个值是竖屏。就是这么的坑爹。比如vivo的一款手机就是这样。 */