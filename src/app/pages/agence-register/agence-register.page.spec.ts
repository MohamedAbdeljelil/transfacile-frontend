import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {AgenceRegisterPage} from './agence-register.page';

describe('AgenceRegisterPage', () => {
    let component: AgenceRegisterPage;
    let fixture: ComponentFixture<AgenceRegisterPage>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AgenceRegisterPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(AgenceRegisterPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
