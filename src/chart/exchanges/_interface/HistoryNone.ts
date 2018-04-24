import IHistory from './IHistory';

export default class HistoryNone implements IHistory {
    public c: number[] = [];
    public h: number[] = [];
    public l: number[] = [];
    public o: number[] = [];
    public t: number[] = [];
    public v: number[] = [];
    public s: string = 'ok';
}
