import React from 'react'
import {Card} from 'antd';
import 'antd/dist/antd.css';
import '../css/bootstrap-3.3.7-dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
const {Meta} = Card;
class DisplayCard extends React.Component {
    render() {
        const {info} = this.props;
        return (
            <Card
                style={{width: 180}}
                cover={<img
                    width={180}
                    height={180}
                    src={info.image1}
                ></img>}
                actions={[
                    <Link to={{
                    pathname: '/bookDetails',
                    search: '?id=' + info.bookId}}
                    >查看详情</Link>
                ]}
            >
                <Meta title={info.title} description={info.author}/>
                {/*<Link to={`/BookDetail/${info.id}`}>查看详情</Link>*/}

            </Card>
        )
    }
};
export default DisplayCard;