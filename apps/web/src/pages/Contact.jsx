import { useState, useEffect } from 'react';
import { getAbout } from "../sanity/client";
import { urlFor } from '../sanity/utilities';
import PageLayout from '../components/PageLayout';
import '../styles/contact.css';

export default function Contact() {
  const [about, setAbout] = useState(null); // or [] if expecting an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAbout();
        setAbout(data[0]);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <PageLayout>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {about && (
        <div className="contact-wrapper mt-[2rem] md:mt-[4rem]">
          <p className="contact-description md:w-[50%] text-center mb-4 mx-auto">
            For freelance, commission and other business inquiries (not personal questions) please email me at&nbsp;
            <a href="mailto:Jakegermann@outlook.com">Jakegermann@outlook.com</a>
          </p>
          <div className="contact-hero">
            <div className='contact-hero-contents' style={{ backgroundImage: `url(${urlFor(about.backdropImage).width(1920).url()})`}}>
              <form className="contact-form" name="contact" method="POST">
                <p className="contact-text text-white text-xl">Have a question? Contact me below!</p>
                <div className="form-row">
                  <div className="form-field">
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      placeholder=" "
                      value={formData.firstName}
                      onChange={handleChange}
                      className="form-input"
                      autoComplete="given-name"
                    />
                    <label htmlFor="firstName">First Name</label>
                  </div>

                  <div className="form-field">
                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      placeholder=" "
                      value={formData.lastName}
                      onChange={handleChange}
                      autoComplete="family-name"
                      className="form-input"
                    />
                    <label htmlFor="lastName">Last Name</label>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field full-width">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder=" "
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      required
                      className="form-input"
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field full-width">
                    <textarea
                      id="message"
                      name="message"
                      placeholder=" "
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="form-input textarea-input"
                    />
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <input type="hidden" name="form-name" value="contact" />


                <button type="submit" className="submit-button">Submit</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  )
}