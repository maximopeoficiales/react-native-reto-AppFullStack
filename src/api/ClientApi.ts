import { Client } from "./entitys/client.entity";
import config from '../config';
import axios from "axios";
import { UpdateClientDto } from "./dto/update-client.dto";
class ClientApi {
    urlClients: string;
    constructor() {
        this.urlClients = `${config.API_URL}/api/clients`;
    }

    async create(client: Client): Promise<UpdateClientDto> {
        let response = await axios.post(this.urlClients, client);
        return (response.data) as UpdateClientDto;
    }

}

export const clientApi = new ClientApi();