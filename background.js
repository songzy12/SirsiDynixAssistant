function extractInfoFromPage() {
  let result = '';

  let copy_info = document.querySelector(".copy_info");
  result += copy_info.innerText + '\n'

  let holdingslists = document.querySelectorAll(".holdingslist");
  row_content = ''
  for (let i = 0; i < holdingslists.length; i++) {
      row_content += holdingslists[i].innerText + '\t';
      if (i % 4 == 3) {
          result += row_content + '\n'
          row_content = ''
      }
  }

  let textarea = document.createElement('textarea');
  textarea.style.width = '750px';
  textarea.style.height = '350px';
  document.body.parentNode.insertBefore(textarea, document.body);
  textarea.value = result;
  textarea.select();
  document.execCommand('copy');
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: extractInfoFromPage,
  });
});
