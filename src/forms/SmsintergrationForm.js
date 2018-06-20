import React from 'react';
import ReactDOM from 'react-dom'
import { Form, Icon, Tooltip, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
 class SmsintegrationForm extends React.Component
 {
    smstestobject ={
        chpphonenumber:'',
        hhnumber:'',
        reference_date:'',
        reference_id:''
    };
   
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }
      render() {
        const { getFieldDecorator } = this.props.form;
    
        const formItemLayout = {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
          },
        };
        const tailFormItemLayout = {
          wrapperCol: {
            xs: {
              span: 24,
              offset: 0,
            },
            sm: {
              span: 16,
              offset: 8,
            },
          },
        };
        return (
          <Form onSubmit={this.handleSubmit} className="smstest">
            <FormItem
          {...formItemLayout}
          label={(
            <span>
              CHV Phone Number&nbsp;
              <Tooltip title="Used to Lookup CHV">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
        >
          {getFieldDecorator('chpphoneno', {
            rules: [{ required: true, message: 'Please input CHV Phone Number', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              HH NUmber&nbsp;
              <Tooltip title="Household Phone number?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
        >
          {getFieldDecorator('hhphoneno', {
            rules: [{ required: true, message: 'Please input a HH Phone NUmber', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              Reference&nbsp;
              <Tooltip title="What is the reference Date - EDD for Pregnancy , Date for Next Refill ETC">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
        >
          {getFieldDecorator('ref_date', {
            rules: [{ required: true, message: 'Please select date a date', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>Remember me</Checkbox>
              )}
              <a className="login-form-forgot" href="">Forgot password</a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <a href="">register now!</a>
            </FormItem>
          </Form>
        );
      }
    }
    
export default SmsintegrationForm;