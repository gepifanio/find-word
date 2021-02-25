<template>
  <div id="app">
    <h1>Find word App</h1>
    <div>
      <label for="userInputWord">Type some letters: </label>
      <input
        type="text"
        id="userInputWord"
        @keydown.enter="findWord"
        v-model="inputContent"
      />
    </div>
    <div>
      <button @click="findWord">Submit</button>
      <button @click="clearButton">Clear</button>
    </div>
    <ResultsCount :count="resultsFound.length"></ResultsCount>
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
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
