const buttons = document.querySelectorAll('button.new-tab')

buttons.forEach(button => {
  const href = button.dataset.href

  button.addEventListener('click', () => {
    chrome.tabs.create({ 
      url: href,
      active: true
    })
  })
})