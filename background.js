chrome.runtime.onInstalled.addListener(() => { console.log('AI New Tab installed'); chrome.storage.local.set({ remaining: 3, isPro: false }); });
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => { if (request.action === 'checkPro') { chrome.storage.local.get(['isPro'], (result) => { sendResponse({ isPro: result.isPro || false }); }); return true; } });
