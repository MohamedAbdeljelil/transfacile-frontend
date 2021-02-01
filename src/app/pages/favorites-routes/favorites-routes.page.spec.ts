import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {FavoritesRoutesPage} from './favorites-routes.page';

describe('FavoritesRoutesPage', () => {
    let component: FavoritesRoutesPage;
    let fixture: ComponentFixture<FavoritesRoutesPage>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [FavoritesRoutesPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(FavoritesRoutesPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
