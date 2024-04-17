import './BookLoading.css';
import {Spin, Typography} from "antd";
interface IProps {
    status: string;
    message: string;
}

const {Title, Text} = Typography;
const BookLoading = ({status,message}:IProps) => {
    // status = "status";
    // message = "message";
    return (
        <>
            <div className="book_loading">
                <Spin/>
                <Title level={5}>{status}</Title>
                <Text>{message}</Text>
            </div>
        </>
    );
}

export default BookLoading;