const buttonUp = {
    scrollUpEl: document.querySelector('.button-up'),

    show() {
        if (this.scrollUpEl.classList.contains('button-up-hide') && !this.scrollUpEl.classList.contains('button-up-hiding')) {
            this.scrollUpEl.classList.remove('button-up-hide');
            this.scrollUpEl.classList.add('button-up-hiding');
            setTimeout(() => {
                this.scrollUpEl.classList.remove('button-up-hiding');
            }, 300);
        }
    },

    hide() {
        if (!this.scrollUpEl.classList.contains('button-up-hide') && !this.scrollUpEl.classList.contains('button-up-hiding')) {
            this.scrollUpEl.classList.add('button-up-hiding');
            setTimeout(() => {
                this.scrollUpEl.classList.add('button-up-hide');
                this.scrollUpEl.classList.remove('button-up-hiding');
            }, 300);
        }
    },

    handleScroll() {
        const scrollY = window.scrollY || document.documentElement.scrollTop;

        if (this.scrolling && scrollY > 0) {
            return;
        }

        this.scrolling = false;

        if (scrollY > 400) {
            this.show();
        } else {
            this.hide();
        }
    },

    scrollToTop() {
        this.scrolling = true;
        this.hide();
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    },

    addEventListener() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
        this.scrollUpEl.addEventListener('click', this.scrollToTop.bind(this));
    }
};

buttonUp.addEventListener();