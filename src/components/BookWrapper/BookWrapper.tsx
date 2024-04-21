import {useQuery} from "@tanstack/react-query";
import './BookWrapper.css';
import {useEffect, useState} from "react";
import axios from "axios";
import BookLoading from "../BookLoading/BookLoading.tsx";
import Book from "../Book/Book.tsx";


interface IProps {
    book: IBookImportResult;
}

const fetchBookStatus = async (task_id: string) => {
    const response = await axios.get(`http://127.0.0.1:8000/books/status/${task_id}`);
    console.log(response);
    return response.data
}

const BookWrapper = ({book}: IProps) => {

    const [bookStatus, setBookStatus] = useState<string | null>(null);
    const [userBook, setUserBook] = useState<IUserBook | null>(null);

    const {data, isLoading, isSuccess} = useQuery({
        queryKey: ['bookStatus', book.book_task!.book_id],
        queryFn: () => fetchBookStatus(book.book_task!.task_id),
        refetchInterval: 3000,
        enabled: book.status === "running" && bookStatus != "SUCCESS",
    });

    useEffect(() => {
        if (data)
            setBookStatus(data.status ?? null)
        if (isSuccess && data.status === "SUCCESS") {
            console.log({
                id: data.message.id,
                book_id: book.book_task!.book_id,
                title: book.book_task!.title,
                description: data.message.description,
                image_url: data.message.image_url,
                url: data.message.url,
                user_rating: book.book_task!.user_rating,
                average_rating: book.book_task!.average_rating,
            });
            setUserBook({
                id: data.message.id,
                book_id: book.book_task!.book_id,
                title: book.book_task!.title,
                description: data.message.description,
                image_url: data.message.image_url,
                url: data.message.url,
                user_rating: book.book_task!.user_rating,
                average_rating: book.book_task!.average_rating,
            });
        }
    }, [isSuccess, data]);

    return (
        <div className="book">
            {isLoading && <BookLoading status={"loading"} message={"loading"}/>}
            {isSuccess && data.status != "SUCCESS" && <BookLoading status={data.status} message={data.message}/>}
            {isSuccess && userBook && data.status == "SUCCESS" && <Book book={userBook!}/>}
        </div>
    )

}

export default BookWrapper;
