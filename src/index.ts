// import foundit from "./sites/foundit/foundit"
// import instahyre from "./sites/instahyre/instahyre"
import * as foundit from './sites/foundit/foundit';

const INSTAHYRE='INSTAHYRE'
const FOUNDIT='FOUNDIT'
const currentUrl = window.location.href
let currentSite = ''

console.log(foundit,">>>>DSfdsbfjsvsbv", currentUrl)
if(currentUrl.includes('instahyre'))
    currentSite=INSTAHYRE
if(currentUrl.includes('foundit'))
    currentSite=FOUNDIT

switch(currentSite){
    case INSTAHYRE :  
        // instahyre();
        break;
    case FOUNDIT :  
    // foundit.foundit();
        break;
}

console.log(foundit,">>>>DSfdsbfjsvsbv", currentUrl)