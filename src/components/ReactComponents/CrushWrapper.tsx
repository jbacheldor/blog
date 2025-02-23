import React from 'react';
import CrushWindows from './CrushWindow';
import './style.css'
// import { ReactComponent as MinimizeIcon }  from '../../assets/minimize-8.svg';

type Props = {
    theme?: string;
    crushName?: string;
}

function CrushWrapper(props: Props) {
    const {theme, crushName} = props
    const [showWindow, setShowWindow] = React.useState(false)


    const testCrushes = [{crushName: "Crush A"}, {crushName: "Crush B"}, {crushName: "Crush C"}, {crushName: "Crush D"}]

    return (
        <div id="crush-blocks">
            {testCrushes.map((crush)=> {
                return (
                    <CrushWindows crushName={crush.crushName}/>
                )
            })}
        </div>
    );
}
export default CrushWrapper;