import React from 'react';
import './styles.css';

// components
import { Row, Col, Button } from 'antd';

export default function PersonalizedPlan(props) {
    let { data } = props.data;
    let { lineDetails, plans } = data;
    const noOfLines =
        lineDetails && lineDetails.length > 0
            ? lineDetails.length >= 5
                ? 4
                : lineDetails.length
            : 4;
    const defaultPlans = {
        1: [
            {
                description: '2 Lines for $90/mo.',
                title: '$45 per line/mo.',
                otherDetails: 'Unlimited + 15 GB Mobile Hotspot',
                shortDetails: 'Nationwide 5G Access',
                button: {
                    type: 'primary',
                    name: 'UPGRADE',
                    buttonProps: {
                        size: 12,
                    },
                },
            },
            {
                description: '3 Lines for $110/mo.',
                title: '$37 per line/mo.',
                otherDetails: 'Unlimited + 15 GB Mobile Hotspot',
                shortDetails: 'Nationwide 5G Access',
                button: {
                    type: 'primary',
                    name: 'UPGRADE',
                    buttonProps: {
                        size: 12,
                    },
                },
            },
            {
                description: '4 Lines for $130/mo.',
                title: '$33 per line/mo.',
                otherDetails: 'Unlimited + 15 GB Mobile Hotspot',
                shortDetails: 'Nationwide 5G Access',
                button: {
                    type: 'primary',
                    name: 'UPGRADE',
                    buttonProps: {
                        size: 12,
                    },
                },
            },
        ],
        2: [
            {
                description: '3 Lines for $110/mo.',
                title: '$37 per line/mo.',
                otherDetails: 'Unlimited + 15 GB Mobile Hotspot',
                shortDetails: 'Nationwide 5G Access',
                button: {
                    type: 'primary',
                    name: 'UPGRADE',
                    buttonProps: {
                        size: 12,
                    },
                },
            },
            {
                description: '4 Lines for $130/mo.',
                title: '$33 per line/mo.',
                otherDetails: 'Unlimited + 15 GB Mobile Hotspot',
                shortDetails: 'Nationwide 5G Access',
                button: {
                    type: 'primary',
                    name: 'UPGRADE',
                    buttonProps: {
                        size: 12,
                    },
                },
            },
            {
                description: '5 Lines for $160/mo.',
                title: '$32 per line/mo.',
                otherDetails: 'Unlimited + 15 GB Mobile Hotspot',
                shortDetails: 'Nationwide 5G Access',
                button: {
                    type: 'primary',
                    name: 'UPGRADE',
                    buttonProps: {
                        size: 12,
                    },
                },
            },
        ],
        3: [
            {
                description: '4 Lines for $130/mo.',
                title: '$33 per line/mo.',
                otherDetails: 'Unlimited + 15 GB Mobile Hotspot',
                shortDetails: 'Nationwide 5G Access',
                button: {
                    type: 'primary',
                    name: 'UPGRADE',
                    buttonProps: {
                        size: 12,
                    },
                },
            },
            {
                description: '4 Lines for $100/mo.',
                title: '$25 per line/mo.',
                otherDetails: 'Unlimited',
                shortDetails: 'High-Speed Data',
                button: {
                    type: 'primary',
                    name: 'UPGRADE',
                    buttonProps: {
                        size: 12,
                    },
                },
            },
            {
                description: '5 Lines for $160/mo.',
                title: '$32 per line/mo.',
                otherDetails: 'Unlimited + 15 GB Mobile Hotspot',
                shortDetails: 'Nationwide 5G Access',
                button: {
                    type: 'primary',
                    name: 'UPGRADE',
                    buttonProps: {
                        size: 12,
                    },
                },
            },
        ],
        4: [
            {
                description: '5 Lines for $160/mo.',
                title: '$32 per line/mo.',
                otherDetails: 'Unlimited + 15 GB Mobile Hotspot',
                shortDetails: 'Nationwide 5G Access',
                button: {
                    type: 'primary',
                    name: 'UPGRADE',
                    buttonProps: {
                        size: 12,
                    },
                },
            },
            {
                description: '5 Lines for $125/mo.',
                title: '$25 per line/mo.',
                otherDetails: 'Unlimited',
                shortDetails: 'High-Speed Data',
                button: {
                    type: 'primary',
                    name: 'UPGRADE',
                    buttonProps: {
                        size: 12,
                    },
                },
            },
            {
                description: '5 Lines for $130/mo.',
                title: '$26 per line/mo.',
                otherDetails: '10 GB',
                shortDetails: 'High-Speed Data',
                button: {
                    type: 'primary',
                    name: 'UPGRADE',
                    buttonProps: {
                        size: 12,
                    },
                },
            },
        ],
    };
    const personalizedPlans = plans ? plans : defaultPlans[noOfLines];

    return (
        <Col xs={{ span: 24 }} className="p-0">
            <div>
                <div className="personalized-plan-header">
                    <h3 className="personalized-plan-header-text m-0">
                        Personalized Plans For This Customer
                    </h3>
                </div>
                <Row className="personalized-plan-body">
                    {personalizedPlans &&
                        personalizedPlans.map((plan, planIndex) => {
                            return (
                                <Col
                                    key={planIndex}
                                    xs={{ span: 24 }}
                                    lg={{ span: 8 }}
                                    className="personalized-plan-body-col"
                                >
                                    <div className="personalized-plan-body-header">
                                        {plan.description}
                                    </div>
                                    <h3 className="personalized-plan-body-header-green m-0">
                                        {plan.title}
                                    </h3>
                                    <div className="flex-row justify-content-between mt-2">
                                        <div className="personalized-plan-body-header subtext-color">
                                            <div>{plan.otherDetails}</div>
                                            <div>{plan.shortDetails}</div>
                                        </div>
                                        <Button
                                            className="personalized-plan-button"
                                            {...plan.button.buttonProps}
                                        >
                                            {plan.button.name &&
                                                plan.button.name}
                                        </Button>
                                    </div>
                                </Col>
                            );
                        })}
                </Row>
            </div>
        </Col>
    );
}
