import React from 'react'
import styled from 'styled-components';
import ImageSection from '../Components/ImageSection';
import Title from '../Components/Title';
import {MainLayout} from '../styles/Layouts';

function AboutPage() {
    return (
        <MainLayout>
            <AboutStyled >
                <Title title={'À propos de moi'} span={'À propos de moi'} />
                <ImageSection />
            </AboutStyled >
        </MainLayout>
    )
}

const AboutStyled = styled.section`
    
`;

export default AboutPage
