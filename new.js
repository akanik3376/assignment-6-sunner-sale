
const drawing = async () => {
    console.log(getAll)
    const x = getAll.length;
    if (x === 0) {
        const alldataContainer = document.getElementById('alldata-Container');
        const div = document.createElement('div');
        div.innerHTML = ` <h2 class="card-title">Building a Winning UX Strategy Using the Kano Model</h2>`
        alldataContainer.appendChild(div)
    }
}





