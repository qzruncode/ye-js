const Fullscreen = {
    use: (dom: HTMLElement) => {
        if(dom) {
            if (dom.requestFullscreen) {
                dom.addEventListener('click', () => {
                    if (!document.fullscreenElement) {
                        dom.requestFullscreen();
                    } else {
                        if (document.exitFullscreen) {
                            document.exitFullscreen(); 
                        }
                    }
                })
            }
        }
    }
}

export default Fullscreen;