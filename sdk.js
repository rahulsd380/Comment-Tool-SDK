(function () {
  try {
    // Prevent loading twice
    if (window.commentToolLoaded) return;
    window.commentToolLoaded = true;

    // Get current script tag safely
    const scriptTag = document.currentScript;
    if (!scriptTag) {
      console.error("Comment SDK: Cannot find script tag.");
      return;
    }

    const projectId = scriptTag.getAttribute("data-project-id");
    if (!projectId) {
      console.error("Comment SDK: data-project-id is missing.");
      return;
    }

    // Create container
    const container = document.createElement("div");
    container.id = "comment-tool-root";
    container.style.position = "relative";
    container.style.zIndex = "999999";
    document.body.appendChild(container);

    // Load React app bundle
    const appScript = document.createElement("script");
    appScript.src = "https://yourdomain.com/commentApp.js";
    appScript.async = true;

    appScript.onload = function () {
      if (window.initCommentTool) {
        window.initCommentTool({ projectId });
      } else {
        console.error("Comment SDK: init function not found.");
      }
    };

    appScript.onerror = function () {
      console.error("Comment SDK: Failed to load commentApp.js");
    };

    document.body.appendChild(appScript);

  } catch (err) {
    console.error("Comment SDK Error:", err);
  }
})();