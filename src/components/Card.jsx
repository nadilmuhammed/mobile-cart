import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({products,setCart}) {

    
    
    const handleButtonID = (id)=> {
        setCart(id)
    }
    
    console.log(setCart,"button");
    const { id,name,Body,price,Image } = products

  return (
    <div className='cards' style={{display:"inline-flex",margin:"20px"}}>
        <Card className='mt-5' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Image} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Title>${price}</Card.Title>
            <Card.Text>
            {Body}
            </Card.Text>
            <Button variant="primary" onClick={()=>handleButtonID(id)}>Add to cart</Button>
        </Card.Body>
        </Card>

    </div>
  );
}

export default BasicExample;