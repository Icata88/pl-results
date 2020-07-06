import React, { Component } from 'react';
import { SubmitForm } from './SubmitForm';
import { CommentContainer } from './CommentContainer';
import { Row, Col } from 'antd';
import { getLocalStorageComments, setLocalStorageComments } from '../utils/helperMethods';

export class CommentSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: getLocalStorageComments()
        }
    }

    pushComment = (comment) => {
        setLocalStorageComments(comment);
        this.setState({ comments: getLocalStorageComments() });
    }

    render() {
        return (
            <Row>
                <Col span={8} offset={4}>
                    <SubmitForm pushComment={this.pushComment} />
                </Col>
                <Col span={10} offset={2}>
                    <CommentContainer comments={this.state.comments} />
                </Col>
            </Row>
        );
    }

}