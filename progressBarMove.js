let mutex = true;

let move = (progress_bar_id, progress_label_id) => {
    let bar = document.getElementById(progress_bar_id);
    let label = document.getElementById(progress_label_id);
    if (mutex) {
        mutex = false;
        let width = 1;

        let id = setInterval(() => {
            if (width >= 100) {
                clearInterval(id);
                mutex = true
            } else {
                width++;
                bar.style.width = width + "%";
                label.innerHTML = width + "%";
            }
        }, 50);
    }
};
