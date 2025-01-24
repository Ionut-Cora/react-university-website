import React from 'react';
import './ChooseSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faFaceSmile, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'react-bootstrap';

function ChooseSection() {
  return (
    <div className='choose-section'>
        <div className="container">
            <h2 className='text-center mb-5'>Why choose University of Arts & Technology?</h2>
            <div className='row g-4'>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center border-0 h-100'>
                        <div className='mt-3'>
                            <FontAwesomeIcon icon={faTrophy} />
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center mb-3'>
                                2 trophies received
                            </Card.Title>
                            <Card.Text className='text-center'>
                                Over time, the University of London has obtained 2 very important trophies for the high graduation rate of our students and for the involvement of teachers in their education.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center border-0 h-100'>
                        <div className='mt-3'>
                            <FontAwesomeIcon icon={faFaceSmile} />
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center mb-3'>
                                We keep our students happy
                            </Card.Title>
                            <Card.Text className='text-center'>
                                We always strive to keep our students happy, we motivate them as we know best so that they are very good at school and they like studying at our university.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center border-0 h-100'>
                        <div className='mt-3'>
                            <FontAwesomeIcon icon={faLocationDot} />
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center mb-3'>
                                3 locations in England
                            </Card.Title>
                            <Card.Text className='text-center'>
                                Over time we expanded and you can find us in 3 top locations in England. You can find us primarily in London, our first and most important center, in Manchester and Liverpool as well.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChooseSection;