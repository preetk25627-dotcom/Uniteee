//  let d=document.getElementById("box")
//         d.addEventListener("mouseover",function(){
//             d.style.backgroundColor="green"

           

//         })
//         d.addEventListener("mouseout",function(){
//             d.style.backgroundColor="red"
//         })

// let d=document.addEventListener("keydown",function(event){
//     console.log("You pressed"),event.  key;

// });
// const d=document.getElementById("email");
// const emailerror=document.getElementById("email-error");
// d.addEventListener("input",function(){
//     if (d.value.includes("@")){
//         emailerror.textContent="";
//     }
//     else{
//         emailerror.textContent="invalid"
//     }

// })
const searchBox=document.getElementsByClassName("search-box")[0].querySelector("input");
const suggestions=document.getElementById("suggestions");
searchBox.addEventListener("input",function(){
    suggestions.innerHTML=`
    <li>${searchBox.value} 1</li>
    <li>${searchBox.value} 2</li>`


});

