function extractInfoFromPage() {
  let result = '';

  // 题名
  let title = document.querySelectorAll(".title");
  // 著者
  let author = document.querySelectorAll(".author");
  // 出版者
  let publisher = document.querySelectorAll(".publisher");
  // 索书号
  let call_number = document.querySelectorAll(".call_number");

  if (call_number.length) {
    for (let i = 0; i < title.length; i++) {
      result += [title[i].innerText, author[i].innerText, publisher[i].innerText, call_number[i].innerText].join('\t') + '\n'
    }
  } else {
    // 馆藏分布状况
    copy_info =  document.querySelector(".copy_info");
    result += copy_info.innerText + '\n'

    // 馆藏
    // holdingsheader = document.querySelector(".holdingsheader");
    // result += holdingsheader.innerText +'\n'
    
    let holdingslists = document.querySelectorAll(".holdingslist");
    for (let i = 0; i < holdingslists.length; i += 4) {
      // 索书号，复本号，馆藏类型，馆藏位置
      result += [holdingslists[i].innerText, holdingslists[i + 1].innerText, holdingslists[i + 2].innerText, holdingslists[i + 3].innerText].join('\t') + '\n'
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
