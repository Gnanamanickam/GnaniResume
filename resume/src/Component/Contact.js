import React from 'react';
import { useState } from 'react';
import { send } from 'emailjs-com';

const Contact = () => {

    const [toSend, setToSend] = useState({
        name: '',
        subject: '',
        message: '',
        email: '',
    });

    // const handleChange = (e) => {
    //     // console.log(e.target.value);
    //     setToSend(
    //         { ...toSend, [e.target.name]: e.target.value }
    //     );
    //     console.log(toSend);
    // };

    const handleChange = (event) => {
        setToSend((prevProps) => ({
          ...prevProps,
          [event.target.name]: event.target.value
        }));
        console.log(toSend);
      };

    const sendEmail = (e) => {
        e.preventDefault();
        send(
          'gnani_email',
          'gnani_template',
          toSend,
          'user_aA3lIETJksxdyZiDHoNie'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
      };

    return (
        <div className="right-side-area">
            <div id="contact" className="single-section about-area">
                <div className="container">
                    <div className="d-flex px-3">
                        <div className="section-heading">
                            <h2 className="section-title">Contact</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                                <div className="colorlib-icon">
                                    <i className="icon-email-mail-streamline"></i>
                                </div>
                                <div className="colorlib-text">
                                    <p><a href="#">garumu3@uic.edu</a></p>
                                </div>
                            </div>

                            <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                                <div className="colorlib-icon">
                                    <i className="icon-home-house-streamline"></i>
                                </div>
                                <div className="colorlib-text">
                                    <p>915 South Loomis, Apt 2 Upper , Chicago-60607</p>
                                </div>
                            </div>

                            <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                                <div className="colorlib-icon">
                                    <i className="fa-phone"></i>
                                </div>
                                <div className="colorlib-text">
                                    <p><a href="tel://">+1(312)468-3355</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-md-push-1">
                            <div className="row">
                                <div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
                                    <form action="">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Name" id="name" name="name" onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Email" id="email" name="email" onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Subject" id="subject" name="subject" onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <textarea name="" id="message" cols="30" rows="7" className="form-control" id="message" name="message" placeholder="Message" onChange={handleChange}></textarea>
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" className="btn btn-primary btn-send-message" value="Send Message" onClick={sendEmail} />
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;