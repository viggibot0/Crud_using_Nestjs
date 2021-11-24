import { Injectable } from '@nestjs/common';
import {DATA} from './data.mock';


@Injectable()
export class CrudService {
    
    public data = DATA;
    
    public async getData(){
        return this.data
    }
} 
