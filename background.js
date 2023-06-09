const targetUrl = "https://example.com"; // replace with the URL of the desired tab

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url === targetUrl && changeInfo.status === 'complete') {
    setTimeout(() => {
      chrome.tabs.reload(tabId);
    }, 45 * 1000); // adjust how often you'd like the tab to refresh here
  }
});
