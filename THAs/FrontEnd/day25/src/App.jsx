import React from 'react';
import './App.css';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card"
function App() {
   return (
      <section>
         <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./logo512" />
            <Card.Body>
               <Card.Title>Card Title</Card.Title>
               <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
               </Card.Text>
               <Button variant="danger" style={{
                  borderRadius: '10px',
               }}
               >
                  Go somewhere</Button>
            </Card.Body>
         </Card>

         <Card style={{ 
            width: '18rem',
            marginTop: '1rem'    
         }}
            >
            <Card.Body>
               <Card.Title>Card Title</Card.Title>
               <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
               <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
               </Card.Text>
               <Card.Link href="#">Card Link</Card.Link>
               <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
         </Card>
      </section>

   );
}

export default App;
