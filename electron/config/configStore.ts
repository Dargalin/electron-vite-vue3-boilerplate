const Store = require("electron-store");
const storage = new Store();

function getWindowBounds() {
  const defaultWindowSize = [800, 600];
  const windowSize = storage.get("windowSize");
  if (windowSize) return windowSize;
  return defaultWindowSize;
}

function saveWindowBounds(windowSize: number[]) {
  storage.set("windowSize", windowSize);
}

export { getWindowBounds, saveWindowBounds };
