<<<<<<< HEAD
class Scroller {

    constructor(elem_) {
        this.elem_;
        if (elem_ !== undefined) this.elem_ = elem_;
        this.dir_ = 'vertical';
        this.on = false;

        this.scrollV = 0;
        this.scrollCurr = 0;

        this.friction_ = 2;
        this.power_ = 0.2;
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
            this.scrollV += e.deltaY * this.power_;

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

    friction() {
        if (friction_ === undefined) return this.friction_;
        this.friction_ = friction_;
        return this;
    }

    power() {
        if (power_ === undefined) return this.power_;
        this.power_ = power_;
        return this;
    }

    break () {
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

/*document.getElementById("scrollWrap")
    .addEventListener('wheel', (e) => {
        //console.log(e.deltaY);
        //$(window).scroll();
        //window.scrollTo(2000*Math.random(), window.scrollTop);
        //scrollIt(window.scrollTop + e.deltaY, 200, 'easeInOutQuad')
        var el = document.getElementById("scrollWrap");
        if (!el.scroll_VX) el.scroll_VX = 0;
        el.scroll_VX += e.deltaY / 10;

        if (el.scroll_Curr == true) return;
        el.scroll_Curr = true;
        //console.log("boi");
        var scroll = () => {
            //console.log(el.scroll_VX);
            el.scrollLeft += el.scroll_VX;
            if (el.scrollLeft <= 0 && el.scroll_VX <= 0) {
                el.scroll_VX = 0;
                el.scroll_Curr = false;
                return;
            } else if (el.scrollLeft >= el.scrollWidth - el.clientWidth && el.scroll_VX >= 0) {
                el.scroll_VX = 0;
                el.scroll_Curr = false;
                return;
            }

            var fric = 0.70
            fric *= (el.scroll_VX > 0 ? -1 : 1);
            el.scroll_VX += fric

            if (Math.abs(el.scroll_VX) > 1) {
                requestAnimationFrame(scroll);
            } else {
                el.scroll_VX = 0;
                el.scroll_Curr = false;
            }
        }
        scroll();
        //document.documentElement.easeAdd(e.deltaY,0,400,'easeInOutQuad')//scrollLeft += e.deltaY
    })
*/
=======
class Scroller {

    constructor(elem_) {
        this.elem_;
        if (elem_ !== undefined) this.elem_ = elem_;
        this.dir_ = 'vertical';
        this.on = false;

        this.scrollV = 0;
        this.scrollCurr = 0;

        this.friction_ = 2;
        this.power_ = 0.2;
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
            this.scrollV += e.deltaY * this.power_;

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

    friction() {
        if (friction_ === undefined) return this.friction_;
        this.friction_ = friction_;
        return this;
    }

    power() {
        if (power_ === undefined) return this.power_;
        this.power_ = power_;
        return this;
    }

    break () {
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

/*document.getElementById("scrollWrap")
    .addEventListener('wheel', (e) => {
        //console.log(e.deltaY);
        //$(window).scroll();
        //window.scrollTo(2000*Math.random(), window.scrollTop);
        //scrollIt(window.scrollTop + e.deltaY, 200, 'easeInOutQuad')
        var el = document.getElementById("scrollWrap");
        if (!el.scroll_VX) el.scroll_VX = 0;
        el.scroll_VX += e.deltaY / 10;

        if (el.scroll_Curr == true) return;
        el.scroll_Curr = true;
        //console.log("boi");
        var scroll = () => {
            //console.log(el.scroll_VX);
            el.scrollLeft += el.scroll_VX;
            if (el.scrollLeft <= 0 && el.scroll_VX <= 0) {
                el.scroll_VX = 0;
                el.scroll_Curr = false;
                return;
            } else if (el.scrollLeft >= el.scrollWidth - el.clientWidth && el.scroll_VX >= 0) {
                el.scroll_VX = 0;
                el.scroll_Curr = false;
                return;
            }

            var fric = 0.70
            fric *= (el.scroll_VX > 0 ? -1 : 1);
            el.scroll_VX += fric

            if (Math.abs(el.scroll_VX) > 1) {
                requestAnimationFrame(scroll);
            } else {
                el.scroll_VX = 0;
                el.scroll_Curr = false;
            }
        }
        scroll();
        //document.documentElement.easeAdd(e.deltaY,0,400,'easeInOutQuad')//scrollLeft += e.deltaY
    })
*/
>>>>>>> 4f373a289810dc4b29926e12be5c6e70b2beeb04
