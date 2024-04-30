import {useQuery} from "@tanstack/react-query";
import {useEffect, useState} from "react";
import axios from "axios";
import BookLoading from "../Book/BookLoading.tsx";
import RecommendedBook from "../Book/RecommendedBook.tsx";
import { Flex } from "antd";


interface IProps {
    book: IRecommendedBookWithTask;
}

const fetchBookStatus = async (task_id: string) => {
    const response = await axios.get(`http://127.0.0.1:8000/books/status/${task_id}`);
    console.log(response);
    return response.data
}

const RecommendedBookWrapper = ({book}: IProps) => {

    const [bookStatus, setBookStatus] = useState<string | null>(null);
    const [recommendedBook, setRecommendedBook] = useState<IRecommendedBook | null>(null);

    const {data, isLoading, isSuccess} = useQuery({
        queryKey: ['bookStatus', book.book.book_id],
        queryFn: () => fetchBookStatus(book.task_id),
        refetchInterval: 3000,
        enabled: book.status === "running" && bookStatus != "SUCCESS",
    });

    useEffect(() => {
        if (data)
            setBookStatus(data.status ?? null)
        if (isSuccess && data.status === "SUCCESS") {
            console.log({
                id: data.message.id,
                book_id: book.book.book_id,
                title: book.book.title,
                description: data.message.description,
                image_url: data.message.image_url,
                url: data.message.url,
                average_rating: book.book.average_rating,
                similarity: book.book.similarity,
                is_in_similar_books: book.book.is_in_similar_books,
            });
            setRecommendedBook({
                id: data.message.id,
                book_id: book.book.book_id,
                title: book.book.title,
                description: data.message.description,
                image_url: data.message.image_url,
                url: data.message.url,
                average_rating: book.book.average_rating,
                similarity: book.book.similarity,
                is_in_similar_books: book.book.is_in_similar_books,
            });
        }
    }, [isSuccess, data]);

    return (
        <Flex className="h-full w-64" align="center" justify="center" vertical>
            {isLoading && <BookLoading status={"loading"} message={"loading"}/>}
            {isSuccess && data.status != "SUCCESS" && <BookLoading status={data.status} message={data.message}/>}
            {isSuccess && recommendedBook && data.status == "SUCCESS" &&
                <RecommendedBook book={recommendedBook}/>}
        </Flex>
    )

}

export default RecommendedBookWrapper;
