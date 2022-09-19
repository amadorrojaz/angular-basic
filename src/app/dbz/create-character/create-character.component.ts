import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
})
export class CreateCharacterComponent {
  @Input() newCharacter: Character = {
    name: '',
    power: 0,
  };

  constructor(private dbzService: DbzService) {}

  createCharacter() {
    if (this.newCharacter.name.trim().length === 0) {
      return;
    }
    this.dbzService.createCharacter(this.newCharacter);
    this.newCharacter = {
      name: '',
      power: 0,
    };
  }
}
