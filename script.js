//Highlights the selected links in the navbaR

//Highlights home link

const home=document.getElementById("home");
home.addEventListener('mouseover',()=>{
    home.style.backgroundColor="red"
});
home.addEventListener('mouseout', () => {
    home.style.backgroundColor = ""; 
});

//Highlights login or register link

const login=document.getElementById("login");
login.addEventListener('mouseover',()=>{
    login.style.backgroundColor="red"
});
login.addEventListener('mouseout', () => {
    login.style.backgroundColor = ""; 
});

//Highlights services link

const service=document.getElementById("service");
service.addEventListener('mouseover',()=>{
    service.style.backgroundColor="red"
});
service.addEventListener('mouseout', () => {
    service.style.backgroundColor = ""; 
});

//Highlights contact link

const contact=document.getElementById("contact");
contact.addEventListener('mouseover',()=>{
    contact.style.backgroundColor="red"
});
contact.addEventListener('mouseout', () => {
    contact.style.backgroundColor = ""; 
});

//Highlights community link

const community=document.getElementById("community");
community.addEventListener('mouseover',()=>{community
    community.style.backgroundColor="red"
});
community.addEventListener('mouseout', () => {
    community.style.backgroundColor = ""; 
});

//Highlights FAQ link

const faq=document.getElementById("faq");
faq.addEventListener('mouseover',()=>{
    faq.style.backgroundColor="red"
});
faq.addEventListener('mouseout', () => {
    faq.style.backgroundColor = ""; 
});

//Hightlights about link

const about=document.getElementById("about");
about.addEventListener('mouseover',()=>{
    about.style.backgroundColor="red"
});
about.addEventListener('mouseout', () => {
    about.style.backgroundColor = ""; 
});

//Navbar fade and unfade

const navbar=document.getElementById("nav");
navbar.addEventListener('mouseover',()=>{
    navbar.style.opacity=1
});
navbar.addEventListener('mouseout',()=>{
    
    const scrollposy=window.scrollY;
    const target=document.getElementById("nav");
    if(scrollposy<10)
    {
        target.style.opacity=1
    }
    else{
        navbar.style.opacity=0.76
    }
});

//Scroll to fade or unfade function

function scroller()
{
    const scrollposy=window.scrollY;
    const target=document.getElementById("nav");
    if(scrollposy>0)
    {
        target.style.opacity='0.76';
    }
    else{
        target.style.opacity='1';
    }
}
window.addEventListener('scroll',scroller);

