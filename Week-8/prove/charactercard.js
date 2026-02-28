const attacked = document.querySelector('#hit')
const level = document.querySelector('#up')
const levels = document.querySelector('#Level')
const hp = document.querySelector('#Health')


const aCourse = {
    stats: [
    { roomNum: 'STC 353', enrolled: 26}
    ],
    enrollStudent: function (sectionNum) {
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.stats.findIndex(
          (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
          this.stats[sectionIndex].enrolled++;
          renderstats(this.stats);
        }
      }
  };

function sectionTemplate(section) {
    return `<tr>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td></tr>`
}

function renderstats(stats) {
const html = stats.map(sectionTemplate);
document.querySelector("#stats").innerHTML = html.join("");
}

renderstats(aCourse.stats);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});

