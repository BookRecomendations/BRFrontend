import {Button, Flex} from "antd";
import Book from "../../components/Book/Book.tsx";
import FileDragger from "../../components/FileDragger/FileDragger.tsx";
import './Books.css';
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
        description: 'A book about a hobbit',
        url: 'https://www.goodreads.com/book/show/5907.The_Hobbit',
        imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1372847500l/5907.jpg',
        rating: 4.5,
    }];


    return (
        <>
            <FileDragger/>
            <Flex gap={'large'} wrap={'wrap'} className={"books-list"}>
                {books.map((book) => (
                    <Book key={book.title} book={book}/>
                ))}
            </Flex>
            <Flex className={"recommend-field"} align={'center'} justify={"center"}>
                <Button size={"large"} type="primary">Znajdź remkomendacje</Button>
            </Flex>
        </>
    )
};
export default Books;