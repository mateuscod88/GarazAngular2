import { Part } from './part';
export class Repair {
    id: number;
    carId: number;
    categoryId: number;
    name: string;
    parts: Part[];
    date: string;

}
