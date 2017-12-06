import { Component, Input } from '@angular/core';

@Component({
    selector: 'my-test',
    templateUrl: './test.component.html'
})

export class Test {
    @Input() nameTest = 'pakarang';

    sendUser(value: number) {
        alert("Somm  " + value);
    }
}