/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/
const before = performance.now();
/* vars that will use alot*/
/*start*/
const navbarList = document.getElementById("navbar__list");
const sec = document.querySelectorAll("section");
const secNum = sec.length;
/*sen of vars*/

/*function to trigger the section you want*/
function nav() {
    for (let i = 1; i < secNum+1; i++) {
        let liNew = document.createElement("li");
        liNew.innerText = `Section ${i}`;
        //liNew.setAttribute("href", `#section${i}`);
        liNew.setAttribute("id", `sectionClass${i}`);
        const sect = document.getElementById(`section${i}`);
        liNew.addEventListener("click", goto = () =>  sect.scrollIntoView({
            behavior: 'smooth'}));
        //liNew.addEventListener("click", goto = () => window.location.href = `#section${i}`);
        navbarList.appendChild(liNew);
        
     
    }
}
/* end of triggred func*/


const middile = performance.now();


/*function to make the active class*/
function activeClass() {
    for (let i = 0; i < secNum; i++) {
        let rectNw = document.getElementById(`section${i + 1}`)
        let activeLiSec = document.getElementById(`sectionClass${i + 1}`);
        let rect = rectNw.getBoundingClientRect();
        if (rect.top <= 470 && rect.top >= -200) {
            activeLiSec.classList.add("activesec")
            rectNw.classList.add("your-active-class");
        } else {
            activeLiSec.classList.remove("activesec")
            rectNw.classList.remove("your-active-class");
        }
        
    }
    
    
}
/*end of active class func.*/



/* nav hide */
var isScrolling;
window.addEventListener('scroll', function () {

    
    window.clearTimeout(isScrolling);
    document.getElementById("page__header").style.display = "block";
  
    isScrolling = setTimeout(function () {

        document.getElementById("page__header").style.display = "none";

    }, 5000);

}, false);

/*    nav hide end    */



/* call funcs */
nav();
activeClass();
/* */


const after = performance.now();

