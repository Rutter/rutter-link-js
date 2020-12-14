const callback = () => {
  console.log("I JUST FINISHED LOADING");
};

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
