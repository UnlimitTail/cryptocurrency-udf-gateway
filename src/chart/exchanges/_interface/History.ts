import IHistory from './IHistory';

function validate(src: number) {
    return src ? src : 0;
}

export default class History implements IHistory {
    public c: number[] = [];
    public h: number[] = [];
    public l: number[] = [];
    public o: number[] = [];
    public t: number[] = [];
    public v: number[] = [];
    public s: string = 'ok';

    constructor(private interval: number, private from: number, private to: number) {
        if (interval !== 0 && from !== 0 && to !== 0) {
          const begin = Math.floor(from / interval) * interval;
          const end = (Math.floor(to / interval) + 1) * interval;
          for (let t = begin; t < end; t = t + interval) {
            this.t.push(t);
          }
        }
    }

    public push(param: any) {
        const t: number = param.t;

        while (this.c.length < this.t.length) {
          const currentT = this.t[this.c.length];
          const nextT = this.t[this.c.length + 1];
          if (t < currentT) {
            return;
          } else if (t < nextT) {
            this._push(param);
            return;
          } else {
            // push & retry
            this._push({});
          }
        }
    }

    public fill() {
        while (this.c.length !== this.t.length) {
            this._push({});
        }
    }

    private _push(param: any) {
        this.c.push(validate(param.c));
        this.h.push(validate(param.h));
        this.l.push(validate(param.l));
        this.o.push(validate(param.o));
        this.v.push(validate(param.v));
    }
}
