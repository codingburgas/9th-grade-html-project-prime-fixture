document.addEventListener("DOMContentLoaded", function() {

  const unreadCountEl = document.querySelector('.unreadCount')
  const cards = document.querySelectorAll('.notificationCard')
  const filterBtn = document.querySelector('.filterButton')
  const filterPopup = document.querySelector('.filterPopup')
  const readAllBtn = document.querySelector('.readallButton')
  const filterCheckboxes = document.querySelectorAll('.filterOption')

  function updateUnreadCount() {
    const unread = [...cards].filter(card =>
      card.dataset.read === "false" && card.style.display !== "none"
    )
    unreadCountEl.textContent = unread.length
    unreadCountEl.style.display = unread.length ? 'flex' : 'none'
  }

  function applyFilters() {
    const activeTags = [...filterCheckboxes]
      .filter(c => c.checked)
      .map(c => c.value)

    cards.forEach(card => {
      const tag = card.dataset.tag
      card.style.display = activeTags.includes(tag) ? 'flex' : 'none'
    })

    updateUnreadCount()
  }

  cards.forEach(card => {
    const check = card.querySelector('.notificationTimeAndAction .material-symbols-outlined')
    const dot = card.querySelector('.dot')
    const deleteBtn = card.querySelector('.deleteIcon')

    check.addEventListener('click', () => {
      card.dataset.read = "true"
      if (dot) dot.style.display = 'none'
      updateUnreadCount()
    })

    deleteBtn.addEventListener('click', () => {
      card.classList.add('fade-out')

      setTimeout(() => {
        card.style.display = 'none'
        updateUnreadCount()
      }, 400)
    })
  })

  readAllBtn.addEventListener('click', () => {
    cards.forEach(card => {
      card.dataset.read = "true"
      const dot = card.querySelector('.dot')
      if (dot) dot.style.display = 'none'
    })

    updateUnreadCount()
  })

  filterBtn.addEventListener('click', () => {
    filterPopup.style.display = (filterPopup.style.display === 'none')
      ? 'block' : 'none'
  })

  filterCheckboxes.forEach(cb => {
    cb.addEventListener('change', applyFilters)
  })

  updateUnreadCount()
  applyFilters()

})
