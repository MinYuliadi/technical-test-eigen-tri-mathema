import { iList } from "./newsStoreInterfaces";

export interface iListNewsDto {
    status: string,
    totalResults: number,
    articles: iList[]
}