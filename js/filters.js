(() => {
  const listEl = document.getElementById('examples-list');
  const filtersList = document.querySelectorAll('#filters > li > button');

  const newList = [...listEl.children];

  const filter = (e) => {
    let filteredList;
    if(e.target.dataset.filter === 'all') {
      filteredList = [...newList];
    } else {
      filteredList = newList.filter(el => el.dataset.type === e.target.dataset.filter);
    }
    listEl.replaceChildren(...filteredList);
  }

  filtersList.forEach(el => {
    el.addEventListener('click', filter);
  })


  
})();