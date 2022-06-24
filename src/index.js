import * as React from "react";
import ReactDOM from "react-dom/client";
import './style.css';
import './header.scss';
import './skill-style.css';

import Header from './header.js'
import Skills from './skills.js'


const Container = () => {
    const skillList = [
        {
            id: 1,
            skill: 'Java',
            skillInfo: `Java was the first language that I ever used beyond surface level
            programming. Using it taught me many important programming concepts that I use 
            everyday. This is the language that I am best aquainted with.`
        },
        {
            id: 2,
            skill: 'Javascript',
            skillInfo: `I've recently started using Javascript to create fullstack web applications.
            I'm very new to it, but I have been enjoying learning its libraries. I belive that Javascript 
            is useful in a lot of front-end and back-end applications, making it a vital skill to any
            software developer.`
        },
        {
            id: 3,
            skill: 'React',
            skillInfo: `I started learning react to gain knowledge on front-end development.
            While I greatly prefer back-end, I feel that it's important to learn fullstack development.
            `
        },
    ]
    return (
        <div className="middle">
            <Header></Header>
            {/* <Skills skill = "Java"></Skills> */}
            <br></br>
            <hr></hr>

            <div>
                <h3>I have knowledge of:</h3>

                <h3>
                    {skillList.map((skill) => <Skills key={skill.id} skill={skill.skill}
                        skillInfo={skill.skillInfo} expanded={false} />)}
                </h3>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <React.StrictMode>
        <Container></Container>
    </React.StrictMode>
)