import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsSearchComponent } from './ingredients-search.component';

describe('IngredientsSearchComponent', () => {
    let component: IngredientsSearchComponent;
    let fixture: ComponentFixture<IngredientsSearchComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IngredientsSearchComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(IngredientsSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
