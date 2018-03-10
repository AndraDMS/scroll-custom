class Scroller {

    constructor(elem_) {
        this.elem_;
        if (elem_ !== undefined) this.elem_ = elem_;
        this.dir_ = 'vertical';
        this.on = false;

        this.scrollV = 0;
        this.scrollCurr = 0;

        this.friction_ = 2;
        this.magnitude_ = 0.2;
        this.break_ = 1.5;

        this.scroll = () => {

            let el = this.elem_;

            if (this.direction_ == 'horizontal') {
                el.scrollLeft += this.scrollV;
            } else el.scrollTop += this.scrollV;

            if ((this.direction_ == 'horizontal' ? el.scrollLeft : el.scrollTop) <= 0 && this.scrollV <= 0) {
                this.scrollV = 0;
                this.scrollCurr = false;
                return;
            } else if ((this.direction_ == 'horizontal' ? el.scrollLeft >= el.scrollWidth - el.clientWidth : el.scrollTop >= el.scrollHeight - el.clientHeight) && this.scrollV >= 0) {
                this.scrollV = 0;
                this.scrollCurr = false;
                return;
            }

            let fric = this.friction_
            if (Math.abs(this.scrollV) - Math.abs(fric) < 0) this.scrollV = 0;
            else {
                fric *= (this.scrollV > 0 ? -1 : 1);
                this.scrollV += fric
            }

            if (Math.abs(this.scrollV) > this.break_) {
                requestAnimationFrame(this.scroll);
                //console.log('in');
            } else {
                this.scrollV = 0;
                this.scrollCurr = false;
                //console.log('out');
            }
        }

        this.listener = (e) => {

            e.preventDefault();
            e.stopPropagation();
            this.scrollV += e.deltaY * this.magnitude_;

            if (this.scrollCurr == true) return;
            this.scrollCurr = true;

            //console.log('test');
            this.scroll();

        }
    }

    elem(elem_) {
        if (elem_ === undefined) return this.elem_;

        if (this.on) {
            this.stop();
            this.elem_ = elem_;
            this.start();
        } else {
            this.elem_ = elem_;
        }

        return this;
    }

    direction(direction_) {
        if (direction_ === undefined) return this.direction_;
        this.direction_ = direction_;
        return this;
    }

    friction(friction_) {
        if (friction_ === undefined) return this.friction_;
        this.friction_ = friction_;
        return this;
    }

    magnitude(magnitude_) {
        if (magnitude_ === undefined) return this.magnitude_;
        this.magnitude_ = magnitude_;
        return this;
    }

    breakAt(break_) {
        if (break_ === undefined) return this.break_;
        this.break_ = break_;
        return this;
    }

    start() {
        this.elem_.addEventListener('wheel', this.listener);
        this.on = true;
    }

    stop() {
        this.elem_.removeEventListener('wheel', this.listener);
        this.on = false;
    }

}

module.exports = Scroller;
