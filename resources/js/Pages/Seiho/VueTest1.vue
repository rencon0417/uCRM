<script setup>
</script>
<style>
    body {
      font-family: "Arial", sans-serif;
      margin: 0;
      padding: 0;
    }

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
    }

    .button-container {
      display: flex;
      justify-content: space-around;
      width: 100%;
      max-width: 300px;
      margin-top: 1rem;
    }
    .button {
      background-color: #4285f4;
      border: none;
      color: white;
      padding: 10px 20px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
      border-radius: 4px;
    }

    table {
      border-collapse: collapse;
      width: 80%;
      margin: 1rem auto;
    }

    th,
    td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }

    th {
      background-color: #f2f2f2;
      color: black;
    }
    .result {
      font-size: 24px;
      font-weight: bold;
    }

    .pass {
      color: blue;
    }

    .fail {
      color: red;
    }
</style>

<template>
    <section>
        <div class="container">
            <h1>2択クイズへようこそ!</h1>
            <button>スタート！</button>
            <h2>{{ currentQuestion.text }}</h2>
            <div class="button-container">
                <button class="button" v-for="(option, index) in currentQuestion.options" :key="index"
                @click="submitAnswer(index)">
                {{ option }}
                </button>
            </div>
            <!-- </div> -->
            <div v-if="currentScreen === 'results'">
                <h1>クイズ結果</h1>
                <table>
                    <thead>
                    <tr>
                        <th>問題</th>
                        <th>正解</th>
                        <th>結果</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(question, index) in quiz.questions" :key="index">
                        <td>{{ question.text }}</td>
                        <td>{{ question.options[question.answer] }}</td>
                        <td>{{ getResultIcon(index) }}</td>
                    </tr>
                    </tbody>
                </table>
                <p>正答率：{{ correctAnswers }}問正解／5問中</p>
                <p class="result" :class="{ pass: correctAnswers >= 3, fail: correctAnswers <= 2 }">
                {{ correctAnswers >= 3 ? '合格！' : 'もっとがんばろう' }}
                </p>
                <button class="button" @click="resetQuiz">スタート画面へもどる</button>
            </div>
        </div>
    </section>
  </template>


