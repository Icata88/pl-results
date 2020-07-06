import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { setLocalStorageComments, getLocalStorageComments } from '../utils/helperMethods';

const layout = {
    wrapperCol: { span: 24 }
}

export class SubmitForm extends Component {
    constructor(props) {
        super(props);
    }

    onFinish = (values) => {
        this.props.pushComment(values);
    }

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }

    render() {
        return (
            <Form
                {...layout}
                name='basic submit form'
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}>
                <Form.Item rules={[
                    {
                        required: true,
                        message: 'Please enter your username'
                    }
                ]} name='username'>
                    <Input placeholder='Enter your username' />
                </Form.Item>        
                <Form.Item rules={[
                    {
                        required: true,
                        message: 'Please enter your favourite team'
                    }
                ]} name='favTeam'>
                    <Input placeholder='Enter your favourite team' />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}