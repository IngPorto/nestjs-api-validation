/* eslint-disable prettier/prettier */

import { TaskStatus } from '../task.entity';
import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsOptional,
  IsIn,
} from 'class-validator';

export class CreateTaskDto {
  @IsString({ message: 'El Title debe ser un string' })
  @IsNotEmpty({ message: 'Title es requerido' })
  @MinLength(5, { message: 'Title debe tener al menos 5 caracteres' })
  title: string;
  @IsString()
  description: string;
}

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  title?: string;
  @IsString()
  @IsOptional()
  description?: string;
  @IsString()
  @IsOptional()
  @IsIn([TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE, TaskStatus.PENDING])
  status?: TaskStatus;
}
