// 함수
// 점수를 성적등급으로 변환하기
// function getGrade(score) {
const getGrade = score => {
    if (score === 100) {
      return 'A+';
    } else if (score >= 90) {
      return 'A';
    } else if (score === 89) {
      return 'B+';
    } else if (score >= 80) {
      return 'B';
    } else if (score === 79) {
      return 'C+';
    } else if (score >= 70) {
      return 'C';
    } else if (score === 69) {
      return 'D+';
    } else if (score >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  }
  
  const grade = getGrade(90);
  console.log(grade);
