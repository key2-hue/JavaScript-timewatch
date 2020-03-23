{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');

  let startTime;
  let timerId;
  let AddTime = 0;

  function countUp() {
    const d = new Date(Date.now() - startTime + AddTime);
    let m = Math.floor(d / 60000);
    m = ('0' + m).slice(-2);
    let s = Math.floor(d % 60000 / 1000);
    s = ('0' + s).slice(-2);
    let ms = d % 1000;
    ms = ('0' + ms).slice(-3);

    timer.textContent = `${m}:${s}.${ms}`;

    timerId = setTimeout(()=> {
      countUp();
    }, 10);
  }

  function readySetStopWatch() {
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.add('inactive');
  }

  function startWatch() {
    start.classList.add('inactive');
    stop.classList.remove('inactive');
    reset.classList.add('inactive');
  }

  function stopWatch() {
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.remove('inactive');
  }

  readySetStopWatch();

  start.addEventListener('click', ()=> {
    if(start.classList.contains('inactive') === true) {
      return;
    }
    startWatch();
    startTime = Date.now();
    countUp();
  });

  stop.addEventListener('click', ()=> {
    if(stop.classList.contains('inactive') === true) {
      return;
    }
    stopWatch();
    clearTimeout(timerId);
    AddTime += Date.now() - startTime;
  });

  reset.addEventListener('click', ()=> {
    if(reset.classList.contains('inactive') === true) {
      return;
    }
    readySetStopWatch();
    timer.textContent = '00:00.000';
    AddTime = 0;
  });
}