import {Button, Dropdown, Flex, InputNumber, Select, Space, Typography} from "antd";
import FileDragger from "../../components/FileDragger/FileDragger.tsx";

import './Books.css';
import {useEffect, useState} from "react";
import BookWrapper from "../../components/BookWrapper/BookWrapper.tsx";
import Book from "../../components/Book/Book.tsx";
import Recommendations from "../../components/Recommendations/Recommendations.tsx";

const {Title, Text} = Typography;

const Books = () => {
    const [importedBooks, setImportedBooks] = useState<IBookImportResult[]>([]);
    const [selectedBooks, setSelectedBooks] = useState<IUserBook[]>([]);
    const [score, setScore] = useState<number>(3);

    const toggleSelectedBook = (book: IUserBook) => {
        if (selectedBooks.find(b => b.book_id === book.book_id)) {
            setSelectedBooks(selectedBooks.filter(b => b.book_id !== book.book_id));
        } else {
            setSelectedBooks([...selectedBooks, book]);
        }
    };

    const selectBooksWithScoreAboveNumber = (score: number) => {
        const highlyRatedBooks = importedBooks
            .filter(book => book.book && book.book.user_rating >= score)
            .map(book => book.book!)
            .filter(book => !selectedBooks.includes(book));
        setSelectedBooks([...selectedBooks, ...highlyRatedBooks]);
    };

    const unselectAllBooks = () => {
        setSelectedBooks([]);
    }

    useEffect(() => {
        console.log("Selected books", selectedBooks);
    }, [selectedBooks]);

    return (
        <>
            <Flex align={"center"} justify={"center"} vertical>
                <Title level={1}>System rekomendacji książek oparty o zawartość</Title>
                <Title level={2}>Twoje książki</Title>
                <FileDragger setBooks={setImportedBooks}/>
                <Flex gap={'large'} wrap={'wrap'} className={"books-list"}>
                    {importedBooks.map((book) => (
                        book.status === "running" ?
                            <BookWrapper key={book.book_task?.book_id} book={book}/> :
                            <Book
                                key={book.book?.book_id}
                                book={book.book!}
                                toggleSelectedBook={toggleSelectedBook}
                                selected={selectedBooks.some(b => b.book_id === book.book?.book_id)}
                            />
                    ))}
                </Flex>
                {importedBooks.length > 0 && <>
                    <Flex className="book-select" align="center" justify="center" gap="large">
                        <Space.Compact>
                            <Button onClick={() => selectBooksWithScoreAboveNumber(score)} type="primary">
                                Zaznacz książki z oceną powyżej
                            </Button>
                            <Select
                                options={
                                    [
                                        {label: "1", value: 1},
                                        {label: "2", value: 2},
                                        {label: "3", value: 3},
                                        {label: "4", value: 4},
                                        {label: "5", value: 5},
                                    ]
                                }
                                value={score}
                                onChange={(value) => setScore(value)}/>
                        </Space.Compact>
                        <Button onClick={unselectAllBooks} type="primary">
                            Odznacz wszystkie książki
                        </Button>
                    </Flex>
                    <Recommendations selectedBooks={selectedBooks}/>
                </>}
            </Flex>
        </>
    )
};
export default Books;