import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { IconHome, IconCalendar, IconUser } from '@tabler/icons';

export const Navigation = () => {
    return (
        <Row>
            <Col>
                <IconHome/>
            </Col>
            <Col>
                <IconCalendar/>
            </Col>
            <Col>
                <IconUser/>
            </Col>
        </Row>
    )
}
