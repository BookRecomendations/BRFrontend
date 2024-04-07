import {message, Upload, UploadProps} from "antd";
import {InboxOutlined} from '@ant-design/icons';

const {Dragger} = Upload;

interface IProps {
    setBooks: (books: any) => void;
}

const FileDragger = ({setBooks}: IProps) => {

    const handleBooksResponse = (response: IBookImportResult[]) => {
        setBooks(response);
    }

    const props: UploadProps = {
        name: 'file',
        action: 'http://127.0.0.1:8000/books/load_goodreads_books',
        headers: {},
        maxCount: 1,
        beforeUpload: (file) => {
            const isCSV = file.type === 'text/csv' || file.type === 'application/vnd.ms-excel'; // Check if the file is a CSV
            if (!isCSV) {
                message.error(`${file.name} is not a csv file`);
            }
            return isCSV || Upload.LIST_IGNORE; // Only allow CSV files or ignore the file
        },
        onChange(info) {
            const {status} = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
                console.log(info.file.response);
                handleBooksResponse(info.file.response);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    return (
        <Dragger {...props}>
            <p className="ant-upload-drag-icon">
                <InboxOutlined/>
            </p>
            <p className="ant-upload-text">Kliknij lub upuść plik aby go przesłać</p>
            <p className="ant-upload-hint">
                Prześlij plik CSV z książkami z serwisu Goodreads
            </p>
        </Dragger>
    )
};
export default FileDragger;