import {Button, Flex, InputNumber, Spin, Typography} from "antd";
import './Recommendations.css'
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {useState} from "react";
import Book from "../Book/Book.tsx";

const {Text} = Typography;


interface IProps {
    selectedBooks: IUserBook[];
}

const fetchRecommendations = async (bookIds: number[], count: number) => {
    bookIds = [1, 2, 3, 4, 5];
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

    const sortedRecommendations = data?.sort((a, b) => b.similarity - a.similarity) ?? [];

    const handleFetchRecommendations = () => {
        refetch(); // This will refetch the data when the button is clicked
    };

    return (
        <div className={"recommend-block"}>
            {isLoading && (
                <Flex className="recommend-loading" align="center" justify="center">
                    <Spin/>
                    <Text className="recommendations-loading__text">Szukanie rekomendacji...</Text>
                </Flex>
            )}

            <Flex className={"recommend-number"} align="center" justify="center" gap="small">
                <InputNumber addonBefore="Ilość rekomendacji: " min={2} max={10000} defaultValue={5}
                             onChange={value => {
                                 if (typeof value === 'number') {
                                     setRecommendationCount(value);
                                 }
                             }}/>
            </Flex>
            <Flex className="recommend-field" align="center" justify="center" gap="small">
                <Button size="large" type="primary" onClick={handleFetchRecommendations}>
                    Znajdź remkomendacje
                </Button>
            </Flex>

            {isSuccess && (<>
                    <Flex gap='large' wrap='wrap' style={{margin: 'auto'}}>
                        {sortedRecommendations.map((recommendation, index) => (
                            <Book key={index} book={recommendation} canBeSelected={false} selected={false}
                                  toggleSelectedBook={() => {
                                  }} similarity={recommendation.similarity}/>
                        ))}
                    </Flex>
                    <Flex align="center" justify="center" gap="small">
                        <Text>Ilość trafionych rekomendacji względem informacji z datasetu</Text>
                        <Text>{sortedRecommendations.reduce((acc, recommendation) => acc + (recommendation.is_in_similar_books ? 1 : 0), 0)} / {recommendationCount}</Text>
                    </Flex>
                </>
            )}
        </div>
    );
}

export default Recommendations;
