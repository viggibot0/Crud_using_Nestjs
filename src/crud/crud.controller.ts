import { Controller, Get } from '@nestjs/common';
import { CrudService } from './crud.service';

@Controller('crud')
export class CrudController {
    
    constructor(private data:CrudService){}

    @Get()
    async getData(){
        return this.data.getData();
    }
}
