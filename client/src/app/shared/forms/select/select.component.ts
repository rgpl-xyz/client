import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { SelectModel } from './models/select.model';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent {
  @Input() id?: string | undefined;
  @Input() label?: string | undefined;
  @Input() placeholder?: string | undefined;
  @Input() required?: boolean | undefined;
  @Input() options: SelectModel[] | null | undefined;
  @Input() isEnabled: boolean = true;
  @Input() unavailableLabel: string = '';

  @Output() changeSelected: EventEmitter<SelectModel> = new EventEmitter(true);

  selectedOption: SelectModel | undefined;

  constructor() {}

  selectedChangedHandler(selectedOption: SelectModel | undefined) {
    this.changeSelected.emit(selectedOption);
  }

  compareFn(
    optionOne: SelectModel | undefined,
    optionTwo: SelectModel | undefined
  ): boolean {
    return optionOne?.key === optionTwo?.key;
  }

  trackByFn(_index: number, option: SelectModel) {
    return option.key;
  }
}
