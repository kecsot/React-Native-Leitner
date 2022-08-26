export default class DeckModel {
    id;
    title;
    description;
    created;
    updated;

    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }
}
