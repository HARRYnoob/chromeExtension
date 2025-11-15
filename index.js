
const button = document.getElementById("btn");
const input = document.getElementById("typeBox");
const output = document.getElementById("divv");
const button2 = document.getElementById("buton");
const saveTab = document.getElementById("save-tab");
const moveInfo = JSON.parse(localStorage.getItem("info"));

let savedInfo  = [];
if (moveInfo){
    savedInfo = moveInfo;
    render(savedInfo);
}
console.log("new git trial");


saveTab.addEventListener("click",function(){
    chrome.tabs.query({active : true,currentWindow : true}, function(tabs){
        savedInfo.push(tabs[0].url);
        localStorage.setItem("info",JSON.stringify(savedInfo))
        render(savedInfo);
    })

})

button2.addEventListener("dblclick",function(){
localStorage.clear();
savedInfo = [];
render(savedInfo);
})
button.addEventListener("click",function(){
    if (input.value){savedInfo.push(input.value)};
    localStorage.setItem("info", JSON.stringify(savedInfo))
    render(savedInfo)
})
function render(array){
    let str="";
 for(let i=0;i<array.length;i++){
     str += `<li>${array[i]}</li>`
 }
    output.innerHTML = str;
}