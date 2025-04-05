/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constants/constants.ts":
/*!************************************!*\
  !*** ./src/constants/constants.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FOUNDIT: () => (/* binding */ FOUNDIT),
/* harmony export */   INSTAHYRE: () => (/* binding */ INSTAHYRE),
/* harmony export */   LINKEDIN: () => (/* binding */ LINKEDIN),
/* harmony export */   quesionarie: () => (/* binding */ quesionarie)
/* harmony export */ });
const INSTAHYRE = 'INSTAHYRE';
const FOUNDIT = 'FOUNDIT';
const LINKEDIN = 'LINKEDIN';
const quesionarie = {
    // SALARY RELATED QUESTIONS
    'What is your Current (CTC) Salary ~ Rupees in LPA(Lakh Per Annum)': 15,
    'What is your Expected (ECTC) Salary ~ Rupees in LPA(Lakh Per Annum)': 18,
    "What's your current CTC in LPA": 15,
    "What's your expected CTC in LPA": 18,
    'What is your current in Hand Salary': 115000,
    'Your Current Salary (In LPA)': 15,
    'Expected Salary (In LPA)': 18,
    'What is your current CTC in lakhs': 15,
    'Expected annual CTC': 1800000,
    'current annual CTC': 1440000,
    'Current CTC': 1440000,
    'expected CTC': 1800000,
    'your CTC': 1440000,
    'annual CTC': 1440000,
    'ECTC': 1800000,
    'Expected CTC': 1800000,
    'CTC': 1440000,
    // NOTICE PERIOD RELATED QUESTIONS
    'How soon you can join': 30,
    'How immediate can you join': 30,
    'In how many days': 30,
    'No. of Days': 30,
    'you will be join': 30,
    'Your Notice Period': 30,
    'How many days is your notice period': 30,
    'What is your Notice Period': 30,
    'Notice Period': 30,
    'Notice period not more than 30 Days': 15,
    // EXPERIENCE RELATED QUESTIONS
    'How many years of': 3,
    'Experience': 3,
};


/***/ }),

/***/ "./src/sites/foundit/foundit.ts":
/*!**************************************!*\
  !*** ./src/sites/foundit/foundit.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const foundit = () => {
    console.log(">>>>>>>>>>>foundit running");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (foundit);


/***/ }),

/***/ "./src/sites/instahyre/instahyre.ts":
/*!******************************************!*\
  !*** ./src/sites/instahyre/instahyre.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const instahyre = () => {
    console.log(">>>>>>>>>>>instahyre running");
    setTimeout(() => {
        setInterval(() => {
            const applyBtn = document.querySelector('.btn.btn-lg.btn-primary.new-btn');
            console.log(">>>>>>>found apply button, Clikcking !!");
            applyBtn === null || applyBtn === void 0 ? void 0 : applyBtn.click();
        }, 3000);
    }, 1000);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instahyre);


/***/ }),

/***/ "./src/sites/linkedin/functions.ts":
/*!*****************************************!*\
  !*** ./src/sites/linkedin/functions.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyForJob: () => (/* binding */ applyForJob),
/* harmony export */   openAllFilters: () => (/* binding */ openAllFilters)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.ts");

const openAllFilters = () => new Promise((res) => {
    let allFiltersButtonInterval = setInterval(() => {
        let allFiltersButton = document.querySelector('[aria-label="Show all filters. Clicking this button displays all available filter options."]');
        if (allFiltersButton instanceof HTMLElement) {
            clearInterval(allFiltersButtonInterval);
            allFiltersButton.click();
            // change Filters From here
            setTimeout(() => { applyFilters({ sortByMostRecent: true, easyApply: true }, res); }, 500);
        }
    }, 500);
});
const applyFilters = ({ sortByMostRecent = true, easyApply = true }, res) => {
    let advanceFilterPanel = document.querySelector('[aria-labelledby="reusable-search-advanced-filters-right-panel"]');
    // sort by most recent
    if (sortByMostRecent && advanceFilterPanel) {
        let mostRecentToggle = advanceFilterPanel.querySelector('[for="advanced-filter-sortBy-DD"]');
        if (mostRecentToggle instanceof HTMLElement)
            mostRecentToggle.click();
    }
    // filter for easy apply
    if (easyApply && advanceFilterPanel) {
        let easyApplyToggleParent = advanceFilterPanel.querySelector('.artdeco-toggle--32dp');
        let easyApplyToggle = easyApplyToggleParent === null || easyApplyToggleParent === void 0 ? void 0 : easyApplyToggleParent.querySelector('.artdeco-toggle__button');
        if (easyApplyToggleParent instanceof HTMLElement && easyApplyToggle) {
            if (easyApplyToggle.getAttribute('aria-checked') === 'false')
                easyApplyToggleParent.click();
        }
    }
    //All filters applied -> SHOW RESULTS
    let showResultsButton = advanceFilterPanel && advanceFilterPanel.querySelector('.reusable-search-filters-buttons');
    if (showResultsButton instanceof HTMLElement) {
        let showButtonInterval = setInterval(() => {
            if (document.querySelector('[for="advanced-filter-sortBy-DD"]')) {
                showResultsButton = document.getElementsByClassName('reusable-search-filters-buttons')[0];
                showResultsButton instanceof HTMLElement && (showResultsButton === null || showResultsButton === void 0 ? void 0 : showResultsButton.click());
            }
            else {
                setTimeout(() => { res('All Filters Applied Successfully!'); }, 3000);
                clearInterval(showButtonInterval);
            }
        }, 500);
    }
};
const applyForJob = (job) => new Promise((res) => {
    var _a;
    let clickableElement = job.getElementsByClassName('job-card-container--clickable')[0];
    const companySpan = clickableElement.querySelector('span[dir="ltr"]');
    const companyName = companySpan instanceof HTMLElement && ((_a = companySpan.textContent) === null || _a === void 0 ? void 0 : _a.trim());
    console.log(">>>>>>>>>>>>1111->applying for", companyName);
    if (clickableElement instanceof HTMLElement) {
        setTimeout(() => {
            clickableElement.click();
            clickNextUntilReview();
        }, 500);
    }
    // click next until questionarie begins
    const clickNextUntilReview = () => setTimeout(() => {
        let jobApplyButton = document.querySelector('.jobs-apply-button');
        console.log(">>>>>>>>>>>222->jobApplyButton", jobApplyButton);
        jobApplyButton instanceof HTMLElement && jobApplyButton.click();
        let firstStepInterval = setInterval(() => {
            let ApplicationForm = Array.from(document.querySelectorAll('[aria-label]'))
                .find(el => { var _a; return (_a = el.getAttribute('aria-label')) === null || _a === void 0 ? void 0 : _a.includes('Your job application progress'); });
            const nextButton = document === null || document === void 0 ? void 0 : document.querySelector('[data-easy-apply-next-button]');
            const submitButton = document.querySelector('[aria-label="Submit application"]');
            if (nextButton instanceof HTMLElement) {
                console.log(">>>>>>>>>>>>>>>333->nextButton", nextButton);
                setTimeout(() => {
                    nextButton.click();
                    clearInterval(firstStepInterval);
                    startQuestionarie();
                }, 500);
            }
            if (submitButton instanceof HTMLElement) {
                console.log(">>>>>>>>>>>>>>>333->submitButton", submitButton);
                setTimeout(() => {
                    submitButton.click();
                    clearInterval(firstStepInterval);
                    completeApplication(res);
                }, 500);
            }
        }, 500);
    }, 500);
    // start questionarie
    const startQuestionarie = () => setTimeout(() => {
        setTimeout(() => {
            // there could be any of these review and next button
            let reviewButton = document === null || document === void 0 ? void 0 : document.querySelector('[data-live-test-easy-apply-review-button]');
            let nextButton = document === null || document === void 0 ? void 0 : document.querySelector('[data-live-test-easy-apply-next-button]');
            console.log(">>>>>>>>>>>reviewButton", reviewButton);
            reviewButton instanceof HTMLElement && reviewButton.click();
            nextButton instanceof HTMLElement && nextButton.click();
            FindErrorsAndFillDetails();
        }, 1000);
        // wait for error messages or proceed further
        const FindErrorsAndFillDetails = () => setTimeout(() => {
            var _a;
            let unfilledFields = document.querySelectorAll('.artdeco-inline-feedback__message');
            if (unfilledFields.length) {
                for (let i = 0; i < unfilledFields.length; i++) {
                    let unfilledParent = (_a = unfilledFields[i]) === null || _a === void 0 ? void 0 : _a.closest('.fb-dash-form-element');
                    if (unfilledParent) {
                        let selectElement = unfilledParent.querySelector('select'); // Find select inside the parent
                        let radioFieldset = unfilledParent.querySelector('fieldset[data-test-form-builder-radio-button-form-component="true"]'); // Find the radio fieldset
                        // field is select, so just select yes
                        if (selectElement) {
                            let yesOption = selectElement.querySelector('option[value="Yes"]'); // Find the "Yes" option
                            if (yesOption) {
                                selectElement.value = "Yes"; // Set the value
                                selectElement.dispatchEvent(new Event('change', { bubbles: true })); // Trigger change event
                            }
                        }
                        // field is radio, so just select yes
                        if (radioFieldset) {
                            let yesRadioButton = radioFieldset.querySelector('input[type="radio"][value="Yes"]'); // Find the "Yes" radio button
                            if (yesRadioButton) {
                                yesRadioButton.checked = true; // Select the "Yes" option
                                yesRadioButton.dispatchEvent(new Event('change', { bubbles: true })); // Trigger change event
                            }
                        }
                        // field is input, read question and fill answer by qestionarie
                        if (!selectElement && !radioFieldset) {
                            const labelElement = unfilledParent.querySelector('label'); // Find the label inside the parent
                            const inputElement = unfilledParent.querySelector('input[type="text"]'); // Find the input field
                            console.log(labelElement, ">>>>>>>>>>>>>>>>>>4444->inputElement", inputElement);
                            if (labelElement && inputElement) {
                                const questionText = labelElement.innerText.trim(); // Get the label text
                                console.log(labelElement, ">>>>>>>>>>>>>>>>>>5555->questionText", questionText);
                                // Find a key in the quesionarie object that is included in the question text
                                const matchedKey = Object.keys(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.quesionarie)
                                    .find(key => questionText.toLowerCase().includes(key.toLowerCase()));
                                if (matchedKey) {
                                    // @ts-ignore - Ignore TypeScript error for this line
                                    inputElement.value = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.quesionarie[matchedKey]; // Fill the input field
                                    console.log(">>>>>>>>>6666->matchedKey", matchedKey);
                                    inputElement.dispatchEvent(new Event('input', { bubbles: true })); // Trigger input event
                                    console.log(`>>>>>>>>>7777->matchedKeyFilled: "${questionText}" with value: ${_constants_constants__WEBPACK_IMPORTED_MODULE_0__.quesionarie[matchedKey]}`);
                                }
                            }
                        }
                    }
                }
            }
            completeApplication(res);
        }, 2000);
        completeApplication(res);
    }, 2000);
});
const completeApplication = (res) => {
    let completeApplicationInterval = setInterval(() => {
        var _a;
        let completeApplicationButton = document.querySelector('[aria-label="Submit application"]');
        if (completeApplicationButton && completeApplicationButton instanceof HTMLElement) {
            let companyNameHeader = document.getElementById('jobs-apply-header');
            let companyName = companyNameHeader instanceof HTMLElement && ((_a = companyNameHeader.textContent) === null || _a === void 0 ? void 0 : _a.trim());
            completeApplicationButton.click();
            //wait for completed modal and close it
            let finalModalInterval = setInterval(() => {
                let finalModalCloseButton = document.querySelector('[aria-label="Dismiss"]');
                if (finalModalCloseButton && finalModalCloseButton instanceof HTMLElement) {
                    finalModalCloseButton.click();
                    clearInterval(finalModalInterval);
                    console.log(">>>>>>>>>>>>8888->Applied Successully for", companyName);
                    clearInterval(completeApplicationInterval);
                    setTimeout(() => { res && res('Applied Successully'); }, 2000);
                }
            }, 1000);
        }
    }, 1000);
};


/***/ }),

/***/ "./src/sites/linkedin/linkedin.ts":
/*!****************************************!*\
  !*** ./src/sites/linkedin/linkedin.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/sites/linkedin/functions.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const linkedin = () => {
    setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
        yield (0,_functions__WEBPACK_IMPORTED_MODULE_0__.openAllFilters)();
        const jobListWrapper = document.getElementsByClassName('scaffold-layout__list')[0];
        const jobList = jobListWrapper === null || jobListWrapper === void 0 ? void 0 : jobListWrapper.querySelector('ul');
        if (jobList instanceof HTMLElement) {
            for (let i = 0; i < jobList.children.length; i++) {
                let job = jobList.children[i];
                yield (0,_functions__WEBPACK_IMPORTED_MODULE_0__.applyForJob)(job);
            }
        }
    }), 2000);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (linkedin);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var _sites_foundit_foundit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sites/foundit/foundit */ "./src/sites/foundit/foundit.ts");
/* harmony import */ var _sites_instahyre_instahyre__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sites/instahyre/instahyre */ "./src/sites/instahyre/instahyre.ts");
/* harmony import */ var _sites_linkedin_linkedin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sites/linkedin/linkedin */ "./src/sites/linkedin/linkedin.ts");




const currentUrl = window.location.href;
let currentSite = '';
if (currentUrl.includes('instahyre'))
    currentSite = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.INSTAHYRE;
if (currentUrl.includes('foundit'))
    currentSite = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.FOUNDIT;
if (currentUrl.includes('linkedin'))
    currentSite = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.LINKEDIN;
switch (currentSite) {
    case _constants_constants__WEBPACK_IMPORTED_MODULE_0__.INSTAHYRE:
        (0,_sites_instahyre_instahyre__WEBPACK_IMPORTED_MODULE_2__["default"])();
        break;
    case _constants_constants__WEBPACK_IMPORTED_MODULE_0__.FOUNDIT:
        (0,_sites_foundit_foundit__WEBPACK_IMPORTED_MODULE_1__["default"])();
        break;
    case _constants_constants__WEBPACK_IMPORTED_MODULE_0__.LINKEDIN:
        (0,_sites_linkedin_linkedin__WEBPACK_IMPORTED_MODULE_3__["default"])();
        break;
}

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map