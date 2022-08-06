'use strict'
// floor structure start
const body = document.querySelector(".main-components");
const header = document.createElement("header");
const main = document.createElement("main")
const footer = document.createElement("footer")
// floor structure end 

// header start
const LINKS = ["HOME", "ABOUT", "PHOTOS", "CONTACT"];
const navigation = document.createElement("nav");
const unorderedListForNav = document.createElement("ul");
const siteLogo = document.createElement("img");
siteLogo.src= `./assets/img/avatar_smoke.jpeg`
const siteLogoListItem = document.createElement("li");
siteLogoListItem.appendChild(siteLogo);
unorderedListForNav.appendChild(siteLogoListItem);
LINKS.forEach(function (link) {
    const anchor = document.createElement("a");
    const navLiLogo = document.createElement("i");
    navLiLogo.classList.add("navLogos")
    const listItem = document.createElement("li");
    anchor.innerText = link;
    anchor.href = `./${link}.html`;
    listItem.appendChild(navLiLogo)
    listItem.appendChild(anchor);
    unorderedListForNav.appendChild(listItem)
})
navigation.appendChild(unorderedListForNav) 
header.appendChild(navigation)


const fontAwesomeLinks = ["fa fa-home", "fa fa-user", "fa fa-eye", "fa fa-envelope" ]

const navLiLogos = document.querySelectorAll('.navLogos')



// header end

// main start
const mainHeader = document.createElement('h1')
mainHeader.innerHTML = "I'm John Doe."
main.appendChild(mainHeader)




// main end 







body.appendChild(header)
body.appendChild(main)
body.appendChild(footer)