/*  ==> closing the tab --> session storage clear
    ==> local storage remain until manually deleted.
*/const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id')
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value')
    const value = valueInput.value;

    // 
    if (id && value) {
        localStorage.setItem(id, value);
    }
    idInput.value = '';
    valueInput.value = '';

}

const clearLocalStorage = () => {
    localStorage.clear();
}

document.getElementById('storage-value').addEventListener('keypress', function (e) {
    // console.log(e.key);
    if (e.key === 'Enter') {
        // code for enter
        addToLocalStorage();
    }
});



/* 
for array & object =>
==>setItem------- JSON.stringify()
==>getItem--------JSON.parse()
*/