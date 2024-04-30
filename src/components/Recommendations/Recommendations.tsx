import {Button, Flex, InputNumber, Spin, Typography} from "antd";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {useEffect, useState} from "react";
import RecommendedBooks from "./RecommendedBooks.tsx";

const {Text} = Typography;


interface IProps {
    selectedBooks: IUserBook[];
}

const fetchRecommendations = async (bookIds: number[], count: number): Promise<IRecommendedBookWithTask[]> => {
    const response = await axios.post(`http://localhost:8000/recommendations/find_recommendations`, {
        ids: bookIds,
        k: count
    });
    console.log(response);
    return response.data;
}

const Recommendations = ({selectedBooks}: IProps) => {
    const [recommendationCount, setRecommendationCount] = useState(5);
    const fetchKey = ['recommendations', selectedBooks.map(book => book.id), recommendationCount];

    const {data, isLoading, isSuccess, refetch} = useQuery({
        queryKey: fetchKey,
        queryFn: () => fetchRecommendations(selectedBooks.map(book => book.id), recommendationCount),
        enabled: false,
    });

    const sortedRecommendations = data?.sort((a, b) => b.book.similarity - a.book.similarity) ?? [];

    useEffect(() => {
        if (isSuccess) {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [isSuccess]);

    const handleFetchRecommendations = () => {
        refetch(); // This will refetch the data when the button is clicked
    };

    return (
        <div className="mt-16 w-full mb-8">
            {isLoading && (
                <Flex className="my-4" align="center" justify="center">
                    <Spin/>
                    <Text className="ml-4">Szukanie rekomendacji...</Text>
                </Flex>
            )}

            <Flex align="center" justify="center" gap="small">
                <InputNumber addonBefore="Ilość rekomendacji: " min={2} max={10000} defaultValue={5}
                             onChange={value => {
                                 if (typeof value === 'number') {
                                     setRecommendationCount(value);
                                 }
                             }}/>
            </Flex>
            <Flex className="my-8" align="center" justify="center" gap="small">
                <Button size="large" type="primary" onClick={handleFetchRecommendations}
                        disabled={selectedBooks.length === 0}>
                    Znajdź remkomendacje
                </Button>
            </Flex>

            {isSuccess && (
                <>
                    <Flex gap='large' justify="center" wrap='wrap' style={{margin: 'auto'}}>
                        <RecommendedBooks recommendedBooks={sortedRecommendations}/>
                    </Flex>
                    <Flex className="mt-4" align="center" justify="center" gap="small">
                        <Text className="text-xl">Ilość trafionych rekomendacji względem informacji z Goodreads&nbsp;
                            {sortedRecommendations.reduce((acc, recommendation) =>
                                acc + (recommendation.book.is_in_similar_books ? 1 : 0), 0)}/{recommendationCount}
                        </Text>

                    </Flex>
                </>
            )}
        </div>
    );
}

export default Recommendations;
