import React from 'react';
import { Link } from 'react-router-dom';
import { Result, Button } from 'antd';
import Nav from '../components/Nav';
import Header from '../components/Header';



class NotFoundPage extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Nav />
                <Result
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
                    extra={<Link to="/"><Button type="primary">Back Home</Button></Link>}
                />
            </>
        )

    }
}
export default NotFoundPage;