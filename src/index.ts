import foundit from "./sites/foundit/foundit"
import instahyre from "./sites/instahyre/instahyre"

const INSTAHYRE='INSTAHYRE'
const FOUNDIT='FOUNDIT'
const currentUrl = window.location.href
let currentSite = ''

if(currentUrl.includes('instahyre'))
    currentSite=INSTAHYRE
if(currentUrl.includes('foundit'))
    currentSite=FOUNDIT

switch(currentSite){
    case INSTAHYRE :  
        instahyre();
        break;
    case FOUNDIT :  
        foundit();
        break;
}