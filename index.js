
// navbar section

const handelBtn = () => {
    window.location.href = 'blog.html'
}

const handelSortView = () => {

    const sortBtn = async (id) => {

        const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
        const data = await response.json();

        if (data && data.data && Array.isArray(data.data)) {
            const allViews = data.data.map(item => item.others.views);
            // console.log(allViews)
            const short = (a, b) => {
                const viewsA = parseFloat(a);
                const viewsB = parseFloat(b);

                return viewsB - viewsA

            }
            const Views = allViews.sort(short);
            getCategory("1000")
            console.log(Views)


        } else {
            console.log('No valid data found.');
        }

    }

    sortBtn(1000);
}

const handelAllCategory = async () => {
    const responce = await fetch(`https://openapi.programming-hero.com/api/videos/categories`)
    const data = await responce.json();
    AllCategory = await data.data;
    // console.log(AllCategory)

    const btnContainer = document.getElementById('btn-container')
    AllCategory.forEach(category => {
        // console.log(category.category_id)

        // if (category.innerHTML = '') {
        //     console.log('empty')
        // }
        const btn = document.createElement('div');


        btn.innerHTML = `
        <a onclick = " getCategory('${category.category_id}')" class="tab btn md:text-xl sm:text-xl lg:text-2xl text-black"">${category.category}</a>

        `
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
            let time = singleData?.others?.posted_date;
            // console.log(time)
            // console.log(singleData.others.views)s
            // set time

            let total = time;
            function timeConvert(x) {
                if (!total) {
                    return ''

                } else {
                    const hours = Math.floor(total / 3600);
                    const min = Math.floor((total % 3600) / 60)
                    return (`${hours} hrs ${min} min ago`)
                }
                // console.log('houres:' + hours + "minit:" + min)
            }

            // timeConvert(total)


            const div = document.createElement('div');
            div.innerHTML = `
            <div class=" bg-base-100 border">
                
                    <figure><img class="w-full h-36 rounded relative" src="${singleData.thumbnail}" alt="" /></figure>
                    <p  class='absolute bg-black text-white  px-1 -mt-8'>${timeConvert(total)}</p>
                   
                
                <div class="">
                    <div class="flex items-center gap-4 mt-3 text-2xl">
                    <div class="avatar online">
                        <div class="w-14 rounded-full">
                            <img src="${singleData.authors[0].profile_picture}" />
                        </div>
                    </div>
                    <p>${singleData.title}</p>
                    </div>
                    
                    <p class='flex gap-3 items-center mt-2'>${singleData.authors[0].profile_name}
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


