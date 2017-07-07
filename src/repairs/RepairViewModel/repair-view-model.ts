import { Part } from '../part';
import { DateModel, DatePickerOptions } from 'ng2-datepicker';
export class RepairViewModel {
    id: number;
    carId: number;
    categoryName: string;
    name: string;
    parts: Part[];
    date: DateModel;
    details: string;
}
