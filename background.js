function show() {
  var opt = {
        type: "list",
        title: "桌面提醒",
        message: "msg",
        iconUrl: "icon.png",
        items: [{ title: "订餐啦", message: "现在时间三点半"}]
      }
  chrome.notifications.create('',opt,function(id){})
}

function dinnerRemind() {
    var myDate = new Date();
    if(myDate.getDay != 0 && myDate.getDay != 6 && myDate.getHours() == 15 && myDate.getMinutes() == 30){
        show();
        var createProperties = {
        	url: "http://meican.com/corps/589067"
        };
        chrome.tabs.create(createProperties, function(tab){});
    }
}
setInterval(dinnerRemind, 33000);
