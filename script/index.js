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
    document.getElementById(openTab).style.display = "block";
    evt.currentTarget.className += "active";
}

// Make third group of buttons show only when second group is clicked

const btns = document.querySelectorAll('input');
const innerContent = document.querySelectorAll('.expdate');

btns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
    innerContent.forEach(content=>content.style.display = 'none');
    document.querySelector('.expdate[data-content='+btn.dataset.btn+']').style.display = "block";
});
});

// Get the element with id="" and click on it to go as default open
document.getElementById("ecpf").click();