import React from 'react';
import { Container, Card, ListGroup, Alert } from 'react-bootstrap';

const MarriageRequirements = () => {
  return (
    <Container className="my-5">
      <Card className="shadow-lg" bg="light">
        <Card.Body>
          <h1 className="text-center display-4 fw-bold mb-4">Marriage Requirements</h1>
          <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">Make sure you see the parish priest of St. John the Evangelist Parish first before you fix your date of marriage, at least three months before. The people to marry are the ones to book the wedding in person – NOT THROUGH PARENTS OR FRIENDS. They must both present themselves physically to the parish office for the process of marriage booking and preparations to start.</ListGroup.Item>
            <ListGroup.Item as="li">If you are not from St. John’s Parish, make sure you bring a letter of introduction to St. John Parish from your parish priest indicating that he is aware of your wedding plans.</ListGroup.Item>
            <ListGroup.Item as="li">You must bring your Baptismal Certificate as proof that you are baptized. For a Mixed Marriage where one person is not catholic (Protestant) then you will need the permission of the Bishop of Nairobi; by both bride and bridegroom filling forms together in the Father’s Office, at latest two months before the wedding. The forms are then taken to the Bishop who will study the situation and sign the “Dispensation from canonical form of marriage” to allow the marriage to go on.</ListGroup.Item>
            <ListGroup.Item as="li">You will need to have at least five marriage sessions (instructions) before the marriage ceremony. Arrange this with the priest to officiate your wedding two months before the wedding.</ListGroup.Item>
            <ListGroup.Item as="li">You will need to go to Sheria House to obtain a Government of Kenya Registrar Certificate within three months before the wedding. Sheria House will require you to take from St. John’s Parish a copy of the Priest’s License to officiate marriage and the registration number of the parish’s marriage Certificate book. If you are already in a Civil Marriage all of the above in this number is not required.</ListGroup.Item>
            <ListGroup.Item as="li">Both the bridegroom and bride will fill out forms from St. John the Evangelist Church and return them to the same place in good time.</ListGroup.Item>
            <ListGroup.Item as="li">Rehearsals for your wedding must be arranged with our office in good time. The actual rehearsal will be done in the Church three days before the wedding.</ListGroup.Item>
            <ListGroup.Item as="li">The Sacrament of Reconciliation (confession) is necessary for those to marry a day or so before the wedding.</ListGroup.Item>
            <ListGroup.Item as="li">The best man and best maid should be practicing Catholics. If they are not catholic you need to discuss the matter with the parish priest first at St. John’s. The best couple should produce a copy of their marriage certificate.</ListGroup.Item>
            <ListGroup.Item as="li">You will pay Ksh. 15,000 which will be used to prepare the church for the wedding, pay for security, process the Marriage Certificate, and other related costs. To discourage lateness we ask you to deposit Ksh. 5,000 which is refundable if you are on time on the day of the wedding. If you are late it will not be refunded. So the total to pay is Ksh. 20,000. Half of the amount should be paid at booking.</ListGroup.Item>
            <ListGroup.Item as="li">During your wedding, prepare three flowers of the same size for the altar which should remain in the church after the celebration.</ListGroup.Item>
            <ListGroup.Item as="li">Hall booking is Ksh. 20,000 for reception from 6:00 A.M to 6:00 P.M. After 6:00 P.M one is penalized Ksh. 10,000 which caters for cleaning and late departure. Music MUST be regulated.</ListGroup.Item>
            <ListGroup.Item as="li">Prepare a stipend of not less than Ksh. 5,000 for the officiating Priest to be deposited at the office of the parish secretary before the actual wedding day.</ListGroup.Item>
            <ListGroup.Item as="li">There is a facility for live streaming of the ceremony. This is optional for those who wish to have it; the charge is Ksh. 5,000.</ListGroup.Item>
            <ListGroup.Item as="li">Your wedding announcements (Banns) will be made three times in your home parish. You must bring to St. John’s Office the contact/s of your parish/priest where the banns will be sent.</ListGroup.Item>
            <ListGroup.Item as="li">Both the bride and bridegroom must meet with the priest at the parish (St. John the Evangelist) to finalize the marriage arrangements two weeks before the wedding.</ListGroup.Item>
            <ListGroup.Item as="li">Offertory gifts: wine, host & other gifts like foodstuffs, tissue papers etc.</ListGroup.Item>
            <ListGroup.Item as="li">You must bring a Copy of your I.D./Passport to the parish office.</ListGroup.Item>
            <ListGroup.Item as="li">The priest’s office day is THURSDAY for marriage matters.</ListGroup.Item>
          </ListGroup>

          <Alert variant="secondary" className="mt-4">
            <Alert.Heading as="h4" className="text-center">For More Info Contact the Parish Office</Alert.Heading>
            <p className="text-center">Your opinions are important to us. Whether it is a simple question or a valuable suggestion. You can call us by phone or email us directly.</p>
            <hr />
            <div className="text-center">
              <p className="mb-1"><i className="fas fa-phone me-2"></i>0797828903</p>
              <p className="mb-0"><i className="fas fa-envelope me-2"></i>info@stjohntheevangelisttchurch.co.ke</p>
              <div className="mt-3">
                {/* Replace # with actual links */}
                <a href="#!" aria-label="Facebook" className="btn btn-outline-primary mx-1"><i className="fab fa-facebook-f"></i></a>
                <a href="#!" aria-label="Email" className="btn btn-outline-secondary mx-1"><i className="fas fa-envelope"></i></a>
                <a href="#!" aria-label="WhatsApp" className="btn btn-outline-success mx-1"><i className="fab fa-whatsapp"></i></a>
                <a href="#!" aria-label="X" className="btn btn-outline-dark mx-1"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </Alert>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MarriageRequirements;