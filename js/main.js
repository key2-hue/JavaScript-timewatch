{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');

  let startTime;
  let time;
  let elapsedTime = 0;

  function countUp() {
    const d = new Date(Date.now() - startTime + elapsedTime);
    const m = String(d.getMinutes()).padStart(2,'0');
    const s = String(d.getSeconds()).padStart(2,'0');
    const ms = String(d.getMilliseconds()).padStart(3,'0');

    timer.textContent = `${m}:${s}.${ms}`;

    time = setTimeout(()=> {
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
    clearTimeout(time);
    elapsedTime += Date.now() - startTime;
  });

  reset.addEventListener('click', ()=> {
    if(reset.classList.contains('inactive') === true) {
      return;
    }
    readySetStopWatch();
    timer.textContent = '00:00.000';
    elapsedTime = 0;
  });
}