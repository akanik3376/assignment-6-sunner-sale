
// navbar section
// const nav = () => {
//     const navBar = document.getElementById('nav-bar');

//     const div = document.createElement('div')
//     div.innerHTML = `
//     <div class="navbar bg-base-100">
// <div class="navbar-start">
// <img src="img/fi_3039386.svg" alt="">
// <h1 class="text-6xl font-bold"><span class="text-red-600"> PH</span> Tube</h1>
// </div>
// <div class="navbar-center">
// <a class="btn btn-ghost normal-case text-xl">Sort by view</a>
// </div>
// <div class="navbar-end">

// <button class="btn bg-red-600 font-bold"> Blog</button>
// </div>

// </div >
//     <hr>   
//      `
//     navBar.appendChild(div)
// }

// nav()

const handelAllCategory = async () => {
    const responce = await fetch(`https://openapi.programming-hero.com/api/videos/categories`)
    const data = await responce.json();
    AllCategory = await data.data;
    // console.log(AllCategory)

    const btnContainer = document.getElementById('btn-container')
    AllCategory.forEach(category => {
        console.log(category.category_id)

        // if (category.innerHTML = '') {
        //     console.log('empty')
        // }
        const btn = document.createElement('div');


        btn.innerHTML = `<button onclick='getCategory("${category.category_id}")' class="btn ">


            ${category.category}</button > `
        btnContainer.appendChild(btn)


    });

}




const getCategory = async (dataId) => {
    const responce = await fetch(`https://openapi.programming-hero.com/api/videos/category/${dataId}`)
    const data = await responce.json();
    const getAll = data.data;

    // console.log(getAll.length)


    const alldataContainer = document.getElementById('alldata-Container');
    alldataContainer.innerHTML = '';

    const emptyDiv = document.getElementById('empty-div');
    emptyDiv.innerHTML = '';


    if (getAll.length !== 0) {
        getAll.forEach(singleData => {
            console.log(singleData.title
            )
            const div = document.createElement('div');
            div.innerHTML = `
            <div class=" bg-base-100 border">
                
                    <figure><img class="w-full h-36 rounded" src="${singleData.thumbnail}" alt="" /></figure>
                    
                
                <div class="">
                    <div class="flex items-center gap-4 mt-3 text-2xl">
                    <div class="avatar online">
                        <div class="w-14 rounded-full">
                            <img src="${singleData.authors[0].profile_picture}" />
                        </div>
                    </div>
                    <p>${singleData.title}</p>
                    </div>
                    
                    <p class='flex justify-between items-center mt-2'>${singleData.authors[0].profile_name}
                        ${singleData.authors[0].verified ? true ? '<img src="./img/fi_10629607.svg"></img>' : false : ''}
                    </p>
                    <p>${singleData.others.views}</p>
                </div>
                `
            alldataContainer.appendChild(div)
        })
    }
    else {
        const emptyItem = document.createElement('div');
        emptyItem.innerHTML = `
            <div>
                <div class="flex justify-center">
                <img src="./img/fi_5301987.svg" alt="">
                </div>
                <h2 class="text-center font-bold text-5xl">Oops!! Sorry, There is no <br> content here</h2>
             </div>
            `
        emptyDiv.appendChild(emptyItem)
    }


    // console.log(data.data[0].title)
}



handelAllCategory()
getCategory("1000")


