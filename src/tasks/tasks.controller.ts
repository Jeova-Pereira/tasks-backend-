import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTasksDto } from './dto/create-tasks-dto';
import { UpdateTasksDto } from './dto/update-tasks-dto';

@Controller('tasks')
export class TasksController {
    constructor(
        private readonly tasksService: TasksService
    ){}

    @Get('/:id')
    async findOnde(@Param('id', ParseIntPipe) id: number){
        return this.tasksService.findOne(id)
    }

    @Get()
    async findAll(){
        return this.tasksService.findAll()
    }

    @Post()
    async createTasks(@Body() body:CreateTasksDto){
        return this.tasksService.createTasks(body)
    }

    @Patch('/:id')
    async updateTasks(@Param('id', ParseIntPipe) id: number, @Body() body:UpdateTasksDto){
        return this.tasksService.updateTasks(id, body)
    }

    @Delete('/:id')
    async deleteTasks(@Param('id', ParseIntPipe) id:number){
        return this.tasksService.deleteTasks(id)
    }
}
