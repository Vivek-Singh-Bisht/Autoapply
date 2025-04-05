import { quesionarie } from "../../constants/constants";

export const openAllFilters = () => new Promise((res) => {
    let allFiltersButtonInterval = setInterval(() => {
        let allFiltersButton = document.querySelector('[aria-label="Show all filters. Clicking this button displays all available filter options."]');
        if (allFiltersButton instanceof HTMLElement) {
            clearInterval(allFiltersButtonInterval)
            allFiltersButton.click()
            // change Filters From here
            setTimeout(() => { applyFilters({ sortByMostRecent: true, easyApply: true }, res) }, 500)
        }
    }, 500)
})

const applyFilters = ({ sortByMostRecent = true, easyApply = true }, res: (value: string) => void) => {

    let advanceFilterPanel = document.querySelector('[aria-labelledby="reusable-search-advanced-filters-right-panel"]');

    // sort by most recent
    if (sortByMostRecent && advanceFilterPanel) {
        let mostRecentToggle = advanceFilterPanel.querySelector('[for="advanced-filter-sortBy-DD"]');
        if (mostRecentToggle instanceof HTMLElement)
            mostRecentToggle.click()
    }

    // filter for easy apply
    if (easyApply && advanceFilterPanel) {
        let easyApplyToggleParent = advanceFilterPanel.querySelector('.artdeco-toggle--32dp')
        let easyApplyToggle = easyApplyToggleParent?.querySelector('.artdeco-toggle__button')
        if (easyApplyToggleParent instanceof HTMLElement && easyApplyToggle) {
            if (easyApplyToggle.getAttribute('aria-checked') === 'false')
                easyApplyToggleParent.click()
        }
    }

    //All filters applied -> SHOW RESULTS
    let showResultsButton = advanceFilterPanel && advanceFilterPanel.querySelector('.reusable-search-filters-buttons');
    if (showResultsButton instanceof HTMLElement) {
        let showButtonInterval = setInterval(() => {
            if (document.querySelector('[for="advanced-filter-sortBy-DD"]')) {
                showResultsButton = document.getElementsByClassName('reusable-search-filters-buttons')[0]
                showResultsButton instanceof HTMLElement && showResultsButton?.click()
            }
            else {
                setTimeout(() => { res('All Filters Applied Successfully!') }, 3000)
                clearInterval(showButtonInterval)
            }
        }, 500)
    }

}

export const applyForJob = (job: Element) => new Promise((res) => {
    let clickableElement = job.getElementsByClassName('job-card-container--clickable')[0] as HTMLElement;
    const companySpan = clickableElement.querySelector('span[dir="ltr"]');
    const companyName = companySpan instanceof HTMLElement && companySpan.textContent?.trim();
    console.log(">>>>>>>>>>>>1111->applying for", companyName)
    if (clickableElement instanceof HTMLElement) {
        setTimeout(() => {
            clickableElement.click();
            clickNextUntilReview()
        }, 500)
    }

    // click next until questionarie begins
    const clickNextUntilReview = () => setTimeout(() => {
        let jobApplyButton = document.querySelector('.jobs-apply-button')
        console.log(">>>>>>>>>>>222->jobApplyButton", jobApplyButton)
        jobApplyButton instanceof HTMLElement && jobApplyButton.click()

        let firstStepInterval = setInterval(() => {
            let ApplicationForm = Array.from(document.querySelectorAll('[aria-label]'))
                .find(el => el.getAttribute('aria-label')?.includes('Your job application progress'));

            const nextButton = document?.querySelector('[data-easy-apply-next-button]');
            const submitButton = document.querySelector('[aria-label="Submit application"]')
            if (nextButton instanceof HTMLElement) {
                console.log(">>>>>>>>>>>>>>>333->nextButton", nextButton)
                setTimeout(() => {
                    nextButton.click();
                    clearInterval(firstStepInterval)
                    startQuestionarie()
                }, 500)

            }
            if (submitButton instanceof HTMLElement) {
                console.log(">>>>>>>>>>>>>>>333->submitButton", submitButton)
                setTimeout(() => {
                    submitButton.click();
                    clearInterval(firstStepInterval)
                    completeApplication(res)
                }, 500)

            }
        }, 500)
    }, 500)

    // start questionarie
    const startQuestionarie = () => setTimeout(() => {

        setTimeout(() => {
            // there could be any of these review and next button
            let reviewButton = document?.querySelector('[data-live-test-easy-apply-review-button]');
            let nextButton = document?.querySelector('[data-live-test-easy-apply-next-button]');
            console.log(">>>>>>>>>>>reviewButton", reviewButton)
            reviewButton instanceof HTMLElement && reviewButton.click()
            nextButton instanceof HTMLElement && nextButton.click()
            FindErrorsAndFillDetails()
        }, 1000)

        // wait for error messages or proceed further
        const FindErrorsAndFillDetails = () => setTimeout(() => {
            let unfilledFields = document.querySelectorAll('.artdeco-inline-feedback__message')
            if (unfilledFields.length) {
                for (let i = 0; i < unfilledFields.length; i++) {
                    let unfilledParent = unfilledFields[i]?.closest('.fb-dash-form-element')

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
                            let yesRadioButton = radioFieldset.querySelector('input[type="radio"][value="Yes"]') as HTMLInputElement; // Find the "Yes" radio button

                            if (yesRadioButton) {
                                yesRadioButton.checked = true; // Select the "Yes" option
                                yesRadioButton.dispatchEvent(new Event('change', { bubbles: true })); // Trigger change event
                            }
                        }

                        // field is input, read question and fill answer by qestionarie
                        if (!selectElement && !radioFieldset) {
                            const labelElement = unfilledParent.querySelector('label'); // Find the label inside the parent
                            const inputElement = unfilledParent.querySelector('input[type="text"]'); // Find the input field
                            console.log(labelElement, ">>>>>>>>>>>>>>>>>>4444->inputElement", inputElement)
                            if (labelElement && inputElement) {
                                const questionText = labelElement.innerText.trim(); // Get the label text
                                console.log(labelElement, ">>>>>>>>>>>>>>>>>>5555->questionText", questionText)
                                // Find a key in the quesionarie object that is included in the question text
                                const matchedKey = (Object.keys(quesionarie) as (keyof typeof quesionarie)[])
                                    .find(key => questionText.toLowerCase().includes(key.toLowerCase()));

                                if (matchedKey) {
                                    // @ts-ignore - Ignore TypeScript error for this line
                                    (inputElement as HTMLInputElement).value = quesionarie[matchedKey]; // Fill the input field
                                    console.log(">>>>>>>>>6666->matchedKey", matchedKey)
                                    inputElement.dispatchEvent(new Event('input', { bubbles: true })); // Trigger input event
                                    console.log(`>>>>>>>>>7777->matchedKeyFilled: "${questionText}" with value: ${quesionarie[matchedKey]}`);
                                }
                            }
                        }

                    }
                }
            }
            completeApplication(res)

        }, 2000)

        completeApplication(res)

    }, 2000)


})

const completeApplication = (res: any) => {
    let completeApplicationInterval = setInterval(() => {
        let completeApplicationButton = document.querySelector('[aria-label="Submit application"]');
        if (completeApplicationButton && completeApplicationButton instanceof HTMLElement) {
            let companyNameHeader = document.getElementById('jobs-apply-header')
            let companyName = companyNameHeader instanceof HTMLElement && companyNameHeader.textContent?.trim();
            completeApplicationButton.click()
            //wait for completed modal and close it
            let finalModalInterval = setInterval(() => {
                let finalModalCloseButton = document.querySelector('[aria-label="Dismiss"]');
                if (finalModalCloseButton && finalModalCloseButton instanceof HTMLElement) {
                    finalModalCloseButton.click()
                    clearInterval(finalModalInterval)
                    console.log(">>>>>>>>>>>>8888->Applied Successully for", companyName)
                    clearInterval(completeApplicationInterval)
                    setTimeout(() => { res && res('Applied Successully') }, 2000)
                }
            }, 1000)
        }

    }, 1000)
}