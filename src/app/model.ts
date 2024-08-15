export class Model {
    user;
    list;
    constructor() {
        this.user = "Urfan"
        this.list = [
            new Lists("Yemək", false),
            new Lists("İdman", false),
            new Lists("Dərs", false),
            new Lists("Film", false)
        ]
    }
}

export class Lists {
    description;
    action;
    constructor(description:string, action:boolean) {
        this.description = description
        this.action = action
    }
}