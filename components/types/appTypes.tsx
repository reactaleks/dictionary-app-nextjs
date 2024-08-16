// Data types

interface DictionaryEntry {
    word: string;
    phonetic?: string; // Optional property for single phonetic representation
    phonetics?: Phonetic[]; // Array of phonetics with text and optional audio/sourceUrl
    meanings: Meaning[];
    license: License;
    sourceUrls: string[];
  }
  
  interface Phonetic {
    text: string;
    audio?: string; // Optional audio URL
    sourceUrl?: string; // Optional URL for source of pronunciation information
    license?: License; // Optional license information for the pronunciation audio
  }
  
  interface Meaning {
    partOfSpeech: string;
    definitions: Definition[];
    synonyms?: string[]; // Optional synonyms for the meaning
    antonyms?: string[]; // Optional antonyms for the meaning
  }
  
  interface Definition {
    definition: string;
    synonyms?: string[]; // Optional synonyms for the specific definition
    antonyms?: string[]; // Optional antonyms for the specific definition
    example?: string; // Optional example sentence for verb definitions
  }
  
  interface License {
    name: string;
    url: string;
  }