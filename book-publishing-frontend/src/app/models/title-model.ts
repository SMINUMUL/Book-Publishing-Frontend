import { PublisherModel } from './publisher-model';

export class TitleModel {
    constructor(
        private id: number,
        private title: string,
        private type: string,
        private publisher: PublisherModel,
        private price: number,
        private advance: number,
        private royalty: number,
        private ytdSales: number,
        private notes: string,
        private pubdate: string
    ) {}
}
