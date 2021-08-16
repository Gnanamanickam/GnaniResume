import React from 'react';

const Contact = () => {

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
                                    <i className="fa-mobile-phone"></i>
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
                                            <input type="text" className="form-control" placeholder="Name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Email" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Subject" />
                                        </div>
                                        <div className="form-group">
                                            <textarea name="" id="message" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" className="btn btn-primary btn-send-message" value="Send Message" />
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