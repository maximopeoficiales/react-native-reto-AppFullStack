import { Client } from "../entitys/client.entity";

export class CreateClientDto implements Client {
    lastname: string = "";;
    dateBirthday: string = "";;
    name: string = "";

}