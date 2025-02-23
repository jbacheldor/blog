import './style.css'
import { ReactComponent as MinimizeIcon }  from '../../assets/minimize-8.svg';

type Props = {
    theme?: string;
    crushName?: string;
}

function CrushWindow(props: Props) {
    const {theme, crushName} = props

    return (
        
        <div class="main-crush-window">
            {/* <MinimizeIcon/> */}
            <span class="main-crush-header">
                <span class="crush-name">{crushName ? crushName : "Billy Bob"}</span>
                {/* <MinimizeIcon/> */}
                <span class="buttons">
                    <button><span>_</span></button>
                    <button><span>|_|</span></button>
                    <button><span>x</span></button>
                </span>
            </span>
            <hr class="crush-divider"/>
            <div class="crush-picture"></div>
            <hr class="crush-divider"/>
            <div>
                <button>
                    approve
                </button>
                <button>
                    veto
                </button>
                <button>
                    show updates
                </button>
            </div>
        </div>
    );
}
export default CrushWindow