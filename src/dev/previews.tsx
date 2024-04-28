import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import Books from "../pages/books/Books.tsx";
import PageLayout from "../pages/PageLayout.tsx";
import Book from "../components/Book/Book.tsx";
import BookLoading from "../components/BookLoading/BookLoading.tsx";
import Recommendations from "../components/Recommendations/Recommendations.tsx";

const ComponentPreviews = () => {

    const selectedBooks: IUserBook[] = [
        {
            book_id: 101,
            id: 1,
            title: "Journey to the Center of the Earth",
            description: "A classic science fiction novel by Jules Verne, featuring an adventurous journey below the Earth's surface.",
            url: "https://example.com/journey-center-earth",
            image_url: "https://example.com/images/journey-center-earth.jpg",
            user_rating: 4.5,
            average_rating: 4.2
        },
        {
            book_id: 102,
            id: 2,
            title: "Pride and Prejudice",
            description: "A romantic novel by Jane Austen about manners, upbringing, morality, education, and marriage in the society of the landed gentry of the British Regency.",
            url: "https://example.com/pride-prejudice",
            image_url: "https://example.com/images/pride-prejudice.jpg",
            user_rating: 4.8,
            average_rating: 4.3
        },
        {
            book_id: 103,
            id: 3,
            title: "The Great Gatsby",
            description: "A novel by F. Scott Fitzgerald set in the Jazz Age on Long Island, near New York City, it explores themes of decadence, idealism, resistance to change, social upheaval, and excess.",
            url: "https://example.com/great-gatsby",
            image_url: "https://example.com/images/great-gatsby.jpg",
            user_rating: 4.0,
            average_rating: 3.9
        },
        {
            book_id: 104,
            id: 4,
            title: "1984",
            description: "A dystopian social science fiction novel and cautionary tale by the English writer George Orwell.",
            url: "https://example.com/1984",
            image_url: "https://example.com/images/1984.jpg",
            user_rating: 4.2,
            average_rating: 4.5
        },
        {
            book_id: 105,
            id: 5,
            title: "To Kill a Mockingbird",
            description: "A novel by Harper Lee published in 1960. Instantly successful, widely read in high schools and middle schools in the United States. The plot and characters are loosely based on the author's observations of her family and neighbors, as well as on an event that occurred near her hometown of Monroeville, Alabama, in 1936.",
            url: "https://example.com/to-kill-a-mockingbird",
            image_url: "https://example.com/images/to-kill-a-mockingbird.jpg",
            user_rating: 4.7,
            average_rating: 4.6
        }
    ];


    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Books">
                <Books/>
            </ComponentPreview>
            <ComponentPreview path="/PageLayout">
                <PageLayout/>
            </ComponentPreview>
            <ComponentPreview path="/Book">
                <Book book={{
                    id: 1,
                    bookId: 2,
                    title: 'Harry Potter',
                    description: 'A book about a wizard',
                    url: 'https://www.goodreads.com/book/show/3.Harry_Potter_and_the_Sorcerer_s_Stone',
                    imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474154022l/3._SY475_.jpg',
                    rating: 4.5,
                }}/>
            </ComponentPreview>
            <ComponentPreview path="/BookLoading">
                <BookLoading/>
            </ComponentPreview>
            <ComponentPreview path="/Recommendations">
                <Recommendations selectedBooks={selectedBooks}/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;