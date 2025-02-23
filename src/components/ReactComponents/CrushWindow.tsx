import React from 'react';
import './style.css'
// import { ReactComponent as MinimizeIcon }  from '../../assets/minimize-8.svg';

type Props = {
    theme?: string;
    crushName?: string;
}

function CrushWindows(props: Props) {
    const {theme, crushName} = props
    const [showWindow, setShowWindow] = React.useState(false)

    const onSelect = () => {
        console.log('ooo')
    }

    const testCrushes = [{crushName: "Crush A"}, {crushName: "Crush B"}, {crushName: "Crush C"}, {crushName: "Crush D"}]


    return (
        <div id="crush-blocks">
            {testCrushes.map((crush)=> {
                return (
                    <div className="main-crush-window">
                    {/* <MinimizeIcon/> */}
                    <span className="main-crush-header">
                        <span className="crush-name">{crush.crushName ? crush.crushName : "Billy Bob"}</span>
                        {/* <MinimizeIcon/> */}
                        <span className="buttons">
                            <button><span>_</span></button>
                            <button><span>|_|</span></button>
                            <button><span>x</span></button>
                        </span>
                    </span>
                    <hr className="crush-divider"/>
                    <div className="crush-picture"></div>
                    <hr className="crush-divider"/>
                    <div>
                        <button>
                            approve
                        </button>
                        <button>
                            veto
                        </button>
                        <button onClick={onSelect}>
                            show updates
                        </button>
                    </div>
                    </div>
   
                )
            })}
        </div>
    );
}
export default CrushWindows