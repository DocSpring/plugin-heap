require(["gitbook"], function(gitbook) {
    // Load Heap
    gitbook.events.bind("start", function(e, config) {
        window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};
        var cfg = config.heap;
        heap.load(cfg.token, cfg.configuration);
    });

    // // Notify pageview
    // gitbook.events.bind("page.change", function() {
    //     ga('send', 'pageview', window.location.pathname+window.location.search);
    // });
});
