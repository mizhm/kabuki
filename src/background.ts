chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == "complete") {
    let id = tab.url?.split("?id=")[1];
    chrome.tabs.sendMessage(tab.id!, { id });
    // console.log("Loading completed");
  }
});

// chrome.webRequest.onCompleted.addListener(
//   (detail) => {
//     if (detail.url.search("answer") != -1) {
//       (async () => {
//         const [tab] = await chrome.tabs.query({
//           active: true,
//           lastFocusedWindow: true,
//         });
//         const response = await chrome.tabs.sendMessage(tab.id!, {
//           greeting: "hello",
//         });
//         console.log(response);
//       })();
//     }
//   },
//   { urls: ["*://eop.edu.vn/study/task*"] },
// );
