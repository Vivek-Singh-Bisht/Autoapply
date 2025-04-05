import { FOUNDIT, INSTAHYRE, LINKEDIN } from "./constants/constants"
import foundit from "./sites/foundit/foundit"
import instahyre from "./sites/instahyre/instahyre"
import linkedin from "./sites/linkedin/linkedin"


const currentUrl = window.location.href
let currentSite = ''

if (currentUrl.includes('instahyre'))
    currentSite = INSTAHYRE
if (currentUrl.includes('foundit'))
    currentSite = FOUNDIT
if (currentUrl.includes('linkedin'))
    currentSite = LINKEDIN

switch (currentSite) {
    case INSTAHYRE:
        instahyre();
        break;
    case FOUNDIT:
        foundit();
        break;
    case LINKEDIN:
        linkedin();
        break;
}