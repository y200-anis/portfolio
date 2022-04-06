import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'Mes Compétences'} span={'Mes Compétences'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'HTML5'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'CSS3'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'Node JS'}
                            width={'40%'}
                            text={'40%'}
                        />
                        <ProgressBar 
                            title={'JAVA'}
                            width={'60%'}
                            text={'60%'}
                        />
                        <ProgressBar 
                            title={'PYTHON'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'React JS'}
                            width={'40%'}
                            text={'40%'}
                        />
                        <ProgressBar 
                            title={'Scala'}
                            width={'60%'}
                            text={'60%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
