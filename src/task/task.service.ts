import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 as uuid } from 'uuid';
import { UpdateTaskDto } from './dto/task.dto';

@Injectable()
export class TaskService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'Wash the dishes',
      description: 'Make the bed',
      status: TaskStatus.OPEN,
    },
  ];
  getTask(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  getAllTasks() {
    return this.tasks;
  }

  createTask(title: string, description: string) {
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.PENDING,
    };
    this.tasks.push(task);
    return task;
  }

  updateTask(id: string, updatedFields: UpdateTaskDto): Task {
    const task = this.getTask(id);
    if (!task) {
      throw new Error('Task not found');
    }
    const updateTask = Object.assign(task, updatedFields);
    this.tasks = this.tasks.map((task) => (task.id === id ? updateTask : task));
    return updateTask;
  }

  deleteTask(id: string): Task {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return this.tasks.find((task) => task.id === id);
  }
}
