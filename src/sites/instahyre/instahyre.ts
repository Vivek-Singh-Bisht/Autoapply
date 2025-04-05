const instahyre = () => {
    console.log(">>>>>>>>>>>Instahyre Running..!!")

    setTimeout(()=>{
        setInterval(()=>{
            const applyBtn: HTMLButtonElement | null = document.querySelector('.btn.btn-lg.btn-primary.new-btn');
            console.log(">>>>>>>found apply button, Clikcking !!")
            applyBtn?.click()
        },3000)
    },1000)

}

export default instahyre