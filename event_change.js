console.clear();
//const input= document.querySelector("input[name=name]");
//input.addEventListener("change", inputValue);

//function inputValue(event){
    //console.log(event.target.value);
    //console.log(event.target.className);
//}

const course= document.querySelectorAll("input[name=course]");
//console.log(course);
Array.from(course).map((course) => {
    course.addEventListener("change",courseHandelar)
});

function courseHandelar(event){
    if (event.target.checked){
        console.log(event.target.value);
    }
};