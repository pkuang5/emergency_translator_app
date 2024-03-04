import Link from "next/link";
import languages from './content/languages.json';
import { Language, Terms } from './content/Language';

const languagesArray = (languages as Language[]);

const renderButtons = () => {
  const languageNames = languagesArray.map((language) => language.name);
  return languageNames.map((name: string, index: number) => (
    <Link key={index} href={`/language/${name}`} className="btn bg-blue-500 text-white rounded-md" style={{ padding: '10px' }}>
      {name}
    </Link>
  ));
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold mb-8">Emergency Translator</h1>
      
      <div className="flex flex-row items-center space-x-4">
        {renderButtons()}
      </div>
    </main>
  );
}