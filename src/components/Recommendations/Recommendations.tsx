import {Button, Flex, InputNumber, Spin, Typography} from "antd";
import './recommendations.css'
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {useState} from "react";

const {Text} = Typography;

interface IUserBook {
    book_id: number;
}

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
    const fetchKey = ['recommendations', selectedBooks.map(book => book.book_id), recommendationCount];

    const {data, isLoading, isSuccess, refetch} = useQuery({
        queryKey: fetchKey,
        queryFn: () => fetchRecommendations(selectedBooks.map(book => book.book_id), recommendationCount),
        enabled: false,
    });

    const handleFetchRecommendations = () => {
        refetch(); // This will refetch the data when the button is clicked
    };

    return (
        <div className={"recommend-block"}>

            <Flex className={"recommend-number"} align="center" justify="center" gap="small">
                <InputNumber addonBefore="Ilość rekomendacji: " min={2} max={20} defaultValue={5}
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

            {isLoading && (
                <>
                    <Spin/>
                    <Text className="recommendations">Loading recommendations...</Text>
                </>
            )}
            {/*{isSuccess && data && (*/}
            {/*    <div>*/}
            {/*        {data.map((recommendation, index) => (*/}
            {/*            <div key={index}>{recommendation.title}</div>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
    );
}

export default Recommendations;
