export interface Language {
    name: string;
    terms: Terms[];
}

export interface Terms {
    englishText: string;
    translatedText: string;
    translatedAudio: string;
}