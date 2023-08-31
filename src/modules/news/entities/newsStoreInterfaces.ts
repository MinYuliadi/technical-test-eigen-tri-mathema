export interface iNewsStore {
  list: iList[];
  setList: (params: iList[]) => void;
  loading: boolean;
  setLoading: (params: boolean) => void;
}

export interface iList {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: any;
  content: string;
}
