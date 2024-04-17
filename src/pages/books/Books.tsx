import {Button, Flex, Typography} from "antd";
import FileDragger from "../../components/FileDragger/FileDragger.tsx";

import './Books.css';
import {useState} from "react";
import BookWrapper from "../../components/BookWrapper/BookWrapper.tsx";
import Book from "../../components/Book/Book.tsx";

const {Title} = Typography;

const Books = () => {
    const [importedBooks, setImportedBooks] = useState<IBookImportResult[]>([]);


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
                            <Book key={book.book?.book_id} book={book.book!}/>
                    ))}
                </Flex>
                <Flex className={"recommend-field"} align={'center'} justify={"center"}>
                    <Button size={"large"} type="primary">Znajdź remkomendacje</Button>
                </Flex>
            </Flex>
        </>
    )
};
export default Books;