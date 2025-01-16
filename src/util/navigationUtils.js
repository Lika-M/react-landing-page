export const handleLinkClick = (e, url, setIsOpen) => {
        if (url.startsWith('#')) {
            e.preventDefault();

            const target = document.querySelector(url);

            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });

                if (setIsOpen) {
                    setIsOpen(false);
                }
            }
        }
    };