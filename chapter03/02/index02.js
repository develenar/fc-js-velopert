// async/await
// 에러를 발생 시킬때에는 throw 를 사용하고, 에러를 잡아낼 때에는 try/catch 문을 사용
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function makeError() {
    await sleep(1000);
    const error = new Error();
    throw error;
  }
  
  async function process() {
    try {
      await makeError();
    } catch (e) {
      console.error(e);
    }
  }
  
  process();
