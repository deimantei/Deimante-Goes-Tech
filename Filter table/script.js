function filterBrand() {
    let brandValue = document.getElementById('brandfilter').value;
    let allRows = document.getElementById('tableRows').getElementsByTagName('tr');

    for(let i=0; i<allRows.length; i++) {
        let row = allRows[i];
        let rowBrandVal = row.getElementsByTagName('td')[0].innerText;
        if(brandvalue === '' || brandValue == rowBrandVal)
        row.hidden = false;
        else
        row.hidden = true;
    }
}

function addNewRow() {
    let newBrandVal = document.getElementById('newBrand').value;
    let newColorVal = document.getElementById('newColor').value
    let newRowElement = document.createElement('tr');
    let newBrandColumn = document.createElement('td');
    newBrandColumn.innerText = newBrandVal;
    let NewColColumn = document.createElement('td');
    NewColColumn.innerText = newColColumn;
    newRowElement.appendChild(newBeandColumn);
    newRowElement.appendChild(newColColumn);
    //truksta paskutines eilutes
}