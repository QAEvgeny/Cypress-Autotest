describe('Проверка авторизации', function () {

    it('Верные логин и пароль', function () {
        cy.visit('https://login.qa.studio/'); // Вход на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввводим верный логин в поле ввода
        cy.get('#pass').type('iLoveqastudio1'); // Вводим верный пароль в поле ввода
        cy.get('#loginButton').click(); // Нажимаем на кпопку Войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка необходимого текста
        cy.get('#messageHeader').should("be.visible"); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should("be.visible"); // Есть кнопка крестика и она видна пользователю

    })

        it('Проверка восстановления пароля', function () {
            cy.visit('https://login.qa.studio/'); // Вход на сайт
            cy.get('#forgotEmailButton').click(); // Нажимаем на кнопку Забыли пароль
            cy.get('#mailForgot').type('german@dolnikov.ru'); //Вводим почту в в поле ввода
            cy.get('#restoreEmailButton').click(); // Нажимаем кнопку отправить код
            cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверка необходимого текста
            cy.get('#messageHeader').should("be.visible"); // Текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should("be.visible"); // Есть кнопка крестика и она видна пользователю
        
    })

        it('Проверка верного логина и НЕверного пароля', function () {
            cy.visit('https://login.qa.studio/'); // Вход на сайт
            cy.get('#mail').type('german@dolnikov.ru'); // Ввводим верный логин в поле ввода
            cy.get('#pass').type('iLoveqastudio99'); // Вводим НЕверный пароль в поле ввода
            cy.get('#loginButton').click(); // Нажимаем на кпопку Войти
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка необходимого текста
            cy.get('#messageHeader').should("be.visible"); // Текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should("be.visible"); // Есть кнопка крестика и она видна пользователю

    })

        it('Проверка НЕверного логина и верного пароля', function () {
            cy.visit('https://login.qa.studio/'); // Вход на сайт
            cy.get('#mail').type('german@dolnikov99.ru'); // Ввводим НЕверный логин в поле ввода
            cy.get('#pass').type('iLoveqastudio1'); // Вводим верный пароль в поле ввода
            cy.get('#loginButton').click(); // Нажимаем на кпопку Войти
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка необходимого текста
            cy.get('#messageHeader').should("be.visible"); // Текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should("be.visible"); // Есть кнопка крестика и она видна пользователю

    })

    it('Проверка на негативный кейс валидации', function () {
        cy.visit('https://login.qa.studio/'); // Вход на сайт
        cy.get('#mail').type('germandolnikov.ru'); // Ввводим невалидный логин в поле ввода
        cy.get('#pass').type('iLoveqastudio1'); // Вводим верный пароль в поле ввода
        cy.get('#loginButton').click(); // Нажимаем на кпопку Войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверка необходимого текста
        cy.get('#messageHeader').should("be.visible"); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should("be.visible"); // Есть кнопка крестика и она видна пользователю

    })

    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // Вход на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввводим логин c разным регистром в поле ввода
        cy.get('#pass').type('iLoveqastudio1'); // Вводим верный пароль в поле ввода
        cy.get('#loginButton').click(); // Нажимаем на кпопку Войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка необходимого текста
        cy.get('#messageHeader').should("be.visible"); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should("be.visible"); // Есть кнопка крестика и она видна пользователю

    })

})