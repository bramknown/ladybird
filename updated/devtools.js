const devtoolsMode = document.querySelector("#devtools-mode");

devtoolsMode.addEventListener("change", () => {
    ladybird.sendMessage("setDevToolsMode", devtoolsMode.value);
});

document.addEventListener("WebUIMessage", event => {
    if (event.detail.name !== "loadSettings") {
        return;
    }

    devtoolsMode.value = event.detail.data.devtoolsMode || "docked-console";
});
