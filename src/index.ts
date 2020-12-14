const exampleCallback = () => {
  console.log("I JUST FINISHED LOADING");
};

const rutterScriptTag = document.createElement("script");
rutterScriptTag.async = true;
rutterScriptTag.type = "text/javascript";
rutterScriptTag.src = "https://unpkg.com/@rutter/rutter-link@latest";
const scripts = document.getElementsByTagName("script");
if (scripts.length > 0) {
  scripts[0].parentNode.insertBefore(rutterScriptTag, scripts[0]);
} else {
  document.body.appendChild(rutterScriptTag);
}

var RutterLoader = {
  loadScript: function (callback: any = exampleCallback) {
    var scriptTag = document.createElement("script");
    scriptTag.async = true;
    scriptTag.type = "text/javascript";
    scriptTag.src = "https://unpkg.com/@rutter/rutter-link@latest";
    scriptTag.onload = callback;

    var scripts = document.getElementsByTagName("script");
    if (scripts.length > 0) {
      scripts[0].parentNode.insertBefore(scriptTag, scripts[0]);
    } else {
      document.body.appendChild(scriptTag);
    }
  },
};

window.RutterLoader = RutterLoader;
