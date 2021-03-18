// "use strict";



//git config --global user.name 'Zhenick' - задаю глобальное(на всем компьютере) имя для пользователя

//git config --global user.email jchernikj@gmail.com - второй обязательный конфиг - имейл


//У Git-a есть три состояния файлов
//1. Когда файлы просто созданы 
//git status


//2. Когда Git следит за определенными файламикогда такое проиходит, они попадают в так называемый индекс
//git add -A
//где -A - я говорю что все файлы которые есть в репозитории недобавленые в индекс они туда добавятся
//Можно напрямую написать какой файл я хочу добавить, например git add style.css
// *css - выберу все файлы которые имеют окончание .css


//3. Git создал контрольную точку, в которую я когда-то смогу вернуться, посомтреть какие были изменения и как работал проект на этой точке, иначе говоря - COMMIT
//git commit -a -m'First commit'
//где -a - означает что добавляются все файлы
//где -m - описание коммита который я сделаю(в кавычках название)


// git remote add origin https://github.com/zhernick/newlife.git - добавляю удаленный репозиторий, origin - название репозитория + адрес к этому репозиторию, после чего локальный репозиторий становится связанным с удаленным репозиторием

//1. вариант
//git push origin master - собственно пушу на удаленный репозиторий

//2. вариант
//git push -u origin master  //-u - говорит что теперь все пуши будут пушиться именно сюда, в этот репозиторий



//cd в терминале - change directory - прописываю путь к папке, если надо
//cd.. - выхожу с папки
//cd work - вхожу в папку work
//cd в терминале - change directory - прописываю путь к папке, если надо
//cd .. - выйти полностью с папок
//cd work - вход в папку work

//ЕСЛИ В ТЕРМИНАЛЕ, В ПУТИ ЕСТЬ ПРОБЕЛ - НЕ ЗАРАБОТАЕТ, ПРОБЕЛОВ НЕ ДОЛЖНО БЫТЬ

//ЕЩЕ ВАЖНО ПОМНИТЬ ЕСЛИ Я КЛОНИРУЮ КАКОЙ-ТО РЕПОЗИТОРИЙ К СЕБЕ НА КОМП, ТО ОН БУДЕТ УЖЕ СВЯЗАН УДАЛЕННО, Т.Е. МОЖНО ПРОСТО НАПИСАТЬ
//GIT PUSH И ВСЕ СРАБОТАЕТ ЧЁТКО

//ЕБАТЬ Я ЧТО-ТО ПОМЕНЯЛ

//ИТАК, я понял как это работает, например, я хочу скопировать удаленный репозиторий к себе на комп, для этого, я захожу на компе в папку, на уровень выше, например я хочу чтобы мой репозиторий лежал в d/myWeb/myLessons/название_папки куда хочу клонировать удаленный репозиторий, для этого, я перехожу на уровень выше, соответственно это d/myWeb/myLessons открываю эту папку в вс коде, прописываю git clone + путь который указан в удаленном репозитории (нажать code в github-e) и скопировать путь, далее через пробел прописать ту папку в которую хочу скопировать репозиторий, должно получиться https://github.com/zhernick/newlife.git название_папки
//ВУАЛЯ, ВСЁ ДОЛЖНО РАБОТАТЬ

//бля, в принципе я все понял, но мне как-то слегка проблемно, все это проделывать но, я описал как я всему научился, главное что оно работает, а остальное не важно, так что сейчас я закругляюсь выкладываю последний коммит и еду учить дальше
