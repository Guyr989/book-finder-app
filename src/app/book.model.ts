export type Book = {
  id: string;
  items: {
    volumeInfo: {
      title: string;
      authors: string[];
      publisher: string;
      publishedDate: string;
      description: string;
      averageRating: number;
      pageCount:number;
      ratingsCount: number;
      previewLink: string;
      imageLinks: {
        thumbnail: string;
        smallThumbnail: string;
        large:string;
      };
    };
  }
}
