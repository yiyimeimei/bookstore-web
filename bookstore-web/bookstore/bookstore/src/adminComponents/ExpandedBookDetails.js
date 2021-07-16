import React from 'react'
import {Col, Row, Typography} from "antd";
import PropTypes from 'prop-types'

const {Title, Paragraph} = Typography;

class ExpandedBookDetails extends React.Component {

    static propTypes = {
        image1: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    };

    render() {
        return (
            <Row align={"center"}>
                <Col span={4}>
                    <img style={{height: '120px', width: '120px'}} src={this.props.image1}>
                    </img>
                </Col>
                <Col span={8}>
                    <Typography>
                        <Title level={3}>
                            书籍详情
                        </Title>
                        <Paragraph>
                            {this.props.description}
                        </Paragraph>
                    </Typography>
                </Col>
            </Row>
        );
    }
}

export default ExpandedBookDetails;