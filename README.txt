get data (only auth) OK
get users OK
Разгаринивать доступ к данным OK

<!-- Users -->
Авторизация OK
    + facebook (APP ID: 294798217536135 APP SECRET 72cdf3ee843c28afe569bf659b80436e) OAuth redirect: my domain (myapp.ru) or localhost (OK)
    + get date from fb (OK)
Регистрация OK
Выход OK

<!-- Data -->
create data
 - and get own data https://firebase.google.com/docs/database/security/user-security
overwirte whole json node +
set date (normal + only auth) +
update data (normal + only a) +
delete data (normal + only a) +

validation - отказывает в доступе хз почему, Валидируем на клиенте
    - Данные не должны быть повторяющимеся
    - не пустыми