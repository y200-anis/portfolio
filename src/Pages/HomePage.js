import React from 'react'
import styled from 'styled-components';
import { GitHub, LinkedIn } from '@mui/icons-material';
import Particle from '../Components/Particle';

function HomePage() {
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Bonjour, C'est <span>Yanis Ait Taouit</span>
        </h1>
        <p>
          Je valide actuellement mon DUT Informatique à l'IUT de Villetaneuse,
          et afin de préparer au mieux ma future formation, j'ai l'honneur de
          vous informer que je suis à la recherche d'une entreprise qui pourrait
          m’accueillir en tant qu’apprentie ingénieur informatique et
          applications pour une durée de 36 mois dans le cadre de ma formation à
          l'ESIEE Paris.
        </p>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/yanis-ait-taouit-511b661ba/"
            className="icon i-facebook"
          >
            <LinkedIn />
          </a>
          <a href="https://github.com/y200-anis" className="icon i-github">
            <GitHub />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
