import * as React from "react";
import useCollapse from 'react-collapsed';


let expanded = false;
const Skills = (props) => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    return (
        <div className="skillContainer">
            <div className="skillBackground" {...getToggleProps()}>
                <div className="skillName">
                    {props.skill}
                </div>
                {/* Expands the details */}

            </div>
            <div {...getCollapseProps()}>
                <div className="vl"></div>

                <div className="content">

                    {props.skillInfo}
                </div>
            </div>



        </div>
    );
}

export default Skills;