import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function ListItem({ products }) {
  const listItems = products.map((product) => (
    <>
      <Card style={{ width: "20rem", margin: "2rem 0" }} key={product.id}>
        <Card.Img variant="top" src={product.src} />
        <Card.Body>
          <Card.Title>
            {" "}
            <h3>{product.name}</h3>
          </Card.Title>
          <Card.Title>
            {" "}
            <h5>{product.category}</h5>
          </Card.Title>
          <Card.Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit,
            libero quia? Obcaecati suscipit
          </Card.Text>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <Button
              style={{
                background: "#6D4FC2",
                fontSize: "1rem",
                fontWeight: "800",
              }}>
              Check Out
            </Button>
            <Button
              style={{
                background: product.stocked ? "green" : "red",
                fontSize: "1rem",
                fontWeight: "800",
                margin: "0 1rem",
              }}>
              {product.price}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  ));
  return (
    <div>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
          width: "60%",
          margin: "auto",
        }}>
        {listItems}
      </ul>
    </div>
  );
}
