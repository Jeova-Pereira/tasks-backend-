import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTasksDto } from './dto/create-tasks-dto';
import { UpdateTasksDto } from './dto/update-tasks-dto';
import { Tasks } from 'generated/prisma/client';

@Injectable()
export class TasksService {
    constructor(
        private prisma:PrismaService
    ){}

    async findOne(id:number): Promise<Tasks | null>{
        return this.prisma.tasks.findUnique({
            where: {id}
        })
    }

    async findAll(): Promise<Tasks[] | null>{
        return this.prisma.tasks.findMany({
            where: {
                isActive:true
            }
        })
    }

    async createTasks(data: CreateTasksDto): Promise<Tasks>{
        return this.prisma.tasks.create({
            data:{
                ...data
            }
        })
    }

    async updateTasks(id: number, data: UpdateTasksDto): Promise<Tasks>{
        return this.prisma.tasks.update({
            where: {id},
            data:{
                ...data
            }
        })
    }

    async deleteTasks(id: number){
        return this.prisma.tasks.update({
            where: {id},
            data: {
                isActive: false,
            }
        })
    }
}
