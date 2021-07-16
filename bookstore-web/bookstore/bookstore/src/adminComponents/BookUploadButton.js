import {Upload, Button} from 'antd';
import {UploadOutlined} from "@ant-design/icons";
import React from 'react';

class BookUpload extends React.Component {
    state = {
        fileList: [],
    };

    handleChange = info => {
        let fileList = [...info.fileList];

        // 1. Limit the number of uploaded files
        // Only to show two recent uploaded files, and old ones will be replaced by the new
        // fileList = fileList.slice(-2);
        // 2. Read from response and show file link
        fileList = fileList.map(file => {
            if (file.response) {
                // Component will show file.url as link
                file.url = file.response.url;
            }
            return file;
        });
        console.log(fileList);
        this.setState({fileList});
    };

    render() {
        return (
            <Upload
                multiple={false}
                onChange={this.handleChange}
                maxCount={1}
                action={"http://localhost:8080/bookUpload"}
                fileList={this.state.fileList}
                withCredentials={true}
            >
                <Button icon={<UploadOutlined/>}>导入书籍信息</Button>
            </Upload>
        );
    }
}

export default BookUpload;