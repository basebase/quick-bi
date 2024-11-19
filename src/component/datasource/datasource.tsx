import React from "react";
import { Col, Row, Button, Tabs } from 'antd';
import { StarOutlined, StarFilled, FireTwoTone, CarTwoTone } from '@ant-design/icons';


import './datasource.css';


function DataSourceTabs() {
    const onChange = (key: string) => {
        console.log(key);
    };


    function DB() {
        return (
            <div>
                <Row align='middle'>
                    <Col span={2}>
                        <CarTwoTone style={{ fontSize: '30px' }} />
                    </Col>
                    <Col span={4}>
                        <div>自建mysql</div>
                        <div>所有者: joe</div>
                    </Col>
                </Row>
                <hr />
                <Row align='middle'>
                    <Col span={2}>
                        <CarTwoTone style={{ fontSize: '30px' }} />
                    </Col>
                    <Col span={4}>
                        <div>自建hive</div>
                        <div>所有者: joe</div>
                    </Col>
                </Row>
                
            </div>
        )
    }

    let items = [
        {
            key: '1',
            label: '我的数据源',
            children: <DB />,
        }, 

        {
            key: '2',
            label: '模版数据源',
            children: '还没有数据',
        }
    ]

    return (
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    )

}

function DataSourcePageHome() {
    return (
        <div>
            <Row align='middle'>
                <Col span={2}>
                    <span style={{ fontSize: '20px' }}>数据源</span>
                </Col>
            </Row>
            <Row justify='end'>
                <Col>
                    <Button type="primary">新建数据源</Button>
                </Col>
            </Row>

            <Row className="datasource_tabs">
                <Col span={12}>
                    <DataSourceTabs />
                </Col>
                <Col span={12}>
                    1
                </Col>
            </Row>
        </div>
    )
}

export { DataSourcePageHome }