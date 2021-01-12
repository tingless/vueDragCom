//日期转化
var dateFormat = function(date, format) {
  if (!(date instanceof Date)) {
    date = new Date(parseInt(date));
  }
  format = format || "yyyy-MM-dd HH:mm:ss";
  var o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "H+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(format)) {
    format = format.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (var k in o) {
    if (new RegExp(`(${k})`).test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return format;
};

//防抖函数
function finallyDebounce(fn, wait, immediate) {
  let timer;
  return function() {
    timer && clearTimeout(timer);
    let args = [...arguments];
    let context = this;
    if (immediate) {
      const Now = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, wait);
      if (Now) {
        fn.apply(context, args);
      }
    } else {
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, wait);
    }
  };
}
//节流函数
function finalyThrottle(fn, wait, immediate) {
  if (immediate) {
    let time = 0;
    return function() {
      let args = [...arguments];
      let context = this;
      let now = Date.now();
      if (now - time > wait) {
        fn.apply(context, args);
        time = now;
      }
    };
  } else {
    let timer;
    return function() {
      let args = [...arguments];
      let context = this;
      if (!timer) {
        timer = setTimeout(() => {
          fn.apply(context, args);
          timer = null;
        }, wait);
      }
    };
  }
}
export { dateFormat, finallyDebounce, finalyThrottle };
