
window.addEventListener('DOMContentLoaded', () => {
    MicroModal.init();
    const button = document.querySelectorAll(".button");

    button.forEach((item) => {
        const dataButtonDoorId = item.dataset.doorId;
        const doorStatus = localStorage.getItem(dataButtonDoorId);
        (doorStatus === "open" && !item.classList.contains('is-open')) && item.classList.add('is-open');
        item.addEventListener("click", (event) => {
            const currentButton = event.currentTarget;
            const currentTargetDataSet = currentButton.dataset;
            const dataModalId = currentTargetDataSet.micromodalId;
            const dataOpenDate = currentTargetDataSet.openDate;
            const dataDoorId = currentTargetDataSet.doorId;
            
            // if (!(dayjs().isBefore(dataOpenDate, 'day'))) {
                localStorage.setItem(dataDoorId, 'open');
                !currentButton.classList.contains('is-open') && currentButton.classList.add('is-open');
                MicroModal.show(dataModalId);
            // }
        })
    })
});