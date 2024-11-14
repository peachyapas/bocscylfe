import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Card, Row, Col } from 'react-bootstrap';

// Replace with your actual Supabase storage URL
// const SUPABASE_STORAGE_URL = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/sign/rfo_imgs/`;
// const SUPABASE_STORAGE_URL_PUBLIC = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/rfo_imgs/`;

// Dynamically render cards based on data keys
const RenderCards = (data, tableName) => {
    if (data.length === 0) return null;

    const headers = Object.keys(data[0]);

    return (
        <div>
            <h1>{tableName} Cards</h1>
            <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
                {data.map((item, index) => (
                    <Col key={index}>
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title>{`Item ${index + 1}`}</Card.Title>
                                <Card.Text>
                                    {headers.map((header, i) => (
                                        <div key={i} className="mb-2">
                                            <strong>{header}:</strong>{' '}
                                            {renderCardValue(item[header])}
                                        </div>
                                    ))}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

// Helper function to render values in a user-friendly way
const renderCardValue = (value) => {
    if (typeof value === 'boolean') {
        return value ? 'Yes' : 'No';
    }
    // if (isSupabaseImageUrl(value)) {
    //     return <img src={value} alt="IMAGE" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />;
    // }
    return String(value);
};

// // Helper function to determine if a value is a Supabase storage URL
// const isSupabaseImageUrl = (value) => {
//     return typeof value === 'string' && value.startsWith(SUPABASE_STORAGE_URL);
// };

export default RenderCards;
