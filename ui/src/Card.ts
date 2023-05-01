export default class Card extends Object {
    private id: string = "";
    private title: string = "";
    private description: string = "";
    private prio: string = "";
    
    get Id(): string {
        return this.Id;
    }

    get Title(): string {
        return this.title;
    }

    get Description(): string {
        return this.description;
    }

    get Prio(): string {
        return this.prio;
    }

    set Id(id: string) {
        this.id = id;
    }

    set Title(title: string) {
        this.title = title;
    }

    set Description(description: string) {
        this.description = description;
    }

    set Prio(prio: string) {
        this.prio = prio;
    }


 
}

