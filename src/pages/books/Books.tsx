import {Button, Flex, Typography} from "antd";
import Book from "../../components/Book/Book.tsx";
import FileDragger from "../../components/FileDragger/FileDragger.tsx";

import './Books.css';

const {Title} = Typography;

const Books = () => {

    const books: IBook[] = [{
        id: 1,
        bookId: 2,
        title: 'Harry Potter',
        description: 'A book about a wizard',
        url: 'https://www.goodreads.com/book/show/3.Harry_Potter_and_the_Sorcerer_s_Stone',
        imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474154022l/3._SY475_.jpg',
        rating: 4.5,
    }, {
        id: 2,
        bookId: 3,
        title: 'The Hobbit',
        description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum',
        url: 'https://www.goodreads.com/book/show/5907.The_Hobbit',
        imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1372847500l/5907.jpg',
        rating: 4.5,
    }];


    return (
        <>
            <Flex align={"center"} justify={"center"} vertical>
                <Title level={1}>System rekomendacji książek oparty o zawartość</Title>
                <Title level={2}>Twoje książki</Title>
                <FileDragger/>
                <Flex gap={'large'} wrap={'wrap'} className={"books-list"}>
                    {books.map((book) => (
                        <Book key={book.title} book={book}/>
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