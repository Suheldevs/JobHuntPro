import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide} from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import { Card, Container, Row, Col } from 'react-bootstrap'
// Import Swiper styles 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import testimonials from './Data/TestimonialsData';
function Testimonials() {
    return (
        <Container>
            <div className='text-center sm:mt-5 lg:mt-24'>
                <div className='h2'>Testimonials of Our Greate Services</div>
                <div className='h6 text-muted'>Lorem ipsum dolor sit amet elit, sed do eiusmod tempor</div>
            </div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                slidesPerView={1.2}
                centeredSlides={true}
                
                loop={true}
                autoplay={{ delay: 500 }}
                pagination={{ clickable: true }}
                className='my-5'
            >
                {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id} modules={[EffectFade]} effect="cube" className='mb-4'>
                        <Card className="shadow-sm p-4 mb-4 bg-white rounded ">
                            <Card.Body >
                                <h5 className="text-primary">{testimonial.title}</h5>
                                <p>{testimonial.description}</p>
                                <Row className="mt-4 align-items-center">
                                    <Col xs={2}>
                                        <img src={testimonial.imageSrc} roundedCircle fluid />
                                    </Col>
                                    <Col xs={10}>
                                        <h6 className="mb-0">{testimonial.name}</h6>
                                        <small className="text-muted">{testimonial.profession}</small>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                ))}


            </Swiper>
        </Container>
    );
};
export default Testimonials