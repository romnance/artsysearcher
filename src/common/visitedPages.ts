function addPage(item: string) {
    var existingItem = localStorage.getItem(item);
    if (typeof existingItem === 'string') {
        return
    } else { 
        localStorage.setItem(item, JSON.stringify(item))
    }
}

function checkPage(item : string) {
    var existingItem = localStorage.getItem(item);
    if (existingItem) {return true} 
    else {return false}
}

function resetHistory() {
    localStorage.clear();
}



const visitedPages = {
  addPage,
  checkPage,
  resetHistory
};

export default visitedPages;