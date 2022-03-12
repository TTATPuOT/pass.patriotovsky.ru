import { useCallback, useEffect, useState } from 'react';

export interface GeneratorSettings {
    length: number
    symbols: boolean
    uppercase: boolean
    excludeSimilar: boolean
}

const chars = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w',
    'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
];
const symbols = [
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '?', ',', '.', '"', '-'
];
const similarChars = [
    'i', 'l', '1', 'o', '0'
];

const useGeneratePassword = (settings: GeneratorSettings) => {
    const [password, setPassword] = useState<string>('');

    const refreshPassword = useCallback(() => {
        let array: string[] = [...chars];

        if (settings.length > 30) settings.length = 30;
        if (settings.symbols) array.push(...symbols);
        if (settings.excludeSimilar) array = array.filter(i => !similarChars.includes(i));
        if (settings.uppercase) {
            const upperCase = [...array].map(i => i.toLocaleUpperCase());
            array.push(...upperCase);
            array.filter((v, i, a) => a.indexOf(v) === i);
        }

        shuffleArray<string>(array);

        let password = '';
        let usedIndexes: number[] = [];
        for (let i = 0; i < settings.length; i++) {
            let index;

            do {
                index = getRandomInt(0, array.length - 1);
            } while (usedIndexes.includes(index))

            usedIndexes.push(index);

            password += array[index];
        }

        setPassword(password);
    }, [settings]);

    useEffect(() => {
        refreshPassword();
    }, [settings, refreshPassword]);

    return { password, refreshPassword };
}

const shuffleArray = <T>(array: T[]): T[] => {
    let currentIndex = array.length;
    let randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

const getRandomInt = (min: number, max: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default useGeneratePassword;
