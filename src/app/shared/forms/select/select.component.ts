import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectModel } from './models/select.model';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass']
})
export class SelectComponent {
  @Input() id?: string | undefined;
  @Input() label?: string | undefined;
  @Input() placeholder?: string | undefined;
  @Input() required?: boolean | undefined;
  @Input() options: SelectModel[] | null | undefined;
  @Input() isEnabled: boolean = true;
  @Input() unavailableLabel: string = '';

  @Output() changeSelected: EventEmitter<string> = new EventEmitter(true);

  selectedOption: string | undefined;

  constructor() {}

  selectedChangedHandler(selectedOption: string | undefined) {
    this.changeSelected.emit(selectedOption);
  }
}
