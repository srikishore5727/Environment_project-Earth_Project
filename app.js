let $climate=document.getElementById("climate")
let $consumption=document.getElementById("consumption")
let $resources=document.getElementById("resources")
let $people=document.getElementById("people")
let $frame=document.getElementById("frame")
let $save_msg=document.getElementById("save")

console.log(document)

$climate.onclick=()=>{
    $climate.style.backgroundColor="#2F80ED";
    $consumption.style.backgroundColor="transparent";
    $resources.style.backgroundColor="transparent";
    $people.style.backgroundColor="transparent";
    document.body.style.backgroundImage="url(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png)"
    $frame.src="https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    $save_msg.innerText="Do your bit! Save trees, use renewable energy soureces and prefer to travel green."


}

$consumption.onclick=()=>{
    $consumption.style.backgroundColor="#27AE60";
    $climate.style.backgroundColor="transparent";
    $resources.style.backgroundColor="transparent";
    $people.style.backgroundColor="transparent";
    document.body.style.backgroundImage="url(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png)"
    $frame.src="https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    $save_msg.innerText="Do your bit! Shop only what you need,eat only what you need and always save the left overs."
}

$resources.onclick=()=>{
    $resources.style.backgroundColor="#F2994A";
    $climate.style.backgroundColor="transparent";
    $consumption.style.backgroundColor="transparent";
    $people.style.backgroundColor="transparent";
    document.body.style.backgroundImage="url(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png)"
    $frame.src="https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    $save_msg.innerText="Do your bit! Avoid all things plastic. Believe in Reduce, Reuse and Recycle."
}

$people.onclick=()=>{
    $people.style.backgroundColor="#EB5757";
    $climate.style.backgroundColor="transparent";
    $resources.style.backgroundColor="transparent";
    $consumption.style.backgroundColor="transparent";
    document.body.style.backgroundImage="url(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png)"
    $frame.src="https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    $save_msg.innerText="Do your bit! Never waste  food.Rather offer it to people or animals who are in need."
}