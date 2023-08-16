<template>
    <div class="page-not-found">
      <h1 class="title">404</h1>
      <div class="animation-container">
        <div class="house">
          <div class="roof"></div>
          <div class="body"></div>
          <div class="window"></div>
          <div class="door"></div>
        </div>
        <div class="tree"></div>
        <div class="grass"></div>
      </div>
      <p class="message">Alas! You have ventured into the realm of forgotten paths, where the whispers of lost pages echo in the ethereal void.</p>
      <router-link to="/" class="home-link">Return to the sanctuary of beginnings, where the tapestry of destiny weaves its enigmatic threads - the Home Page beckons your return</router-link>
    </div>
  </template>
  
  <style>
  .page-not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    margin: 30px;
  }
  
  .title {
    font-size: 8rem;
    margin-bottom: 2rem;
    color: #ff5722;
  }
  
  .animation-container {
    position: relative;
    width: 200px;
    height: 200px;
    margin-bottom: 2rem;
  }
  
  .house {
    position: absolute;
    width: 120px;
    height: 120px;
    top: 40px;
    left: 40px;
    background-color: #ff5722;
    border-radius: 10px;
    animation: house-move 4s infinite;
    transform-origin: center bottom;
  }
  
  .roof {
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
    left: 50%;
    border-left: 60px solid transparent;
    border-right: 60px solid transparent;
    border-bottom: 80px solid #d84315;
    transform: translateX(-50%);
  }
  
  .body {
    position: absolute;
    width: 100px;
    height: 80px;
    bottom: 0;
    left: 50%;
    background-color: #d84315;
    transform: translateX(-50%);
  }
  
  .window {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 50%;
    left: 50%;
    background-color: #fff;
    transform: translate(-50%, -50%);
  }
  
  .door {
    position: absolute;
    width: 30px;
    height: 60px;
    bottom: 0;
    left: 50%;
    background-color: #fff;
    transform: translateX(-50%);
  }
  
  .tree {
    position: absolute;
    width: 40px;
    height: 120px;
    top: 50%;
    left: 50%;
    margin-left: -20px;
    background-color: #4caf50;
    border-radius: 10px;
    animation: tree-move 4s infinite;
  }
  
  .grass {
    width: 100%;
    height: 20px;
    background-color: #4caf50;
    animation: grass-wave 4s infinite;
  }
  
  .message {
    font-size: 1.5rem;
    color: #333;
  }
  
  .home-link {
    margin-top: 2rem;
    font-size: 1.2rem;
    color: green;
    text-decoration: none;
  }

  .home-link:hover {
    text-decoration: underline;
  }
  
  @keyframes house-move {
    0% {
      transform: translate(0, 0) rotate(0);
    }
    50% {
      transform: translate(0, 20px) rotate(5deg);
    }
    100% {
      transform: translate(0, 0) rotate(0);
    }
  }
  
  @keyframes tree-move {
    0% {
      transform: translate(-50%, -50%) rotate(0);
    }
    50% {
      transform: translate(-50%, -40px) rotate(-5deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(0);
    }
  }
  
  @keyframes grass-wave {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 50px 0;
    }
  }
  </style>