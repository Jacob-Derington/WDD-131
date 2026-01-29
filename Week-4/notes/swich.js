console.log("gradeFromScore(111) ->", gradeFromScore(111));
function grade(score){
    let grade = "Invalid score";
    switch(true){
        case score > 100:
            break;
        case (score >= 90 && score <= 100):
            grade = "A";
            break;
        case (score >= 80):
            grade = "B";
            break;
        case (score >= 70):
            grade = "C";
            break;
        case (score >= 60):
            grade = "D";
            break;
        case (score >= 0):
            grade = "F";
            break;
        default:
            grade = "Invalid score";
    }
}