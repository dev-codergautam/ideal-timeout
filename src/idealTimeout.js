const IDLE_TIMEOUT = 5 * 60 * 60 * 1000; // 5 hours in milliseconds

const idle_events = {
  load: false,
  mousemove: false,
  mousedown: false,
  touchstart: false,
  touchmove: false,
  keydown: false,
  click: false,
  scroll: true,
};

let loggedOutTime;

function sendIdleEvent() {
  removeListeners();
  localStorage.clear();
  window.location.href = "/";
}

function resetIdleTimeout() {
  clearTimeout(loggedOutTime);
  loggedOutTime = setTimeout(sendIdleEvent, IDLE_TIMEOUT);
}

function addListeners() {
  Object.entries(idle_events).forEach(([event_name, capture]) => {
    window.addEventListener(event_name, resetIdleTimeout, capture);
  });
}

function removeListeners() {
  Object.entries(idle_events).forEach(([event_name, capture]) => {
    window.removeEventListener(event_name, resetIdleTimeout, capture);
  });
}

module.exports = {
  sendIdleEvent,
  resetIdleTimeout,
  addListeners,
  removeListeners,
  loggedOutTime,
};
