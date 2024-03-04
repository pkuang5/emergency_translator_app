import React from 'react';
import languages from '../../content/languages.json';
import { Language, Terms } from '../../content/Language';

const languagesArray = (languages as Language[]);
const renderCards = (languageName: string) => {
    const language = languagesArray.find((language) => language.name === languageName) as Language;
    const terms = language?.terms as Terms[];
    
    return terms?.map((term, index) => (
        <div key={index} className="bg-blue-500 p-10 m-10">
            <div>{term.englishText}</div>
            <div>{term.translatedText}</div>
            {/* <button onClick={() => playAudio(term.audioPath)}>Play Audio</button> */}
        </div>
    ));
}

export default function Lanuage({ params }:
    { params: { languageName: string } }) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="grid grid-cols-2 gap-4">
                {renderCards(params.languageName)}
            </div>
        </main>
    );
};