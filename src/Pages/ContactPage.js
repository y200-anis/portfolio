import React from 'react';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import PrimaryButton from '../Components/PrimaryButton';
import { Phone, Email, LocationOn } from '@mui/icons-material';
import ContactItem from '../Components/ContactItem';

function ContactPage() {
  const phone = <Phone />;
  const email = <Email />;
  const location = <LocationOn />;
  return (
    <MainLayout>
      <Title title={'Contact'} span={'Contact'} />
      <ContactPageStyled>
        <InnerLayout className={'contact-section'}>
          <div className="left-content">
            <div className="contact-title">
              <h4>Entrer en contact</h4>
            </div>
            <form className="form">
              <div className="form-field">
                <label htmlFor="name">Entrer votre nom*</label>
                <input type="text" id="name" />
              </div>
              <div className="form-field">
                <label htmlFor="email">Entrer votre email*</label>
                <input type="email" id="email" />
              </div>
              <div className="form-field">
                <label htmlFor="subject">L'objet</label>
                <input type="text" id="subject" />
              </div>
              <div className="form-field">
                <label htmlFor="text-area">Entrer votre Message*</label>
                <textarea
                  name="textarea"
                  id="textarea"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="form-field f-button">
                <PrimaryButton title={'Envoyer'} />
              </div>
            </form>
          </div>
          <div className="right-content">
            <ContactItem title={'Tél'} icon={phone} cont1={'06 48 09 31 68'} />
            <ContactItem
              title={'Email'}
              icon={email}
              cont1={'aittaouit2001@gmail.com'}
              cont2={'yanis.aittaouit@edu.esiee.fr'}
            />
            <ContactItem
              title={'Addresse'}
              icon={location}
              cont1={'66 Rue du Départ, Enghien-Les-Bains, France'}
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
}

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 3rem;
      }
    }
    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      @media screen and (max-width: 502px) {
        width: 70%;
      }
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      @media screen and (max-width: 502px) {
        width: 100%;
      }
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -19px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
        }
      }
    }
  }
`;

export default ContactPage;
