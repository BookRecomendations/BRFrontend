import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import Books from "../pages/books/Books.tsx";
import PageLayout from "../pages/PageLayout.tsx";
import Book from "../components/Book/Book.tsx";

const ComponentPreviews = () => {
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
        </Previews>
    );
};

export default ComponentPreviews;