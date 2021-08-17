const courses = [
    {
        name: "Complete ReactJS course",
        price: "2.3"
    },
    {
        name: "Complete Angular course",
        price: "2.7"
    },
    {
        name: "Complete MERN course",
        price: "2.5"
    },
    {
        name: "Complete c++ course",
        price: "2.2"
    },
    {
        name: "Complete NordJS course",
        price: "2.9"
        
    },
    {
        name: "Django course",
        price: "3.9"
        
    },
];

function generateList(){
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";   //it will reset
    courses.forEach( courses => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(courses.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");

        const price = document.createTextNode("$ " + courses.price);
        span.appendChild(price);

        li.appendChild(span);

        ul.appendChild(li);

    });
}

// generateList();

window.addEventListener("load", generateList);

const button = document.querySelector(".lowToHigh-btn")

button.addEventListener("click", () => {
    courses.sort( (a, b) => a.price - b.price);
    generateList();
})


const button2 = document.querySelector(".highToLow-btn")

button2.addEventListener("click", () => {
    courses.sort( (a, b) => b.price - a.price);

    generateList();
})