import copy from 'copy-to-clipboard'

const copySimpleUrl = () => {
  const url = window.location.origin + window.location.pathname.match(/(\/dp|\/d)\/[A-Za-z0-9]+/)[0]
  copy(url)
}

chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
  if (request == 'copy') {
    copySimpleUrl()
  }
})
