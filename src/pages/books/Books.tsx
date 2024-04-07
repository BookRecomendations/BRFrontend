import {Button, Flex, Typography} from "antd";
import Book from "../../components/Book/Book.tsx";
import FileDragger from "../../components/FileDragger/FileDragger.tsx";

import './Books.css';
import {useState} from "react";

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
                        <Book key={book.book ? book.book.book_id : book.book_task?.book_id} book={book}/>
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