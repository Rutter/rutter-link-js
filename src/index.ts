const exampleCallback = () => {
  console.log("FINISHED LOADING");
};

(function () {
  var rutterScriptTag = document.createElement("script");
  rutterScriptTag.async = true;
  rutterScriptTag.type = "text/javascript";
  rutterScriptTag.src = "https://unpkg.com/@rutter/rutter-link@latest";
  var scripts = document.getElementsByTagName("script");
  if (scripts.length > 0) {
    scripts[0].parentNode.insertBefore(rutterScriptTag, scripts[0]);
  } else {
    document.body.appendChild(rutterScriptTag);
  }
})();

const RutterLoader = {
  loadScript: function (callback: any = exampleCallback) {
    var scriptTag = document.createElement("script");
    scriptTag.async = true;
    scriptTag.type = "text/javascript";
    scriptTag.src = "https://unpkg.com/@rutter/rutter-link@latest";
    scriptTag.onload = callback;

    var otherScripts = document.getElementsByTagName("script");
    if (otherScripts.length > 0) {
      otherScripts[0].parentNode.insertBefore(scriptTag, otherScripts[0]);
    } else {
      document.body.appendChild(scriptTag);
    }
  },
};

(window as any).RutterLoader = RutterLoader;
