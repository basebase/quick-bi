import React from "react";
import { Card, Space, Col, Row } from 'antd';
import ReactECharts from 'echarts-for-react';

const op1 = {
    title: {
        text: 'Stacked Area Chart'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Email',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Union Ads',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'Video Ads',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: 'Direct',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: 'Search Engine',
          type: 'line',
          stack: 'Total',
          label: {
            show: true,
            position: 'top'
          },
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
};

let op2 = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          areaStyle: {}
        }
      ]
};

function AreaChart() {
    return (
        
        <div>
          <Row gutter={16} style={{ marginBottom: '20px' }}>
            <Col span={12}>
              <Card title="Card title" bordered={false}>
                <ReactECharts option={op1} />
              </Card>
            </Col>
            <Col span={12}>
              <Card title="Card title" bordered={false}>
                <ReactECharts option={op2} />
              </Card>
            </Col>
          </Row>

          <Row gutter={16} style={{ marginBottom: '20px' }}>
            <Col span={12}>
                <Card title="Card title" bordered={false}>
                    <ReactECharts option={op1} />
                </Card>
            </Col>
            <Col span={12}>
                <Card title="Card title" bordered={false}>
                    <ReactECharts option={op2} />
                </Card>
            </Col>
          </Row>
          
          <Row gutter={16}>
            <Col span={12}>
                <Card title="Card title" bordered={false}>
                    <ReactECharts option={op1} />
                </Card>
            </Col>
            <Col span={12}>
                <Card title="Card title" bordered={false}>
                    <ReactECharts option={op2} />
                </Card>
            </Col>
          </Row>
        </div>
        
    )
}

export { AreaChart };

