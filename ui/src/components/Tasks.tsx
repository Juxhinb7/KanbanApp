import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSquarePlus} from "@fortawesome/free-solid-svg-icons";
import Textfield from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { useState } from 'react';

const Tasks = () => {
    const [open, setOpen] = useState(false);

    const handleClickToOpen = () => {
        setOpen(true);
    }
    const handleClickToClose = () => {
        setOpen(false);
    }

    return (
    <div id="tasks">
        
        <div className="flex-item td">
            <div className="list-title tdtitle">Backlog<button style={{marginLeft:"0.1vh", border:"none", background:"none"}} type="button" onClick={handleClickToOpen}>
                <FontAwesomeIcon icon={faSquarePlus}/></button>
            </div>
            <div className="bucket"></div>
        </div>
        <div className="flex-item ip">
            <div className="list-title iptitle">Work In Progress</div>
            <div className="bucket"></div>
        </div>
        <div className="flex-item d">
            <div className="list-title dtitle">Done</div>
            <div className="bucket"></div>
        </div>

        <Dialog open={open}>
            <DialogTitle>{"Task"}</DialogTitle>
            <DialogContent>
                <Textfield label="Title"></Textfield>
            </DialogContent>
            <DialogContent>
                <Textfield label="Description" multiline></Textfield>
            </DialogContent>
            <DialogContent>

            </DialogContent>


        </Dialog>
    </div>
    )
    
}

export default Tasks;