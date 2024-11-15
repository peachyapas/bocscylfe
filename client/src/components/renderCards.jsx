import { Card, Row, Col } from 'react-bootstrap';

// Helper function to check if it's a Supabase image URL (this part stays the same)

const SUPABASE_STORAGE_URL = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/sign/all/`;

const isSupabaseImageUrl = (value) => {
    return typeof value === 'string' && value.startsWith(SUPABASE_STORAGE_URL);
};

// Render cards with portraitPicture as an image (using <Card.Image>)
const RenderCards = (data, tableName) => {
    if (data.length === 0) return null;
    const headers = Object.keys(data[0]);
    const excludedFields = ['firstname', 'lastname', 'authorid', 'portraitPicture'];     // Define the fields that should not appear in the Card.Text

    // Function to render the fields in Card.Text
    const renderCardContent = (item, header) => {
        if (excludedFields.includes(header)) return null;
        return (
            <div key={header} className="mb-2">
                <strong>{header}:</strong> {renderCardValue(item[header])}
            </div>
        );
    };

    return (
        <div>
            <h1>{tableName}</h1>
            <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
                {data.map((item, index) => {
                    return (
                        <Col key={index}>
                            <Card className="h-100">
                                {/* Render the portraitPicture as an image */}
                                {item.portraitPicture && isSupabaseImageUrl(item.portraitPicture) && (
                                    <Card.Img
                                        variant="top"
                                        src={item.portraitPicture}
                                        alt={`Portrait of ${item.firstname} ${item.lastname}`}
                                        style={{
                                            width: '100%',
                                            height: '200px',
                                            objectFit: 'cover',
                                            borderTopLeftRadius: '0',
                                            borderTopRightRadius: '0',
                                        }}
                                    />
                                )}

                                {/* Card body with other details */}
                                <Card.Body>
                                    {/* Card Title shows Author's full name */}
                                    <Card.Title>{`${item.firstname} ${item.lastname}`}</Card.Title>

                                    {/* Render all other fields except excluded ones */}
                                    <Card.Text>
                                        {headers.map((header) => renderCardContent(item, header))}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
};

// Helper function to render values in a user-friendly way
const renderCardValue = (value) => {
    if (typeof value === 'boolean') {
        return value ? 'Yes' : 'No';
    }
    return String(value);
};

export default RenderCards;