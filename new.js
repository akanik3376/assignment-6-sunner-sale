
const nav = () => {
    const navBar = document.getElementById('nav-bar');

    const div = document.createElement('div')
    div.innerHTML = `
    <div class="navbar bg-base-100">
<div class="navbar-start gap-3 ">
    <img class='' src="img/fi_3039386.svg" alt="">
    <h1 class="sm:text-2xl sm:block md:text-4xl lg:text-4xl font-bold"><span class="text-red-600"> PH</span> Tube</h1>
</div>
<div class="navbar-center">
<a  class="btn btn-ghost normal-case text-xl ">Sort by view</a>
</div>
<div class="navbar-end">

<button id='blog' class="btn bg-red-600 font-bold" onclick='addBlog()'> Blog</button>
</div>

</div >
    <hr class='border border-3px'>   
     `
    navBar.appendChild(div)

}

const btn = document.getElementById('blog');

const clicKBtn = () => {
    console.log('bt')
}
// if ()


const blogsContainer = document.getElementById('blogs')
blogsContainer.innerHTML = '';
const addBlog = () => {


    const newDiv = document.createElement('div');

    newDiv.innerHTML = `
    <div class="var-container mt-5 md:8 lg:mt-12 sm:p-5">

    <header>
        <h1 class="text-5xl font-medium"> Discuss the scope of var, let, and const...</h1>
        <h1 class="text-5xl mt-5 font-semibold">Var</h1>
        <p class="my-5">
            Before the advent of ES6, var declarations ruled. There are issues associated with
            variables
            declared with var, though. That is why it was necessary for new ways to declare
            variables to
            emerge. First, let's get to understand var more before we discuss those issues.</p>
    </header>
    <main class="mt-6">
        <h3 class="text-3xl">Scope of var</h3>
        <p>Scope essentially means where these variables are available for use. var declarations are
            globally
            scoped or function/locally scoped.

            The scope is global when a var variable is declared outside a function. This means that
            any
            variable
            that is declared with var outside a function block is available for use in the whole
            window.

            var is function scoped when it is declared within a function. This means that it is
            available and
            can be accessed only within that function.</p>

    </main>


</div>
<!-- let container  -->
<div class="let-container mt-5 md:8 lg:mt-12">
    <header>

        <h1 class="text-5xl mt-5 font-semibold">Let</h1>
        <p class="my-5">

            let is now preferred for variable declaration. It's no surprise as it comes as an
            improvement to var declarations. It also solves the problem with var that we just
            covered.
            Let's consider why this is so.</p>
    </header>
    <main class="mt-6">
        <h3 class="text-3xl">let is block scoped</h3>
        <p>A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within
            curly braces is a block.

            So a variable declared in a block with let is only available for use within that block.
        </p>

    </main>
</div>
<!-- const container  -->
<div class="const-container mt-5 md:8 lg:mt-12">
    <header>

        <h1 class="text-5xl mt-5 font-semibold">Const</h1>
        <p class="my-5">
            Variables declared with the const maintain constant values. const declarations share
            some similarities with let declarations.</p>
    </header>
    <main class="mt-6">
        <h3 class="text-3xl">const declarations are block scoped</h3>
        <p>Like let declarations, const declarations can only be accessed within the block they were
            declared.Const cannot be updated or re-declared
            This means that the value of a variable declared with const remains the same within its
            scope. It cannot be updated or re-declared.</p>

    </main>
</div>
`
    blogsContainer.appendChild(newDiv)
}






nav()