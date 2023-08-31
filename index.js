
// navbar section
// const nav = () => {
//     const navBar = document.getElementById('nav-bar');

//     const div = document.createElement('div')
//     div.innerHTML = `
//     <div class="navbar bg-base-100">
//             <div class="navbar-start">
//                 logo
//             </div>
//             <div class="navbar-center">
//                 <a class="btn btn-ghost normal-case text-xl">Sort by view</a>
//             </div>
//             <div class="navbar-end">

//                 <button class="btn bg-red-600 font-bold"> Blog</button>
//             </div>
//         </div>
//     `
//     navBar.appendChild(div)
// }

// nav()

const handelAllCategory = async () => {
    const responce = await fetch(`https://openapi.programming-hero.com/api/videos/categories`)
    const data = await responce.json();
    AllCategory = await data.data;
    console.log(AllCategory)

    const btnContainer = document.getElementById('btn-container')
    AllCategory.forEach(category => {
        // console.log(category)
        const btn = document.createElement('div');


        btn.innerHTML = `<button onclick='getCategory("${category.category_id}")' class="btn ">
        
       
    ${category.category}</button>`
        btnContainer.appendChild(btn)

    });

}

const getCategory = async (dataId) => {
    const responce = await fetch(`https://openapi.programming-hero.com/api/videos/category/${dataId}`)
    const data = await responce.json();
    const getAll = data.data;
    // console.log(getAll)
    const alldataContainer = document.getElementById('alldata-Container');
    alldataContainer.innerHTML = ''
    getAll.forEach(singleData => {
        console.log(singleData)
        const div = document.createElement('div');
        div.innerHTML = `
        <div class=" bg-base-100 border">
                    <figure><img class="w-full h-36 rounded" src="${singleData.thumbnail}" alt="" /></figure>
                    <div class="my-2 p-3">
                        <h2 class="card-title p-0 flex">
                        <img class="w-14 rounded-full" src="${singleData.authors[0].profile_picture}" alt="" />
                        
                        <p class="">${singleData.title}</p></h2>
                        <p>${singleData.authors[0].profile_name}</p>
                        <p>${singleData.others.views}</p>
                    </div>
        `
        alldataContainer.appendChild(div)
    })

    // console.log(data.data[0].title)
}



handelAllCategory()
getCategory("1000")


