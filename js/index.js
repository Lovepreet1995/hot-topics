// printing shortcut
const p = console.log;

// GET THE REFERENCES
const container = document.querySelector(".main-content");
const links = document.querySelectorAll(".links");

// CREATE THE OBJECT TO STORE THE LOADED CONTENT
const contents = {};

// USE fetch() TO LOAD home.html ON THE PAGE-LOAD.
fetch("./partials/home.html").then(function (response) {
    return response.text();
    // STORE THE LOADED CONTENT INTO contents AS A 
    // NEW PROPERTY OF contents WITH THE KEY:
}).then(function (info) {
    container.innerHTML = info;
})

// CREATE THE FUNCTION
function storeContents(urlVal) {

    // IF contents OBJECT DOESN'T HAVE A PROPERTY WITH
    // THE KEY THAT IS THE VALUE OF href ATTRIBUTE OF 
    // THE CLICKED LINK - LIKE THIS:
    if (!contents[urlVal]) {
        // IF SO:
        fetch(urlVal)
        // GET THE RESPONSE
            .then(function (response) {
                return response.text();
            })
            // PASS THE DATA TO contents[urlVal]
            .then(function (info) {
                contents[urlVal] = info;
                // PASS THE contents[urlVal] TO $container
                container.innerHTML = contents[urlVal];
            })
    // ELSE:
    } else {
        // THIS MEANS contents OBJECT ALREADY 
         // HAS THIS PROPERTY AND YOU JUST NEED 
         // TO PASS ITS VALUE TO $container
        container.innerHTML = contents[urlVal];
    }
};

// CREATE THE FUNCTION THAT WILL HANDLE A LINK-CLICK:
function handleClick(e) {
    // stops directing user to specified location
    e.preventDefault();
    let url = e.target.href;
    storeContents(url);
};

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", handleClick);
}
