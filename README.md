### Hexlet tests and linter status:
[![Actions Status](https://github.com/ShiY4/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/ShiY4/frontend-project-46/actions)
[![linter](https://github.com/ShiY4/frontend-project-46/actions/workflows/github-actions-demo.yml/badge.svg)](https://github.com/ShiY4/frontend-project-46/actions/workflows/github-actions-demo.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/2dac132f3526417f5f22/maintainability)](https://codeclimate.com/github/ShiY4/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/2dac132f3526417f5f22/test_coverage)](https://codeclimate.com/github/ShiY4/frontend-project-46/test_coverage)
[![asciicast](https://asciinema.org/a/ct4WlwXSdtmErfTBIc5kjXTeV.svg)](https://asciinema.org/a/ct4WlwXSdtmErfTBIc5kjXTeV)
[![asciicast](https://asciinema.org/a/Y4LgF3KjktgN2v1eeaXQOYiBl.svg)](https://asciinema.org/a/Y4LgF3KjktgN2v1eeaXQOYiBl)
[![asciicast](https://asciinema.org/a/GoBcp2nzWocJCmpHuCXqxmZBj.svg)](https://asciinema.org/a/GoBcp2nzWocJCmpHuCXqxmZBj)
[![asciicast](https://asciinema.org/a/TcMcJ6Qy7A0R3iuieYmtwrkSd.svg)](https://asciinema.org/a/TcMcJ6Qy7A0R3iuieYmtwrkSd)
[![asciicast](https://asciinema.org/a/dWfoUBf39QzudbXZeXv2rczrU.svg)](https://asciinema.org/a/dWfoUBf39QzudbXZeXv2rczrU)

Данный проект является тренировочным и представляет из себя утилиту для сравнения версий файлов.

Установка пакета:
1 - Перейти в корень проекта
2 - Ввести в терминале команду "make install"
3 - Ввести в терминале команду "npm link" или "sudo npm link", если ОС Linux

Использование утилиты:
    Для отображения доступных команд необходимо ввести в терминале команду gendiff -h
        
    Чтобы явно указать форматирование вывода информации о различии файлов - 
    нужно прописать в терминале gendiff --format (путь до файла 1) (путь до файла 2), по дефолту установлен формат 'stylish'.
