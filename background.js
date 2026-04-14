async function runInspector(tabId) {
  if (!tabId) return;

  try {
    await chrome.scripting.executeScript({
      target: { tabId },
      files: ['contentScript.js']
    });
  } catch (error) {
    console.error('a11y-chats: failed to inject content script', error);
  }
}

chrome.action.onClicked.addListener((tab) => {
  runInspector(tab?.id);
});
