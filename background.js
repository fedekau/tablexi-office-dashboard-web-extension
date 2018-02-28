chrome.browserAction.setBadgeText({text:" "});
chrome.browserAction.setBadgeBackgroundColor({color: [255, 0, 0, 255]});

window.addEventListener('message', (event) => {
  if (!event.data) {
    return;
  }

  const data = JSON.parse(event.data);

  console.log(event.data);

  if (data.status === 'CLOSED') {
    chrome.browserAction.setBadgeBackgroundColor({color: [255, 0, 0, 255]});
  } else if (data.status === 'OPEN') {
    chrome.browserAction.setBadgeBackgroundColor({color: [0, 128, 0, 255]});
  }
});
