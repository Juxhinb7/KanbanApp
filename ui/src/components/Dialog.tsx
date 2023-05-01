import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import {FormControl, InputLabel, Select, MenuItem, Button, Box} from "@material-ui/core";
import { isPropertySignature } from "typescript";

export const AddEntryDialog = (props: any) => {
    return (
        <div>
        <Dialog open={props.open}>
            
            <DialogTitle>{"Card"}<button style={{marginLeft: "11vh", border: "none", background: "red", color: "white"}} type="button" onClick={props.handleClickToClose} >X</button></DialogTitle>
            <Box component="form" onSubmit={props.storeCard}>
            <DialogContent>
                <TextField required label="Title" value={props.title} onChange={props.handleTitleChange}></TextField>
            </DialogContent>
            <DialogContent>
                <TextField required label="Description" value={props.description} onChange={props.handleDescriptionChange} multiline></TextField>
            </DialogContent>
            <DialogContent>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" required>Priority</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={props.prio}
                        label="Priority"
                        onChange={props.handlePrioChange}
                        required
                    >
                        <MenuItem value={1}>Low</MenuItem>
                        <MenuItem value={2}>Medium</MenuItem>
                        <MenuItem value={3}>High</MenuItem>

                    </Select>
                </FormControl>
            </DialogContent>
            <DialogContent>
                <Button style={{background: "black", color: "white"}} type="submit">Submit</Button>
            </DialogContent>
            </Box>
        </Dialog>
        </div>
    )
}

export const UpdateEntryDialog = (props: any) => {
    return (
        <div>
        <Dialog open={props.edit}>
            
            <DialogTitle>{"Card"}<button style={{marginLeft: "11vh", border: "none", background: "red", color: "white"}} type="button" onClick={props.handleClickToCloseEdit} >X</button></DialogTitle>
            <Box component="form" onSubmit={props.updateCard}>
            <DialogContent>
                <TextField required label="Title" value={props.title} onChange={props.handleTitleChange}></TextField>
            </DialogContent>
            <DialogContent>
                <TextField required label="Description" value={props.description} onChange={props.handleDescriptionChange} multiline></TextField>
            </DialogContent>
            <DialogContent>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" required>Priority</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={props.prio}
                        label="Priority"
                        onChange={props.handlePrioChange}
                        required
                    >
                        <MenuItem value={1}>Low</MenuItem>
                        <MenuItem value={2}>Medium</MenuItem>
                        <MenuItem value={3}>High</MenuItem>

                    </Select>
                </FormControl>
            </DialogContent>
            <DialogContent>
                <Button style={{background: "black", color: "white"}} type="submit">Submit</Button>
            </DialogContent>
            </Box>
        </Dialog>
    </div>
    )
    
}