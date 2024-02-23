import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useState, useEffect } from "react";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Banner = () => {
    // Animation code
    // store the current loop number
    const [loopNumber, setLoopNumber] = useState(0);

    // stores current character
    const [isDeleting, setIsDeleting] = useState(false);

    // store the rotating words
    const toRotate = ["Software Developer", "Web Developer", "Web Designer"];
    const [text, setText] = useState('');

    // how faster the next letter comes when one is typed
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    // transition between each word
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(() =>{
            tick();
        }, delta)
        return () => { clearInterval(ticker) };
    },[text]);

    const tick = () => {
        // we have to loop back to start
        let i = loopNumber % toRotate.length;
        // get the current full text
        let fullText = toRotate[i];
        // future text to be set to one letter less than current letters if it is deleting state updated
        let updatedText = isDeleting ?
                            fullText.substring(0, text.length -  1):
                            fullText.substring(0, text.length +  1);

        // update state to updated text
        setText(updatedText);

        // If state is isDeleting - update the delta and compare to previous delta
        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }

        // Finished typing out the word
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        // We got to point where text became completly deleted
        else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNumber(loopNumber + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) => 
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <span className="tagline">
                            Welcome to my Portfolio
                        </span>
                        <h1>
                            {`Hi I'm Noopur. `}
                            <span className="wrap">{text}</span>
                        </h1>
                        <p>
                            About youself - TODO
                        </p>
                        <button onClick={() => console.log('connect')}>
                            Let's Connect<ArrowRightCircle size={25} />
                        </button>
                        </div>
                        }
                        </TrackVisibility>
                    </Col>

                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg}  alt="Header" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}