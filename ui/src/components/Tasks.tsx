import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSquarePlus, faArrowUp, faPencil, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import { useState, ChangeEvent} from 'react';
import Card from "../Card";
import uuid from 'react-uuid';
import { AddEntryDialog, UpdateEntryDialog } from './Dialog';
import TSXCard from "./TSXCard";

const Tasks = () => {

    const PRIORITIES: any = {"1": "Low", "2": "Medium", "3": "High"};
    const COLORS: any = {"1": "#1acaed", "2": "#f7b80a", "3": "red"}

    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [prio, setPrio] = useState("");
    const [cards, setCards] = useState([new Card()]);
    const [edit, setEdit] = useState(false);
    const [editWIP, setEditWIP] = useState(false);
    const [id, setId] = useState("");
    const [hovered, setHovered] = useState(false);
    const [wipCards, setWIPCards] = useState([new Card()]);
    const [dropped, setDropped] = useState(false);

    const handleClickToOpen = () => {
        setOpen(true);
    };
    const handleClickToClose = () => {
        setOpen(false);
    };
    const handleClickToCloseEdit = () => {
        setEdit(false);
    }
    const handleWIPClickToCloseEdit = () => {
        setEditWIP(false);
    }
    const handleTitleChange = (event: ChangeEvent<{value: unknown}>) =>
    {
        setTitle(event.target.value as string);
    }
    const handleDescriptionChange = (event: ChangeEvent<{value: unknown}>) => {
        setDescription(event.target.value as string);
    }
    const handlePrioChange = (event: ChangeEvent<{value: unknown}>) =>
    {
        setPrio(event.target.value as string);
    }
    
    let localCards = JSON.parse(localStorage.getItem("cards") || "[]");
    const localWIPCards = JSON.parse(localStorage.getItem("wipCards") || "[]");

    const storeCard = (e: any) => {
        e.preventDefault();
        let card: Card = new Card();
        card.Id = uuid();
        card.Title = title;
        card.Description = description;
        card.Prio = prio;
        setCards(prevCards => {
            if (localCards) {
                const newCards = [...localCards, card]
                localStorage.setItem("cards", JSON.stringify(newCards));
                return newCards;
            } else {
                const newCards = [...prevCards, card];
                localStorage.setItem("cards", JSON.stringify(newCards));
                return newCards;
            }
            
            
        });
        console.log(cards);
    }

    

    const editItem = (id: string, title: string, description: string, prio: string, process: string) => {
        if (process === "backlog") {
            setEdit(true);
            
        }
        else if (process === "wip") {
            setEditWIP(true);
        }
        setId(id);
        setTitle(title);
        setDescription(description);
        setPrio(prio);
    }

    const updateCard = (e: any) => {
        e.preventDefault();
        const filtered = localCards.filter((item: any) => item.id === id);
        const newData = {
            "id": uuid(),
            "title": title,
            "description": description,
            "prio": prio
        }
        localCards.splice(localCards.indexOf(filtered[0]), 1, newData);
        localStorage.setItem("cards", JSON.stringify(localCards));
        setEdit(false)
        
    }

    const updateWIPCard = (event: any) => {
        const filtered = localWIPCards.filter((item: any) => item.id === id);
        const newData = {
            "id": uuid(),
            "title": title,
            "description": description,
            "prio": prio
        }
        localWIPCards.splice(localWIPCards.indexOf(filtered[0]), 1, newData);
        localStorage.setItem("wipCards", JSON.stringify(localWIPCards));
        event.preventDefault();
        setEditWIP(false);
    }

    const removeItem = (id: any, process: string) => {
        if (process === "backlog") {
            const filtered = localCards.filter((item: any) => item.id !== id)
            setCards(filtered);
            localStorage.setItem("cards", JSON.stringify(filtered));
        }
        else if (process === "wip") {
            const filtered = localWIPCards.filter((item: any) => item.id !== id)
            setWIPCards(filtered);
            localStorage.setItem("wipCards", JSON.stringify(filtered));
        }
        
    }

    const allowDrop = (event: any) => {
        event.preventDefault();
        setHovered(true);
    }
    const notHover = (event: any) => {
        event.preventDefault();
        setHovered(false);
    
    }
    const handleDragStart = (event: any) => {
        event.dataTransfer.setData("card", event.currentTarget.id);
    }
    const handleDragOver = (event: any) => {
        event.preventDefault();
    }
    const handleDrop = (event: any) => {
        event.preventDefault();
        setDropped(true);
        setHovered(false);
        let data = event.dataTransfer.getData("card");
        let element = document.getElementById(data);
        const ID: string = String(element?.childNodes[0].childNodes[0].textContent);
        const TITLE: string = String(element?.childNodes[0].childNodes[1].textContent);
        const PRIORITY_VAL = String(element?.childNodes[0].childNodes[2].textContent);
        const filtered = localCards.filter((card: any) => card.id === ID);
        const DESCRIPTION: string = String(filtered[0].description);
        const PRIORITY_KEY: string = String((Object.keys(PRIORITIES).find(key => PRIORITIES[key] === PRIORITY_VAL)))
        console.log(ID);

        let card = new Card();
        card.Id = ID;
        card.Title = TITLE;
        card.Description = DESCRIPTION;
        card.Prio = PRIORITY_KEY;
        setWIPCards(prevWIPCards => {
            if (localWIPCards) {
                const newCards = [...localWIPCards, card];
                localStorage.setItem("wipCards", JSON.stringify(newCards));
                return newCards;
            } else {
                const newCards = [...prevWIPCards, card];
                localStorage.setItem("wipCards", JSON.stringify(newCards));
                return newCards
            }

        });
        const filteredBacklog = localCards.filter((card: any) => card.id !== ID)
        setCards(filteredBacklog);
        localStorage.setItem("cards", JSON.stringify(filteredBacklog));
    }

    
    return (
    <div id="tasks">
        
        <div className="flex-item td">
            <div className="list-title">Backlog<button style={{marginLeft:"0.1vh", border:"none", background:"none"}} type="button" onClick={handleClickToOpen}>
                <FontAwesomeIcon icon={faSquarePlus}/></button>
            </div>
            <div className="bucket" id="backlog">
                {localCards.map((card: any) => (
                    <div>
                        <TSXCard 
                            handleDragStart={handleDragStart}
                            onDragOver={handleDragOver}
                            id={card.id}
                            title={card.title}
                            description={card.description}
                            prio={card.prio}
                            COLORS={COLORS}
                            PRIORITIES={PRIORITIES}
                            process="backlog"
                            editItem={editItem}
                            removeItem={removeItem}
                        />
                    </div>
                    
                    
                        
                ))}
            </div>
        </div>
        <div className="flex-item ip">
            <div className="list-title">Work In Progress</div>
            <div className="bucket" id="wip" onDragOver={allowDrop} onDragLeave={notHover} onDrop={handleDrop}>
                
                {localWIPCards.map((card: any) => (
                    <div>
                        <TSXCard 
                            handleDragStart={handleDragStart}
                            onDragOver={handleDragOver}
                            id={card.id}
                            title={card.title}
                            description={card.description}
                            prio={card.prio}
                            COLORS={COLORS}
                            PRIORITIES={PRIORITIES}
                            process="wip"
                            editItem={editItem}
                            removeItem={removeItem}
                        />
                    </div>
                ))}
                {hovered && <div id="hoverArea"></div>}
            </div>
        </div>
        <div className="flex-item d">
            <div className="list-title">Done</div>
            <div className="bucket" id="done"></div>
        </div>
        <AddEntryDialog 
            open={open}
            handleClickToClose={handleClickToClose}
            storeCard={storeCard}
            title={title}
            handleTitleChange={handleTitleChange}
            description={description}
            handleDescriptionChange={handleDescriptionChange}
            prio={prio}
            handlePrioChange={handlePrioChange}
        />
        <UpdateEntryDialog 
            edit={edit}
            handleClickToCloseEdit={handleClickToCloseEdit}
            updateCard={updateCard}
            title={title}
            handleTitleChange={handleTitleChange}
            description={description}
            handleDescriptionChange={handleDescriptionChange}
            prio={prio}
            handlePrioChange={handlePrioChange}/>
        <UpdateEntryDialog 
            edit={editWIP}
            handleClickToCloseEdit={handleWIPClickToCloseEdit}
            updateCard={updateWIPCard}
            title={title}
            handleTitleChange={handleTitleChange}
            description={description}
            handleDescriptionChange={handleDescriptionChange}
            prio={prio}
            handlePrioChange={handlePrioChange}
        />
    </div>
    )
    
}

export default Tasks;