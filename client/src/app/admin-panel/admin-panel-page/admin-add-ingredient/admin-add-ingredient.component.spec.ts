import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddIngredientComponent } from './admin-add-ingredient.component';

describe('AdminAddIngredientComponent', () => {
    let component: AdminAddIngredientComponent;
    let fixture: ComponentFixture<AdminAddIngredientComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AdminAddIngredientComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AdminAddIngredientComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
