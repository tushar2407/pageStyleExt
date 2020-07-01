chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.todo=="showPageAction"){
        chrome.tabs.query({active:true, currentWindow:true},function(tabs){ // retrives all the open tabs
            chrome.pageAction.show(tabs[0].id); // helps  to show our extension
        });
    }
});