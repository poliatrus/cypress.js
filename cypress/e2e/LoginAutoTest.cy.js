describe('Тестирование Авторизации', function () {
    
    it('Верный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
		cy.get('#loginButton').click();

		cy.contains('Авторизация прошла успешно').should('be.visible');
		cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');

		cy.get('#forgotEmailButton').click();
		cy.get('#mailForgot').type('germannnn@dolnikoff.ru');
		cy.get('#restoreEmailButton').click();

		cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
		cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

	it('Верный логин, НЕверный пароль', function () {
        cy.visit('https://login.qa.studio/');

		cy.get('#mail').type('german@dolnikov.ru');
		cy.get('#pass').type('iLoveqastudio2');
		cy.get('#loginButton').click();

		cy.contains('Такого логина или пароля нет').should('be.visible');
		cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

	it('НЕверный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/');

		cy.get('#mail').type('german@dolnikoff.ru');
		cy.get('#pass').type('iLoveqastudio1');
		cy.get('#loginButton').click();

		cy.contains('Такого логина или пароля нет').should('be.visible');
		cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

	it('Валидация @, верный пароль', function () {
        cy.visit('https://login.qa.studio/');

		cy.get('#mail').type('german2dolnikoff.ru');
		cy.get('#pass').type('iLoveqastudio1');
		cy.get('#loginButton').click();

		cy.contains('Нужно исправить проблему валидации').should('be.visible');
		cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Приведение к строчным в логине, верный пароль', function () {
        cy.visit('https://login.qa.studio/');

		cy.get('#mail').type('GerMan@Dolnikov.ru');
		cy.get('#pass').type('iLoveqastudio1');
		cy.get('#loginButton').click();

		cy.contains('Такого логина или пароля нет').should('be.visible');
		cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

})

