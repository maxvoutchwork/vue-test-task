import {Entity} from "@/interfaces/entity";

export class Admin implements Entity {
    id: number;
    email: string;

    constructor(id = 0, email = '') {
        this.id = id;
        this.email = email
    }
}