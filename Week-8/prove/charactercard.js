const attackedBtn = document.querySelector('#hit')
const levelBtn = document.querySelector('#up')
const levelText = document.querySelector('#Level')
const healthText = document.querySelector('#Health')
const classText = document.querySelector('#Class')

const character = {
  name: "Deseret Supernova",
  class: "Abyssal Master",
  level: 10000,
  health: 1000000000,
  maxHealth: 1000000000,
  hitsTaken: 0,

  attacked() {
    this.hitsTaken++;
    this.health -= 20;

    if (this.hitsTaken === 5) {
      this.health = 0;
      alert(`${this.name} is tierd of your hits and has killed you.`);

      this.health = this.maxHealth;
      this.hitsTaken = 0;
      this.render();
      return;
    }


    this.render();
  },

  levelUp() {
    this.level += 1;
    this.render();
  },

  render() {
    classText.textContent = `Class: ${this.class}`
    levelText.textContent = `Level: ${this.level.toLocaleString()}`;
    healthText.textContent = `Health: ${this.health.toLocaleString()}`;
  }
};

// Button Events
attackedBtn.addEventListener("click", function () {
  character.attacked();
});

levelBtn.addEventListener("click", function () {
  character.levelUp();
});

// Initial render
character.render();