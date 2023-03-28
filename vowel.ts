import inquirer, { QuestionCollection } from 'inquirer';

interface CharacterInput {
  character: string;
}

const questions: QuestionCollection<CharacterInput> = [
  {
    type: 'input',
    name: 'character',
    message: 'Enter a character:',
    validate: function (value: any) {
      return value.length === 1 || 'Please enter a single character!';
    },
  },
];

const isVowel = (c: string): boolean => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.includes(c.toLowerCase());
};

inquirer.prompt<CharacterInput>(questions).then((answers) => {
  const { character } = answers;

  if (isVowel(character)) {
    console.log(`${character} is a vowel.`);
  } else {
    console.log(`${character} is a consonant.`);
  }
});
