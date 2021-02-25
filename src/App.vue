<template>
  <div id="app" class="mt-10 flex flex-col items-center">
    <h1 class="text-6xl mb-5">Find word App</h1>
    <div class="mb-5">
      <label class="mr-1 font-medium" for="userInputWord"
        >Type in some letters:
      </label>
      <input
        class="appearance-none border border-transparent py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        id="userInputWord"
        @keydown.enter="findWord"
        v-model="inputContent"
      />
    </div>
    <div class="mb-5">
      <button class="btn mr-1" @click="findWord">Submit</button>
      <button class="btn" @click="clearButton">Clear</button>
    </div>
    <ResultsCount class="mb-5" :count="resultsFound.length"></ResultsCount>
    <ResultsList :data="resultsFound"></ResultsList>
  </div>
</template>

<script>
import ResultsCount from './components/ResultsCount';
import ResultsList from './components/ResultsList';
import findWord from './helpers/findWord.js';
import words from './static/wordList.txt';

export default {
  name: 'App',
  components: {
    ResultsCount,
    ResultsList
  },
  data() {
    return {
      inputContent: '',
      resultsFound: ''
    };
  },
  methods: {
    findWord() {
      let wordsArray = words.split('\n');
      this.resultsFound = findWord(wordsArray, this.inputContent);
    },
    clearButton() {
      this.inputContent = '';
      this.findWord();
    }
  }
};
</script>

<style>
.btn {
  @apply py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75;
}
</style>
