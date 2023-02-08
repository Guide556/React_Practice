import React from "react";
import { Formik } from "formik";
import { ValidateFormContact } from "./validate-form/ValidateContact";

const Contact1 = () => {
  return (
    <main id="main">
      <section id="contact" className="contact">
        <div className="container">

          <div className="section-title">
            <h2>Contact Us</h2>
            <p>Contact us the get started</p>
          </div>

          <div className="row">
            <div className="col-lg-5 d-flex align-items-stretch" >
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
                </div>

              </div>
            </div>

            {/* <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div className="form-group col-md-6 mt-3 mt-md-0">
                    <label htmlFor="name">Your Email</label>
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="name">Subject</label>
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="name">Message</label>
                  <textarea className="form-control" name="message" rows="10" required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </form>
            </div> */}

            <div className="col-lg-7 mt-5 mt-lg-0 ">
              <div className="section-title">
                <label style={{ fontSize: 30, fontWeight: 950, color: '#4e4039' }}>Anywhere in your app!</label>
              </div>
              <Formik
                initialValues={{ name:'', email: '', password: '', subject: '', message: '' }}
                // validate={values => {
                //   const errors = {};
                //   if (!values.email) {

                //     errors.email = <div style={{ color: 'red' }}>Required</div>;
                //   } else if (
                //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                //   ) {
                //     errors.email = <div style={{ color: 'red'}}>Invalid email address</div>;
                //   }
                //   return errors;
                // }}

                validationSchema={ValidateFormContact}

                // onSubmit={(values, { setSubmitting }) => {
                //   setTimeout(() => {
                //     alert(JSON.stringify(values, null, 2));
                //     setSubmitting(false);
                //   }, 400);
                // }}

                onSubmit={(values, { setSubmitting }) => { }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <form onSubmit={handleSubmit} className="php-email-form">
                    <div className="row">
                      <div>

                      <div>
                      <label style={{ fontWeight: 500 }}>Name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          className="form-control"
                        />
                        {/* {errors.email && touched.email && errors.email} */}
                      </div>

                        <label style={{ fontWeight: 500 }}>Email</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          className="form-control"
                        />
                        {errors.email && touched.email && errors.email}
                      </div>

                      <div className="mt-2">
                        <label style={{ fontWeight: 500 }}>Password</label>
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          className="form-control"
                        />
                        {errors.password && touched.password && errors.password}
                      </div>

                      <div className="mt-2">
                        <label style={{ fontWeight: 500 }}>Subject</label>
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.subject}
                          className="form-control"
                        />
                        {errors.subject && touched.subject && errors.subject}
                      </div>

                      <div className="mt-2">
                        <label style={{ fontWeight: 500 }}>Message</label>
                        <textarea
                          type="text"
                          rows="5"
                          name="message"
                          placeholder="Message"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.message}
                          className="form-control"
                        />
                        {errors.message && touched.message && errors.message}
                      </div>
                    </div>
                    <div className="text-center mt-3">
                      <button type="submit" disabled={isSubmitting} >
                        Submit
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>

          </div>

        </div>
      </section>
    </main>
  )
}

export default Contact1;