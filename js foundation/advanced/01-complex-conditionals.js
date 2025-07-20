/*
🎯 INTERMEDIATE CHALLENGE 1: Smart Home Control System
=====================================================

Build a smart home control system that manages multiple devices and conditions!
This challenge combines complex conditional logic, nested statements, and real-world scenarios.

TASKS:
1. Implement complex conditional logic with multiple variables
2. Use nested if statements for sophisticated decision making
3. Combine logical operators for complex conditions
4. Handle edge cases and error conditions
5. Create a realistic simulation system

TOPICS COVERED: Complex conditionals, nested if statements, logical operators, switch statements
*/

console.log("🏠 Smart Home Control System v2.0 🏠\n");

// System state variables
let currentTime = 14; // 24-hour format (0-23)
let temperature = 22; // Celsius
let humidity = 65; // Percentage
let lightLevel = 300; // Lux (0-1000, where 1000 is bright daylight)
let occupancy = true; // Is someone home?
let securityArmed = false;
let energySavingMode = true;

// Device states
let heatingOn = false;
let coolingOn = false;
let lightsOn = false;
let securitySystemActive = false;
let sprinklersOn = false;

// User preferences
const COMFORT_TEMP_MIN = 20;
const COMFORT_TEMP_MAX = 24;
const COMFORT_HUMIDITY_MAX = 70;
const AUTO_LIGHT_THRESHOLD = 200;
const NIGHT_TIME_START = 22;
const NIGHT_TIME_END = 6;
const MORNING_TIME_START = 6;
const MORNING_TIME_END = 10;

console.log("=== CURRENT CONDITIONS ===");
console.log(`Time: ${currentTime}:00`);
console.log(`Temperature: ${temperature}°C`);
console.log(`Humidity: ${humidity}%`);
console.log(`Light Level: ${lightLevel} lux`);
console.log(`Occupancy: ${occupancy ? "Home" : "Away"}`);
console.log(`Energy Saving: ${energySavingMode ? "On" : "Off"}`);

// TODO: CHALLENGE 1A - Climate Control Logic
console.log("\n--- CLIMATE CONTROL SYSTEM ---");

// Implement smart climate control that considers:
// - Current temperature vs comfort range
// - Occupancy status
// - Energy saving mode
// - Time of day (different settings for night/day)

// TODO: Heating logic
// Turn on heating if:
// - Temperature is below comfort minimum AND
// - (Someone is home OR it's morning time) AND
// - (Not in energy saving mode OR temperature is very cold < 18°C)

// if (/* your condition here */) {
//     heatingOn = true;
//     console.log("🔥 Heating system activated");
// } else {
//     heatingOn = false;
//     console.log("🔥 Heating system off");
// }

// TODO: Cooling logic  
// Turn on cooling if:
// - Temperature is above comfort maximum AND
// - Someone is home AND
// - (Not in energy saving mode OR temperature is very hot > 26°C) AND
// - It's not night time (unless temperature > 28°C)

// if (/* your condition here */) {
//     coolingOn = true;
//     console.log("❄️ Cooling system activated");
// } else {
//     coolingOn = false;
//     console.log("❄️ Cooling system off");
// }

// TODO: CHALLENGE 1B - Smart Lighting System
console.log("\n--- SMART LIGHTING SYSTEM ---");

// Implement smart lighting that considers:
// - Light level (natural light available)
// - Occupancy
// - Time of day
// - Energy saving mode

// TODO: Determine if lights should be on
// Turn on lights if:
// - Someone is home AND
// - (Light level is below threshold OR it's night time) AND
// - (Not in energy saving mode OR light level is very dark < 100 lux)

// if (/* your condition here */) {
//     lightsOn = true;
//     
//     // Determine brightness level based on conditions
//     let brightness;
//     if (currentTime >= NIGHT_TIME_START || currentTime <= NIGHT_TIME_END) {
//         brightness = energySavingMode ? "dim" : "medium";
//     } else if (lightLevel < 100) {
//         brightness = "bright";
//     } else {
//         brightness = "medium";
//     }
//     
//     console.log(`💡 Lights on - Brightness: ${brightness}`);
// } else {
//     lightsOn = false;
//     console.log("💡 Lights off");
// }

// TODO: CHALLENGE 1C - Security System Logic
console.log("\n--- SECURITY SYSTEM ---");

// Implement security logic with complex conditions:
// - Auto-arm when away for more than 30 minutes
// - Different security levels based on time and occupancy
// - Handle special cases (maintenance mode, guest access, etc.)

let awayTimeMinutes = occupancy ? 0 : 45; // Simulate time away
let maintenanceMode = false;
let guestAccess = false;

// TODO: Determine security system status
// Activate security if:
// - (No one is home AND away for > 30 minutes) OR
// - (It's night time AND security was manually armed) OR
// - (It's night time AND no one is home)
// BUT NOT if:
// - Maintenance mode is on OR
// - Guest access is enabled

// if (/* your condition here */) {
//     securitySystemActive = true;
//     
//     // Determine security level
//     let securityLevel;
//     if (!occupancy && currentTime >= NIGHT_TIME_START) {
//         securityLevel = "maximum";
//     } else if (!occupancy) {
//         securityLevel = "standard";
//     } else {
//         securityLevel = "minimal";
//     }
//     
//     console.log(`🔒 Security system active - Level: ${securityLevel}`);
// } else {
//     securitySystemActive = false;
//     console.log("🔒 Security system disarmed");
// }

// TODO: CHALLENGE 1D - Garden Irrigation System
console.log("\n--- GARDEN IRRIGATION ---");

// Implement smart irrigation that considers:
// - Humidity levels
// - Time of day (best watering times)
// - Weather conditions
// - Water conservation mode

let lastWatered = 18; // Hours since last watering
let rainToday = false; // Simulate weather data
let waterConservationMode = true;

// TODO: Determine if sprinklers should run
// Turn on sprinklers if:
// - Humidity is low (< 60%) AND
// - It hasn't rained today AND
// - Last watered > 12 hours ago AND
// - It's early morning (6-10) OR late evening (18-22) AND
// - (Not in water conservation mode OR humidity is very low < 40%)

// if (/* your condition here */) {
//     sprinklersOn = true;
//     
//     // Determine watering duration based on conditions
//     let duration;
//     if (humidity < 40) {
//         duration = waterConservationMode ? 15 : 20;
//     } else if (humidity < 50) {
//         duration = waterConservationMode ? 10 : 15;
//     } else {
//         duration = waterConservationMode ? 5 : 10;
//     }
//     
//     console.log(`💧 Sprinklers activated - Duration: ${duration} minutes`);
// } else {
//     sprinklersOn = false;
//     console.log("💧 Sprinklers off");
// }

// TODO: CHALLENGE 1E - Energy Management Override
console.log("\n--- ENERGY MANAGEMENT ---");

// Implement energy management that can override other systems:
// - Calculate total energy usage
// - Apply restrictions during peak hours
// - Emergency power saving mode

let currentEnergyUsage = 0;
let peakHours = (currentTime >= 16 && currentTime <= 20); // 4-8 PM
let emergencyPowerSaving = false;

// Calculate energy usage based on active systems
if (heatingOn) currentEnergyUsage += 3000; // Watts
if (coolingOn) currentEnergyUsage += 2500;
if (lightsOn) currentEnergyUsage += 500;
if (sprinklersOn) currentEnergyUsage += 800;

const MAX_ENERGY_USAGE = 4000; // Watts
const PEAK_HOUR_LIMIT = 3000; // Watts during peak hours

// TODO: Implement energy management logic
// Apply restrictions if:
// - Energy usage exceeds limits OR
// - It's peak hours and usage > peak limit OR
// - Emergency power saving is active

// if (/* your condition here */) {
//     console.log("⚡ ENERGY MANAGEMENT ACTIVE");
//     console.log(`Current usage: ${currentEnergyUsage}W`);
//     
//     // Priority shutdown order: sprinklers -> cooling -> heating -> lights
//     if (sprinklersOn && currentEnergyUsage > MAX_ENERGY_USAGE) {
//         sprinklersOn = false;
//         currentEnergyUsage -= 800;
//         console.log("💧 Sprinklers shut down to save energy");
//     }
//     
//     if (coolingOn && (currentEnergyUsage > MAX_ENERGY_USAGE || 
//         (peakHours && currentEnergyUsage > PEAK_HOUR_LIMIT))) {
//         coolingOn = false;
//         currentEnergyUsage -= 2500;
//         console.log("❄️ Cooling system shut down to save energy");
//     }
//     
//     // Add more shutdown logic for heating and lights if needed
// } else {
//     console.log(`⚡ Energy usage normal: ${currentEnergyUsage}W`);
// }

// TODO: CHALLENGE 1F - System Status Report
console.log("\n=== FINAL SYSTEM STATUS ===");

// Create a comprehensive status report
// Show all system states and any alerts/warnings

// TODO: Display final status of all systems
// console.log(`🔥 Heating: ${heatingOn ? "ON" : "OFF"}`);
// console.log(`❄️ Cooling: ${coolingOn ? "ON" : "OFF"}`);
// console.log(`💡 Lights: ${lightsOn ? "ON" : "OFF"}`);
// console.log(`🔒 Security: ${securitySystemActive ? "ACTIVE" : "DISARMED"}`);
// console.log(`💧 Sprinklers: ${sprinklersOn ? "ON" : "OFF"}`);
// console.log(`⚡ Total Energy Usage: ${currentEnergyUsage}W`);

// TODO: Generate alerts for any concerning conditions
// Check for:
// - Temperature outside comfort range
// - High humidity
// - High energy usage
// - Security concerns

/*
BONUS CHALLENGES:
1. Add a "vacation mode" that changes all system behaviors
2. Implement a learning algorithm that adjusts preferences based on usage patterns
3. Add weather forecast integration that affects irrigation and climate control
4. Create a mobile app interface simulation with user controls
5. Add voice command processing for system control

EXPECTED OUTPUT EXAMPLE:
========================
🏠 Smart Home Control System v2.0 🏠

=== CURRENT CONDITIONS ===
Time: 14:00
Temperature: 22°C
Humidity: 65%
Light Level: 300 lux
Occupancy: Home
Energy Saving: On

--- CLIMATE CONTROL SYSTEM ---
🔥 Heating system off
❄️ Cooling system off

--- SMART LIGHTING SYSTEM ---
💡 Lights on - Brightness: medium

--- SECURITY SYSTEM ---
🔒 Security system disarmed

--- GARDEN IRRIGATION ---
💧 Sprinklers off

--- ENERGY MANAGEMENT ---
⚡ Energy usage normal: 500W

=== FINAL SYSTEM STATUS ===
🔥 Heating: OFF
❄️ Cooling: OFF
💡 Lights: ON
🔒 Security: DISARMED
💧 Sprinklers: OFF
⚡ Total Energy Usage: 500W

🟢 All systems operating normally
*/

