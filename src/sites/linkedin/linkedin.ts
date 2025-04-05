import { applyForJob, openAllFilters } from "./functions"

const linkedin = () => {
    setTimeout(async () => {

        await openAllFilters()
        const jobListWrapper = document.getElementsByClassName('scaffold-layout__list')[0]
        const jobList = jobListWrapper?.querySelector('ul')
        if (jobList instanceof HTMLElement) {
            for (let i = 0; i < jobList.children.length; i++) {
                let job = jobList.children[i]
                await applyForJob(job)
            }
        }
    }, 2000)

}

export default linkedin

