import { Part } from '../part';
import { Category } from '../category';
import { DateModel, DatePickerOptions } from 'ng2-datepicker';
export class AddRepairViewModel {
    id: number;
    carId: number;
    categorys: Category[];
    categoryId: number;
    name: string;
    parts: Part[];
    date: DateModel;
    details: string;
}