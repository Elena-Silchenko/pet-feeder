function App() {
  return (
    <>
      <div className="header-title p-3">Pet Feeder</div>

      <div className="d-flex p-4">
        <div className="mod m-auto">
          <div className="d-flex p-4">
            <div className="week d-flex m-auto">
              <div className="weekdays">Mon</div>
              <div className="weekdays">Tue</div>
              <div className="weekdays">Wed</div>
              <div className="weekdays">Thu</div>
              <div className="weekdays">Fri</div>
              <div className="weekend">Sat</div>
              <div className="weekend">Sun</div>
            </div>
          </div>
          <div className="line"></div>
        </div>
      </div>
    </>
  );
}

export default App;
