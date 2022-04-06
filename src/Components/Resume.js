import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Résumé'} span={'résumé'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Stages & expérience professionnelle'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'Avril - Juin 2022'} 
                        title={'Développeur Full Stack'}
                        subTitle={'Zsoft Consulting '}
                        text={'Au cours de mon stage de fin de cursus DUT je serai chargé  de : Identification et spécification d’éventuelles évolutions du produit,en relation avec les équipes Produit. Participation aux cérémonies agiles | Planification | Revues | Rétrospectives des sprints. Respect des bonnes pratiques de développement (Framework, qualité, test, …) | Compétences acquises : Java, SpringBoot, Maven, Hibernate, SQL, Node.js, React.js '} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Formation'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2022 - 2025'} 
                        title={'Ingénieur Informatique et applications en apprentissage'}
                        subTitle={'ESIEE Paris - Université Gustave Eiffel'}
                        // text={'Acquisition de compétences variées en informatique (réseau, algorithmie…) | mathématiques et sciences sociales et humaines.'} 
                    />
                    <ResumeItem 
                        year={'2020 - 2022'} 
                        title={'DUT Informatique'}
                        subTitle={'IUT Villetaneuse - Université Sorbonne Paris Nord Villetaneuse'}
                        // text={'Acquisition des bases solides bases en informatique et dans de nombreux autres domaines tels que la gestion de projet, le droit des TIC, l’économie, ainsi que la communication ou encore l’Anglais.'}
                    />
                    <ResumeItem 
                        year={'2019 - 2020'} 
                        title={'Licence Mathématiques et Informatique'}
                        subTitle={'Université des Sciences et de la Technologie Houari Boumediene'}
                    />
                    <ResumeItem 
                        year={'2017 - 2019'} 
                        title={'Baccalauréat Technologique Spécialité Mathématiques'}
                        subTitle={'Lycée Mustapha Ben Boulaid'}
                        // text={'L\'obtention d\'un Bac Technologique Spécialité Mathématiques mention trés bien.'} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
