import { Spin, Typography } from "antd";

interface IProps {
    status: string;
    message: string;
}

const { Title, Text } = Typography;
const BookLoading = ({ status, message }: IProps) => {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-full">
                <Spin className="my-4" />
                <Title level={5}>{status}</Title>
                <Text>{message}</Text>
            </div>
        </>
    );
};

export default BookLoading;
