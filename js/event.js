var EventUtil = {
  addHandler: function (element, type, handler) {
    if (element.addEventListener) {
      // DOM2 多个文件顺序执行
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      // on前缀是兼容ie8之前 多个文件倒叙执行 this是window对象
      element.attachEvent('on'+type, handler);
    } else {
      // DOM0 只能执行一个文件
      element['on'+type] = handler;
    }
  },
  removeHandler: function (element, type, handler) {
    if (element.removeEventListener) {
      element.removeEventListener(type, handler, false);
    } else if (element.detachEvent) {
      element.detachEvent('on'+type, handler);
    } else {
      element['on'+type] = null;
    }
  },
  getEvent (event) {
    return event ? event : window.event;
  },
  getTarget (event) {
    return event.target || event.srcElement;
  },
  // 阻止默认事件 其他cancelable是否取消默认行为,ie没有
  preventDefault: function (event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },
  // 阻止冒泡 其他bubbles是否冒泡,ie没有 ie不支持事件捕获
  stopPropagation: function(event){
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  }
}
// 动态加载图片
EventUtil.addHandler(window, 'load', function () {
  var image = document.createElement('img');
  EventUtil.addHandler(image, 'load', function (event) {
    event = EventUtil.getEvent(event);
    alert(EventUtil.getTarget(event).src);
  })
  // 图像只要设置了src就开始下载
  document.body.appendChild(image);
  image.src = 'smile.gif';
})
// DOM0
EventUtil.addHandler(window, 'load', function () {
  var image = new Image();
  EventUtil.addHandler(image, 'load', function (event) {
    // 未添加到文档,ie8之前不会生成event
    alert('load');
  })
  image.src = 'smile.jpg';
})
// 动态加载script是否完毕
EventUtil.addHandler(window, 'load', function (event){
  var script = document.createElement('script');
  EventUtil.addHandler(script, 'load', function (event){
    alert('Loaded');
  })
  script.src = 'example.js';
  document.body.appendChild(script);
})
// 动态加载css
EventUtil.addHandler(windwo, 'load', function (event) {
  var link = document.createElement('link');
  link.type = 'text/css';
  linnk.rel = 'stylesheet';
  EventUtil.addHandler(link, 'load', function(event){
    alert('css load');
  })
  link.href = 'example.css';
  document.getElementsByTagName('head')[0].appendChild(link);
})