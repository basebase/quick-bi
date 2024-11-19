import React from "react";
import { BorderBox1, Decoration9 } from '@jiaminghi/data-view-react';
import { Card, Space, Col, Row } from 'antd';


function DataV() {
    return (
        <div>
            <Row gutter={16} style={{ marginBottom: '20px' }}>
                <Col span={12}>
                    <BorderBox1 style={{width: '150px', height: '150px'}}>lext 1</BorderBox1>
                </Col>
                <Col span={12}>
                    <Decoration9 style={{width: '150px', height: '150px'}}>66%</Decoration9>
                </Col>
            </Row>
            <Row gutter={16} style={{ marginBottom: '20px' }}>
                <Col span={12}>
                    <BorderBox1>lext 1</BorderBox1>
                </Col>
                <Col span={12}>
                    <Decoration9 style={{width: '150px', height: '150px'}}>66%</Decoration9>
                </Col>
            </Row>
        </div>
    )
}

export { DataV };