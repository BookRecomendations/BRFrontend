interface IRecommendation extends IRecommendedBook {
    similarity: number;
    is_in_similar_books: boolean;
}
