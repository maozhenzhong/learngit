$(function(){
  //Android 手机下输入框获取焦点时，输入法挡住输入框的bug
  //解决办法：Android手机下，input或者textarea元素聚焦时，主动滚动。
  if(/Android/gi.test(navigator.userAggent)){
    window.addEventListener('resize',function(){
      if(document.activeElement.tagName == 'INPUT' || document.acriveElement.tagName == 'TEXTAREA'){
        window.setTimeout(function(){
          document.acriveElement.scrollIntoViewIfNeeded();
        },0)
      }
    })
  }
});
