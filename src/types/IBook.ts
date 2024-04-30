interface IBaseBook {
    book_id: number;
}

interface IUserBook extends IBaseBook {
    id: number;
    title: string;
    description: string;
    url: string;
    image_url: string;
    user_rating: number;
    average_rating: number;
}

interface IRecommendedBook extends IBaseBook {
    id: number;
    title: string;
    description: string;
    url: string;
    image_url: string;
    average_rating: number;
    similarity: number;
    is_in_similar_books: boolean;
}

interface IBookTask extends IBaseBook {
    task_id: string;
    title: string;
    average_rating: number;
    user_rating: number;
}

interface IBookImportResult {
    status: "ready" | "running" | "error";
    book_task: IBookTask | null;
    book: IUserBook | null;
}

interface ITask {
    status: "ready" | "running" | "error";
    task_id: string;
    result: string;
}

interface IBookWithTask extends ITask {
    book: IUserBook;
}

interface IRecommendedBookWithTask extends ITask {
    book: IRecommendedBook;
}
