import RecommendedBook from "../Book/RecommendedBook.tsx";
import RecommendedBookWrapper from "../BookWrapper/RecommendedBookWrapper.tsx";

interface IProps {
    recommendedBooks: IRecommendedBookWithTask[]
}

const RecommendedBooks = ({recommendedBooks}: IProps) => {

    return (
        <>
            {recommendedBooks.map((task, index) => {
                if (task.status === "ready") {
                    return <RecommendedBook key={index} book={task.book}/>
                }
                if (task.status === "running") {
                    return <RecommendedBookWrapper key={index} book={task}/>
                }
            })}
        </>
    );
}

export default RecommendedBooks;