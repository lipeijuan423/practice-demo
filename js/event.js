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
  },
  // mousemove mouseout获取相关元素
  getRelateTarget: function(event){
    if (event.relatedTarget) {
      return event.relatedTarget
    } else if (event.toElement) {
      return event.toElement
    } else if (event.fromElement) {
      return event.fromElement
    } else {
      return null
    }
  },
  // 鼠标按钮 DOM版鼠标事件 IE模型下button属性
  getButton: function (event) {
    if (document.implementation.hasFeature('MouseEvent', '2.0')) {
      return event.button
    } else {
      switch (event.button) {
        case 0:
        case 1:
        case 3:
        case 5:
        case 7:
          return 0;
        case 2:
        case 6:
          return 2;
        case 4:
          return 1;
      }
    }
  },
  getWheelDelta: function (event) {
    /* 
      * 使用 mouseWheel / fireFox DOMMouseScroll
      (function () {
        function handleMouseWheel(event){
          event = EventUtil.getEvent(event);
          var delta = EventUtil.getWheelDelta(event);
        }
        EventUtil.addHanlder(document, 'mouseWheel', handleMouseWheel);
        EventUtil.addHanlder(document, 'DOMMouseWheel', handleMouseWheel);
      })()
    */
    if (event.wheelDelta) {
      // opera浏览器方向相反
      return client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta;
    } else {
      // oprea浏览器中 -3 且方向相反
      return -event.detail * 40
    }
  },
  getCharCode: function (event) {
    // ie9只在发生keyPress才包含， ASCII编码
    /* 
      * String.fromCharCode()转换为实际字符
    */
    // dom2 charCode dom3 key和char(ie9支持key sadari，chrome支持keyIdentifier)--浏览器兼容 不推荐
    if (typeof event.charCode === 'number') {
      return event.charCode;
    } else {
      // 可能为0 也可能是编码
      return event.keyCode;
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
// 提供文档状态有关的函数
EventUtil.addHandler(window, 'load', function(event){
  var script = document.createElement('script');
  EventUtil.addHandler(script, 'readystatechange', function (event) {
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    // 表示资源可用
    if (target.readyState == 'loaded' || target.readyState == 'complate') {
      EventUtil.removeHandler(script, 'readystatechange', arguments.callee)
    }
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
// 在页面上，对应元素点击后鼠标的位置
EventUtil.addHandler(element, 'click', function (event) {
  var pageX = event.pageX;
  var pageY = event.pageY;
  // document.body混杂模式 document.documentElement标准模式
  if (pageX === undefined) {
    pageX = event.clientX + (document.body.scrollLeft || document.documentElement.scrollLeft)
  }
  if (pageY === undefined) {
    pageY = event.clientY + (document.body.scrollTop || document.documentElement.scrollTop)
  }
})
// 右键调上下文菜单
EventUtil.addHandler(window, 'load', function (event) {
  // element上绑定右键菜单
  EventUtil.addHandler(element, 'contentmenu', function (event) {
    event = EventUtil.getEvent(event);
    EventUtil.preventDefault(event);
    var menu = document.getElementById('my-menu');
    menu.style.left = event.clientX + 'px';
    menu.style.top = event.clientY + 'px';
    meun.style.visibility = 'visible';
  })
  EventUtil.addHandler(document, 'click', function (event) {
    document.getElementById('my-menu').style.visibility = 'hidden';
  })
})
// 离开网页最后的一关
EventUtil.addHandler(window, 'beforeunload', function (event) {
  var msg = 'i am going miss you if you go'; // 这个应该没什么用
  event.returnValue = msg; //重点是这个
  return msg;
})
// 检查页面当前的状态 DOMContentLoaded本质不同，且不能判断两者的先后顺序
EventUtil.addHandler(document, 'readystatechange', function(event){
  if (document.readyState == 'interactive' || document.readyState == 'complate') {
    EventUtil.removeHandler(document, 'readystatechange', arguments.callee);
  }
})