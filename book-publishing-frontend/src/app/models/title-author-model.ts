import { AuthorModel } from './author-model'; 
import { TitleModel } from './title-model'; 

export class TitleAuthorModel {
    constructor(
        public id: number,
        public author: AuthorModel,
        public title: TitleModel,
        public auOrd: number,
        public royaltyPer: number
    ) {}
}
