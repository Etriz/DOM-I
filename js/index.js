const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
const navLinks=document.querySelectorAll('a')
navLinks.forEach(item=>item.style.color='green')
navLinks[0].textContent=siteContent['nav']['nav-item-1']
navLinks[1].textContent=siteContent['nav']['nav-item-2']
navLinks[2].textContent=siteContent['nav']['nav-item-3']
navLinks[3].textContent=siteContent['nav']['nav-item-4']
navLinks[4].textContent=siteContent['nav']['nav-item-5']
navLinks[5].textContent=siteContent['nav']['nav-item-6']
const nav=document.getElementsByTagName('nav')
const firstLink=document.createElement('a')
firstLink.textContent="FirstLink"
firstLink.style.color='green'
nav[0].prepend(firstLink)
const lastLink=document.createElement('a')
lastLink.textContent="LastLink"
lastLink.style.color='green'
nav[0].appendChild(lastLink)
// navLinks.forEach(item=>item.textContent=Object.values(siteContent['nav']))
const ctaText=document.getElementsByClassName("cta-text")
ctaText[0].firstElementChild.textContent=siteContent['cta']['h1']
ctaText[0].lastElementChild.textContent=siteContent['cta']['button']
const ctaImg=document.getElementById("cta-img")
ctaImg.setAttribute('src', siteContent['cta']["img-src"])
const textContent = document.getElementsByClassName("text-content")
textContent[0].firstElementChild.textContent=siteContent['main-content']["features-h4"]
textContent[0].lastElementChild.textContent=siteContent['main-content']["features-content"]
textContent[1].firstElementChild.textContent=siteContent['main-content']["about-h4"]
textContent[1].lastElementChild.textContent=siteContent['main-content']["about-content"]
textContent[2].firstElementChild.textContent=siteContent['main-content']["services-h4"]
textContent[2].lastElementChild.textContent=siteContent['main-content']["services-content"]
textContent[3].firstElementChild.textContent=siteContent['main-content']["product-h4"]
textContent[3].lastElementChild.textContent=siteContent['main-content']["product-content"]
textContent[4].lastElementChild.textContent=siteContent['main-content']["vision-content"]
textContent[4].firstElementChild.textContent=siteContent['main-content']["vision-h4"]
const middleImg=document.getElementById('middle-img')
middleImg.setAttribute('src',siteContent['main-content']["middle-img-src"])
const contact=document.getElementsByClassName('contact')
const contactChildren=contact[0].children
contactChildren[0].textContent=siteContent['contact']["contact-h4"]
contactChildren[1].textContent=siteContent['contact']["address"]
contactChildren[2].textContent=siteContent['contact']["phone"]
contactChildren[3].textContent=siteContent['contact']["email"]
const footer=document.getElementsByTagName('footer')
footer[0].firstElementChild.textContent=siteContent['footer']["copyright"]

const stretchButton=document.createElement('button')
const body=document.getElementsByTagName('body')
stretchButton.textContent="Stretch Button"
ctaText[0].appendChild(stretchButton)
const stretchClick =()=>{
  const startText=siteContent['cta']['h1']
  if(stretchButton.textContent==='Stretch Button'){
    stretchButton.textContent="Test Complete"
    stretchButton.style.background="black"
    stretchButton.style.color="#bada55"
    ctaText[0].firstElementChild.textContent='This Is Only A Test'
  }
  else{
    stretchButton.textContent="Stretch Button"
    stretchButton.style.background="white"
    stretchButton.style.color="black"
    ctaText[0].firstElementChild.textContent=startText
  }
}
stretchButton.addEventListener('click', stretchClick)