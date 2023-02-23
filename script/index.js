// Make first group of buttons show/hide content about product plus second group of buttons
function openTab(evt, openTab, subTab) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    
    if(subTab) {
        var parent = evt.currentTarget.closest('.tabcontent');
        parent.style.display = "block";
        parent.className += " active";
    }
    
    const tab = document.getElementById(openTab);
    if(tab != null){
        tab.style.display = "block";
    }
    evt.currentTarget.className += " active";
}

// Make third group of buttons show only when second group is clicked

const btns = document.querySelectorAll('input');
const innerContent = document.querySelectorAll('.expdate');
const pt2t1v1 = document.querySelector("#p2t1v1");
const pt2t1v2 = document.querySelector("#p2t1v2");
const btnP2 = document.querySelector("#a1arquivo");
const p2 = document.querySelector("#ecpf");
const priceP2 = document.querySelector("#priceecpfa1arq12m");
const meses12 = document.querySelector("#p2t112meses");
pt2t1v1.style.display = "none"
pt2t1v2.style.display = "none"

p2.addEventListener("click", ()=>{
    const p2Active = document.querySelector("#ecpfcontent");
    p2Active.className += " active"
    p2.className += " active"
    meses12.className += " active"
    pt2t1v1.style.display = "block"
    priceP2.style.display = "block"

});


btnP2.addEventListener("click", ()=>{
    pt2t1v1.style.display = "none"
    pt2t1v2.style.display = "none"
})


btns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        //innerContent.forEach(content=>content.style.display = 'none');
        const contentData = document.querySelector('.expdate[data-content='+btn.dataset.btn+']');
        if(contentData != null){
            contentData.style.display = "block";
        }
    });
});

// Get the element with id="" and click on it to go as default open
document.getElementById("ecpf").click();

