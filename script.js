const batteryLevel = document.querySelector(".batteryLevel");
const batteryCharging = document.querySelector(".batteryCharging");
const batteryChargingTime = document.querySelector(".batteryChargingTime");
const batteryDisChargingTime = document.querySelector(
  ".batteryDisChargingTime"
);

const battery = () => {
  if ("getBattery" in navigator) {
    navigator.getBattery().then((battery) => {
      function updateAllBatteryDetails() {
        updatechrginfo();
        updateLevelChange();
        updateDischargingTime();
        updateChargingTime();
        console.log(battery);
      }
      updateAllBatteryDetails();
      battery.addEventListener("chargingchange", () => {
        // console.log("Charging has changed- 20%-21%");
        updateAllBatteryDetails();
      });
      function updatechrginfo() {
        const isCharging = battery.charging ? "Yes" : "No";
        // console.log(isCharging);
        batteryCharging.innerHTML = isCharging;
      }
      battery.addEventListener("chargingtimechange", () => {
        console.log("Charging time has changed");
      });
      function updateChargingTime() {
        batteryChargingTime.innerHTML = battery.chargingTime + " seconds";
      }
      battery.addEventListener("dischargingtimechange", () => {
        updateDischargingTime();
      });
      function updateDischargingTime() {
        batteryDisChargingTime.innerHTML = battery.dischargingTime + " seconds";
      }
      battery.addEventListener("levelchange", () => {
        updateLevelChange();
      });
      function updateLevelChange() {
        // console.log(battery.level);
        const level = battery.level * 100 + "%";
        batteryLevel.innerHTML = level;
      }
    });
  }
};

battery();
