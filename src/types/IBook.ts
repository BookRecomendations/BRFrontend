interface IBaseBook {
    book_id: number;
}

interface IUserBook extends IBaseBook {
    title: string;
    description: string;
    url: string;
    image_url: string;
    user_rating: number;
    average_rating: number;
}


interface IBookTask extends IBaseBook {
    task_id: string;
    title: string;
}

interface IBookImportResult {
    status: "ready" | "running" | "error";
    book_task: IBookTask | null;
    book: IUserBook | null;
}