
describe('формление заказа на huntingpony', function () {
    
    it('Проваливаюсь в категорию поводки и ищу совпадение с названием Heatwave', function () {
        cy.visit('https://huntingpony.com/');

        cy.get('[data-index="0"] > .header__collections-controls > .header__collections-link').click();
		
        //cy.get('[data-product-id="338933151"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').trigger('mouseover');
        // cy.get('[data-product-id="338933151"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
		//cy.wait(5000);
		//cy.get('[data-product-id="338933151"] > .product-preview__content > .product-preview__area-bottom').click({ force: true });
		cy.get('body > div.page_layout.page_layout-clear.page_layout_section_top > main > div.layout.widget-type_system_widget_v4_catalog_2 > div > div > div > form:nth-child(1) > div > div.product-preview__area-bottom > div.product-preview__controls > a').click({ force: true });
	    
		cy.wait(500);
	    cy.get('.add-cart-counter__btn').click();
	    cy.wait(500);
        cy.get('[data-add-cart-counter-plus=""]').click();
        cy.wait(500);
        cy.get('.header__cart').click();
        cy.get('.cart-controls > .button').click();
        cy.wait(500);
        cy.contains('Оформление заказа')

    })
    
})
