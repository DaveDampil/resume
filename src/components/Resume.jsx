import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    font-family: Arial, sans-serif;
    background-color: #ffffff8b;
    margin: 0;
    padding: 20px;
`;

const Header = styled.div`
    background-color: #389f00;
    color: #fff;
    padding: 20px;
    text-align: left;
`;

const ProfilePic = styled.img`
    max-width: 130px;
    align-self: center;
    float: right;
`;

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const LeftSide = styled.table`
    width: 50%;
    border-collapse: collapse;
    margin-bottom: 20px;
    float: left;
`;

const RightSide = styled.table`
    width: 50%;
    border-collapse: collapse;
    margin-bottom: 20px;
    float: right;
    clear: both;
`;

const Th = styled.th`
    border: 1px solid #007b19;
    padding: 15px;
    text-align: left;
    background-color: #4CAF50;
    color: #fff;
`;

const Td = styled.td`
    border: 1px solid #007b19;
    padding: 15px;
    text-align: left;
`;

const Small = styled.small`
    font-size: 0.8em;
`;

const Resume = () => {
    return (
        <Container>
            <Header>
                <ProfilePic src="https://i.imgur.com/Vx31qh8.jpeg" alt="Profile Image" />
                <h1>Dave Stanley Y. Dampil</h1>
                <p>Game Developer</p>
                <p>Software Engineer</p>
            </Header>
            <FlexContainer>
                <LeftSide>
                    {/* Contact Info */}
                    <tr>
                        <Th>CONTACT INFORMATION:</Th>
                    </tr>
                    <tr>
                        <Td>Name: Dave Stanley Y. Dampil</Td>
                    </tr>
                    <tr>
                        <Td>Email: dsydampil.student@ua.edu.ph</Td>
                    </tr>
                    <tr>
                        <Td>Phone: 09053464066</Td>
                    </tr>
                    {/* Interests */}
                    <tr>
                        <Th>INTERESTS:</Th>
                    </tr>
                    <tr>
                        <Td>
                            <ul>
                                <li>Playing Video Games</li>
                                <li>Watching youtube</li>
                                <li>Game Development</li>
                                <li>Listening to music</li>
                                <li>Eating</li>
                                <li>Worrying about the future</li>
                            </ul>
                        </Td>
                    </tr>
                    {/* Achievements */}
                    <tr>
                        <Th>ACHIEVEMENTS:</Th>
                    </tr>
                    <tr>
                        <Td>
                            <ul>
                                <li>Made a game using only python (without engine) (2011)</li>
                                <li>Made a game using unity and c# (ongoing)</li>
                                <li>Made my very own game engine (2012)</li>
                                <li>Made my very own operating system, TempleOS (2005)</li>
                                <li>Created a website using HTML tables (2024)</li>
                            </ul>
                        </Td>
                    </tr>
                </LeftSide>
                <RightSide>
                    {/* Main Objective */}
                    <tr>
                        <Th>MAIN OBJECTIVE:</Th>
                    </tr>
                    <tr>
                        <Td>
                            To establish a long-term career in helping the 
                            institution in achieving its goals and objectives through software for the 
                            institution’s development and to seek for an institution that 
                            provides opportunities for continuous learning and career growth.
                        </Td>
                    </tr>
                    {/* Work Experience */}
                    <tr>
                        <Th>WORK EXPERIENCE:</Th>
                    </tr>
                    <tr>
                        <Td>
                            <strong>Game Developer</strong><br />
                            <Small>Capcom (2019-present)</Small><br />
                            <ul>
                                <li>Made another Megaman game (Megaman 11).</li>
                                <li>Designed, implemented, and engineered the logic for the MegaBuster.</li>
                                <li>Designed Jill Valentine and Ashley Graham for the Resident Evil remakes.</li>
                            </ul>
                            <strong>Software Engineer</strong><br />
                            <Small>Accenture (2015-2017)</Small><br />
                            <ul>
                                <li>Company is recognized as "global business leader" because of 
                                    your truly.
                                </li>
                                <li>Maintenance of website.</li>
                            </ul>
                        </Td>
                    </tr>
                    {/* Academic Background */}
                    <tr>
                        <Th>ACADEMIC BACKGROUND:</Th>
                    </tr>
                    <tr>
                        <Td>
                            <ul>
                                <li><strong>Christ Our Rock</strong><br /><Small>Pre-school(2005-2007)</Small></li><br />
                                <li><strong>De La Salle Montessori School of Malolos</strong><br /><Small>Elementary(2007-2013)</Small></li><br />
                                <li><strong>Bulacan Ecumenical School</strong><br /><Small>Junior & Senior Highschool(2013-2018)</Small></li><br />
                                <li><strong>Bulacan State University</strong><br /><Small>College - Environmental Science (2018-2022)</Small></li><br />
                                <li><strong>University of the Assumption</strong><br /><Small>College - Computer Engineering (2023-present)</Small></li><br />
                            </ul>
                        </Td>
                    </tr>
                </RightSide>
            </FlexContainer>
        </Container>
    );
};

export default Resume;
