import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const RecentlyUsed = () => {
  return (
    <CardGroup>
      <Card>
        <Card.Body>
          <Card.Title>UPI</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Food</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Shop</Card.Title>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default RecentlyUsed;
