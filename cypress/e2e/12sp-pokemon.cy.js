describe('Покупка аватара для тренера', function () {

    it('Тест на покупку нового аватара для тренера', function () { 

        cy.visit('https://pokemonbattle.ru/'); // Вход на сайт  
        cy.get('input[type="email"]').type('USER_LOGIN'); // Вводим логин  
        cy.get('input[type="password"]').type('USER_PASSWORD'); // Вводим пароль  
        cy.get('button[type="submit"]').click(); // Нажимаем на кнопку Подтвердить
        cy.wait(2000);  // Ожидание
        cy.get('.header__container > .header__id').click({ force: true }); // Нажимаем на аватар тренера в шапке
        cy.get('[href="/shop"]').click();  // Нажимаем на кнопку Смена аватара
        cy.get('.available > button').first().click({ force: true }); // Нажимаем купить у первого доступного аватара
        cy.get('.credit').type('4620869113632996'); // Вводим номер карты в поле ввода
        cy.get('.k_input_ccv').type('125'); // Вводим CVV в поле ввода
        cy.get('.k_input_date').type('1230'); // Вводим срок действия карты в поле ввода
        cy.get('.k_input_name').type('EVGENY KOMAROV'); // Вводим имя владельца карты
        cy.get('.pay-btn').click(); // Нажимаем на кнопку оплатить
        cy.get('#cardnumber').type('56456'); // Вводим код подтверждения из СМС
        cy.get('.payment__submit-button').click(); // Нажимаем на кнопку отправить
        cy.contains('Покупка прошла успешно').should('be.visible'); //Проверка необходимого текста и его видимость пользователю
    });  
});