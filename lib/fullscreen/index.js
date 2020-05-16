var Fullscreen = {
    use: function (dom) {
        if (dom) {
            if (dom.requestFullscreen) {
                dom.addEventListener('click', function () {
                    if (!document.fullscreenElement) {
                        dom.requestFullscreen();
                    }
                    else {
                        if (document.exitFullscreen) {
                            document.exitFullscreen();
                        }
                    }
                });
            }
        }
    }
};
export default Fullscreen;
