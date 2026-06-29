import { Activity, Bike, Box, Dumbbell, Footprints, Mountain, Ruler } from "lucide-react";

export const stats = {
  height: "5'3 \"",
  startingWeight: 180,
  highestWeight: 186,
  currentWeight: 181.6,
  bellyStart: 44,
  bellyCurrent: 41.5,
  neck: 16,
  thigh: 22,
  biceps: 13,
  weeksCompleted: 8,
  currentPhase: "Phase 2 Restart",
  packCurrent: 20,
  packGoal: 50,
  packNext: 25,
};

export const progressData = [
  { week: "Start", weight: 180, belly: 44 },
  { week: "High", weight: 186, belly: 43.5 },
  { week: "Wk 3", weight: 184.2, belly: 42.25 },
  { week: "Wk 5", weight: 182.3, belly: 41 },
  { week: "Jun 29", weight: 181.6, belly: 41.5 },
];

export const conditioningData = [
  { area: "Walking", score: 88 },
  { area: "Bike", score: 76 },
  { area: "Step-ups", score: 60 },
  { area: "Core", score: 70 },
  { area: "Mobility", score: 74 },
  { area: "Pack Readiness", score: 58 },
];

export const readinessSummary = [
  {
    area: "Aerobic Conditioning",
    score: 72,
    rating: "7.2/10",
    status: "Strong base building",
    evidence: "60 min treadmill, 58 min vest walk, multiple 40–45 min sessions, 38.90 km Biktrix ride, and consistent travel walking across three weeks.",
    next: "Build toward 75–90 min steady sessions and more outdoor elevation.",
  },
  {
    area: "Leg Strength",
    score: 60,
    rating: "6/10",
    status: "Improving foundation",
    evidence: "Goblet squats, step-ups, kettlebell deadlifts, weighted vest exposure.",
    next: "Progress step-ups, add controlled pack/vest work, and increase lower-body volume gradually.",
  },
  {
    area: "Pack Readiness",
    score: 58,
    rating: "5.8/10",
    status: "Pack progression started",
    evidence: "First 20 lb pack treadmill session completed: 45 min at moderate incline, speed varied from 2.0 to 3.0 mph, foot felt good with no discomfort.",
    next: "Repeat 20 lb pack work for 2–3 more sessions before increasing to 25 lb.",
  },
  {
    area: "Foot Health",
    score: 85,
    rating: "8.5/10",
    status: "Much improved",
    evidence: "Foot handled 30 min treadmill, 58 min vest walk, travel walking, and the 35 min return-home treadmill session without a reported flare-up.",
    next: "Keep gradual progression and avoid stacking too many loaded walking days together.",
  },
  {
    area: "Shoulder Health",
    score: 50,
    rating: "5/10",
    status: "Still needs work",
    evidence: "Initial right shoulder ROM limitation; band pull-aparts, wall slides, and serratus work are helping.",
    next: "Continue band work during travel and avoid painful overhead/lateral movements.",
  },
];

export const readinessMilestones = [
  { label: "60+ min unloaded treadmill/walk", status: "Done" },
  { label: "58 min weighted vest walk", status: "Done" },
  { label: "30 min travel treadmill with foot good", status: "Done" },
  { label: "First 60 min weighted vest walk", status: "Next" },
  { label: "First 20 lb pack session", status: "Done" },
  { label: "25 lb pack session", status: "Next" },
  { label: "30 lb pack session", status: "Pending" },
  { label: "90 min outdoor hike", status: "Pending" },
  { label: "2 hr outdoor hike with elevation", status: "Pending" },
];

export const workouts = [
  {
    day: "Tuesday",
    type: "Return Home Conditioning",
    phase: "Phase 2 Restart",
    duration: "35 min",
    intensity: "Easy",
    focus: "Completed: 35 min treadmill, flat, 2.0 mph, foot good",
    status: "Completed",
  },
  {
    day: "Wednesday",
    type: "Strength A",
    phase: "Phase 2 Restart",
    duration: "35–45 min",
    intensity: "Moderate",
    focus: "Goblet squat, bench press, band row, KB deadlift, plank + shoulder rehab",
    status: "Upcoming",
  },
  {
    day: "Thursday",
    type: "Cardio / Foot Check",
    phase: "Phase 2 Restart",
    duration: "30–40 min",
    intensity: "Easy / Moderate",
    focus: "Treadmill, walking pad, or bike depending on foot response",
    status: "Upcoming",
  },
  {
    day: "Friday",
    type: "Strength B",
    phase: "Phase 2 Restart",
    duration: "35–45 min",
    intensity: "Moderate",
    focus: "Step-ups, shoulder press, band pull-aparts, kettlebell deadlift, core",
    status: "Upcoming",
  },
  {
    day: "Saturday",
    type: "Long Conditioning",
    phase: "Phase 2 Restart",
    duration: "45–60 min",
    intensity: "Moderate",
    focus: "Treadmill incline, outdoor walk, or Biktrix ride",
    status: "Upcoming",
  },
  {
    day: "Sunday",
    type: "Rest / Weekly Check-In",
    phase: "Phase 2 Restart",
    duration: "—",
    intensity: "Recovery",
    focus: "Measurements, planning, recovery",
    status: "Upcoming",
  },
];

export const equipment = [
  { name: "Yesoul G1M Bike", use: "Intervals, Zone 2 cardio, low-impact conditioning", icon: Bike, category: "Cardio" },
  { name: "Biktrix Juggernaut FS ST", use: "Zone 2 conditioning, hill climbing, scouting, recovery rides, and hunting-specific endurance", icon: Bike, category: "Cardio / Hunting Specific" },
  { name: "Yesoul W2 Lite Walking Pad", use: "Incline walking, foot-friendly Zone 2 work", icon: Footprints, category: "Cardio" },
  { name: "12-inch Workout Step / Platform", use: "Controlled step-ups, hunting leg endurance, stability", icon: Box, category: "Hunt Specific" },
  { name: "10 lb Weighted Vest", use: "Careful progression for walks, step-ups, and planks", icon: Mountain, category: "Load" },
  { name: "Adjustable Kettlebell", use: "Hinges, goblet squats, carries, rows", icon: Dumbbell, category: "Strength" },
  { name: "Straight Barbell", use: "Rows, deadlift patterns, presses, loaded strength work", icon: Activity, category: "Strength" },
  { name: "Curved / EZ Bar", use: "Curls, triceps, rows, joint-friendlier upper work", icon: Activity, category: "Strength" },
  { name: "Resistance Bands", use: "Shoulders, posture, mobility, warmups, rehab-style work", icon: Ruler, category: "Mobility" },
  { name: "Workout Bench", use: "Rows, presses, step support, accessory work", icon: Dumbbell, category: "Strength" },
];

export const priorities = [
  "Keep the foot calm: no aggressive jumps in volume.",
  "Use the 10 lb vest when pain is 0–2/10 and movement feels clean; current milestone is 58 min with foot feeling good.",
  "Maintain walking consistency during travel; perfection is not required.",
  "Phase 2 starts after June travel with more structured pack/step-up progression.",
];

export const phasePlan = [
  {
    phase: "Phase 1",
    weeks: "Weeks 1–4",
    title: "Build the Foundation",
    color: "blue",
    goal: "Build consistency, learn movement, and create a habit.",
    focus: "Show up, move daily, and build the habit.",
    days: [
      { day: "Mon", label: "Strength A", time: "20–25 min", work: ["Goblet squat — 2 x 10", "Bench press — 2 x 10", "Band row — 2 x 10", "Kettlebell deadlift — 2 x 10", "Plank — 2 x 20 sec"] },
      { day: "Tue", label: "Cardio", time: "20–30 min", work: ["Bike or walking pad", "Steady pace", "You should be able to talk comfortably"] },
      { day: "Wed", label: "Active Recovery", time: "10–20 min", work: ["Easy walk", "Stretching", "Mobility work"] },
      { day: "Thu", label: "Strength B", time: "20–25 min", work: ["Step-ups — 2 x 8/leg", "Shoulder press — 2 x 10", "Band pull-aparts — 2 x 12", "Kettlebell deadlift — 2 x 10", "Plank — 2 x 20 sec"] },
      { day: "Fri", label: "Cardio", time: "20–30 min", work: ["Bike or walking pad", "Steady pace", "Talk-test effort"] },
      { day: "Sat", label: "Optional", time: "10–30 min", work: ["Walk", "Easy hike", "Mobility"] },
      { day: "Sun", label: "Rest", time: "—", work: ["Rest", "Recover", "Prepare for the week ahead"] },
    ],
  },
  {
    phase: "Phase 2",
    weeks: "Weeks 5–10",
    title: "Build Strength & Endurance",
    color: "green",
    goal: "Increase strength, improve cardio, and burn fat.",
    focus: "Push a little harder, add weight or reps, and stay consistent.",
    days: [
      { day: "Mon", label: "Strength A", time: "35–45 min", work: ["Barbell squat — 3 x 8–12", "Bench press — 3 x 8–12", "Bent-over row — 3 x 8–12", "Kettlebell swings — 3 x 15", "Plank — 3 x 30–45 sec"] },
      { day: "Tue", label: "Cardio Steady", time: "30–40 min", work: ["Bike or walking pad", "Moderate steady pace", "Stay conversational"] },
      { day: "Wed", label: "Strength B", time: "35–45 min", work: ["Deadlift — 3 x 8–10", "Shoulder press — 3 x 10", "Step-ups — 3 x 10/leg", "Band row — 3 x 12", "Plank — 3 x 30–45 sec"] },
      { day: "Thu", label: "Active Recovery", time: "20–30 min", work: ["Easy walk", "Mobility", "Stretching"] },
      { day: "Fri", label: "Strength A", time: "35–45 min", work: ["Repeat Monday", "Add reps or weight if clean", "Keep form strict"] },
      { day: "Sat", label: "Cardio Intervals", time: "30–40 min", work: ["5 min warm-up", "1 min hard / 2 min easy", "6–8 rounds", "5 min cool-down"] },
      { day: "Sun", label: "Rest", time: "—", work: ["Rest", "Recover", "Prepare for the week ahead"] },
    ],
  },
  {
    phase: "Phase 3",
    weeks: "Weeks 11–15",
    title: "Hunting Prep",
    color: "orange",
    goal: "Build strength, endurance, and real-world performance.",
    focus: "Train like you hunt — build strength, endurance, and carry capacity.",
    days: [
      { day: "Mon", label: "Lower Body Strength", time: "45–60 min", work: ["Deadlift — 4 x 6–8", "Step-ups — 3 x 12/leg", "Walking lunges — 3 x 10/leg", "Farmer carry — 3 x 30–45 sec", "Plank — 3 x 45–60 sec"] },
      { day: "Tue", label: "Conditioning", time: "30–45 min", work: ["Hike, walk, or bike", "Steady pace", "Add 10–20 lb backpack if possible"] },
      { day: "Wed", label: "Upper + Core", time: "45–60 min", work: ["Bench press — 4 x 8", "Barbell row — 4 x 10", "Shoulder press — 3 x 10", "Band rotations — 3 x 12/side", "Plank — 3 x 45–60 sec"] },
      { day: "Thu", label: "Active Recovery", time: "20–30 min", work: ["Easy walk", "Mobility", "Stretching"] },
      { day: "Fri", label: "Full Body Strength", time: "45–60 min", work: ["Barbell squat — 4 x 8", "Light deadlift — 3 x 10", "Step-ups — 3 x 10/leg", "Farmer carry — 3 x 30–45 sec", "Side plank — 3 x 30–45 sec/side"] },
      { day: "Sat", label: "Long Conditioning", time: "45–60+ min", work: ["Long hike or walk", "Gradually increase distance/time/elevation", "Add backpack weight gradually"] },
      { day: "Sun", label: "Rest", time: "—", work: ["Rest", "Recover", "Prepare for the week ahead"] },
    ],
  },
];

export const trackerRows = [
  {
    label: "Date",
    values: ["Start", "Wk 1", "Wk 2", "Wk 3", "Wk 4", "Wk 5", "", "", "", "", "", "", ""],
  },
  {
    label: "Body Weight",
    values: ["180", "182", "184", "184.2", "183.4", "182.3", "", "", "", "", "", "", ""],
  },
  {
    label: "Belly",
    values: ['44"', '43.5"', '43"', '42.25"', '41.5"', '41"', "", "", "", "", "", "", ""],
  },
  {
    label: "Energy 1–10",
    values: ["5", "5", "6", "6", "7", "7", "", "", "", "", "", "", ""],
  },
  {
    label: "Sleep",
    values: ["", "", "", "Improving", "Better", "Solid", "", "", "", "", "", "", ""],
  },
  {
    label: "Conditioning",
    values: ["Low", "Building", "Improving", "45 min walks", "Incline work", "58 min vest incline", "", "", "", "", "", "", ""],
  },
  {
    label: "Foot Status",
    values: ["Sore", "Flared", "Better", "Managing", "Improving", "Feels good", "", "", "", "", "", "", ""],
  },
  {
    label: "Notes",
    values: ["Started", "Routine forming", "More consistency", "Added step-ups", "Vest work", "58 min vest walk, foot good", "", "", "", "", "", "", ""],
  },
];
export const workoutLog = [
  {
    "session": "Session 001",
    "date": "2026-04-20",
    "day": "Program Start",
    "type": "Starting Baseline",
    "measurements": {
      "height": "5'3\"",
      "weight": "175 lb reported starting weight",
      "belly": "Not measured yet",
      "neck": "Not measured yet",
      "thigh": "Not measured yet",
      "biceps": "Not measured yet",
      "chest": "Not measured yet"
    },
    "workout": [
      "Program goals established",
      "Equipment reviewed: Yesoul G1M Bike, Yesoul W2 Lite Walking Pad, curved/straight barbell, resistance bands, adjustable kettlebell, bench",
      "12–15 week hunting prep plan requested",
      "Primary goals: lose weight, reduce belly fat, improve conditioning, improve health markers, prepare for elk/mule deer hunting"
    ],
    "notes": "Beginning of the structured hunting-prep journey. No regular workout background reported; plan needed to be simple, motivating, and progressive.",
    "foot": "No specific foot issue reported yet",
    "feeling": "Motivated but starting from low workout base"
  },
  {
    "session": "Session 002",
    "date": "2026-04-20",
    "day": "Plan Build",
    "type": "Program Structure",
    "measurements": null,
    "workout": [
      "Day-by-day weekly schedule requested",
      "Printable structured plan requested",
      "Three-phase plan created: Phase 1 foundation, Phase 2 strength/endurance, Phase 3 hunting prep",
      "Strength A and Strength B templates built",
      "Progress tracking dashboard/poster concept created"
    ],
    "notes": "The overall framework was created: 15-week plan, phases, daily workouts, progress tracking, and printable wall-plan format.",
    "foot": "No specific foot issue reported yet",
    "feeling": "Planning / setup"
  },
  {
    "session": "Session 003",
    "date": "2026-04-20",
    "day": "Starting Weights",
    "type": "Strength Baseline Planning",
    "measurements": null,
    "workout": [
      "Starting weights discussed instead of max testing",
      "Goblet squat target established around 20 lb",
      "Bench press target established around 30 lb",
      "Kettlebell deadlift target established around 20 lb",
      "Progression strategy: add reps/sets/weight only when form is clean"
    ],
    "notes": "Decision made not to chase max weights early. The plan focused on safe baseline weights and repeatable consistency.",
    "foot": "No specific foot issue reported yet",
    "feeling": "Ready to start"
  },
  {
    "session": "Session 004",
    "date": "2026-04-23",
    "day": "First Logged Workout",
    "type": "Walking + Strength A",
    "measurements": null,
    "workout": [
      "20 min walking pad",
      "Mix of flat and incline walking",
      "Goblet squats — 2 x 10 @ 12 lb kettlebell",
      "Bench press — 2 x 10 @ 30 lb",
      "Band rows — 2 x 10",
      "Kettlebell deadlifts — 2 x 10 @ 12 lb",
      "Plank — 20 sec"
    ],
    "notes": "First reported completed workout and the first real anchor point for the training log.",
    "foot": "Not reported as an issue",
    "feeling": "Workout completed"
  },
  {
    "session": "Session 005",
    "date": "2026-04-24",
    "day": "Bike + Upper/Core",
    "type": "Bike + Accessories",
    "measurements": {
      "weight": "180 lb",
      "note": "Reported as new highest weight at the time"
    },
    "workout": [
      "25 min bike",
      "Bench press — 3 sets @ 30 lb",
      "Barbell curls — 2 sets @ 30 lb",
      "Band pulls",
      "Sideways band pulls",
      "Situps — 2 x 10",
      "Plank — 20 sec"
    ],
    "notes": "Weight reported at 180 lb, which felt like a new high point at the time.",
    "foot": "Not reported as an issue",
    "feeling": "Second logged workout completed"
  },
  {
    "session": "Session 006",
    "date": "2026-04-25",
    "day": "Strength B",
    "type": "Treadmill + Strength B",
    "measurements": null,
    "workout": [
      "30 min treadmill",
      "Step-ups — 2 x 10 bodyweight",
      "Shoulder press — 2 x 10 @ 30 lb",
      "Band pull-aparts — 2 x 10",
      "Goblet deadlift — 2 x 10 @ 20 lb"
    ],
    "notes": "Step-ups were confirmed as bodyweight. This helped establish the lower-body/hunting-specific pattern.",
    "foot": "Not reported as an issue",
    "feeling": "Workout completed"
  },
  {
    "session": "Session 007",
    "date": "2026-04-26",
    "day": "Incline Conditioning",
    "type": "Treadmill",
    "measurements": null,
    "workout": [
      "25 min treadmill",
      "Max incline",
      "Steady 1.5 mph pace",
      "Final 60 sec bumped to 3.8 mph at full incline",
      "No other workouts"
    ],
    "notes": "Early evidence that incline treadmill work would become a useful hunting-conditioning tool.",
    "foot": "Not reported as an issue",
    "feeling": "Conditioning-only day"
  },
  {
    "session": "Session 008",
    "date": "2026-04-27",
    "day": "Strength A Progression",
    "type": "Treadmill + Strength A",
    "measurements": null,
    "workout": [
      "30 min treadmill @ 1.8 mph, moderate incline",
      "Goblet squats — 2 x 10 @ 20 lb",
      "Bench press — 2 x 10 @ 40 lb",
      "Barbell curls — 2 x 10 @ 40 lb",
      "Kettlebell deadlift — 2 x 10 @ 20 lb",
      "Plank — 2 x 25 sec",
      "Medium band seated rows — 2 x 10"
    ],
    "notes": "Bench and curls increased to 40 lb. Plank time improved to 25 seconds.",
    "foot": "Not reported as an issue",
    "feeling": "Strength progression day"
  },
  {
    "session": "Session 009",
    "date": "2026-04-28",
    "day": "Cardio Combo",
    "type": "Treadmill + Bike",
    "measurements": null,
    "workout": [
      "25 min flat treadmill",
      "15 min steady bike",
      "Bike resistance at 30%"
    ],
    "notes": "First clear treadmill + bike combination day.",
    "foot": "Not reported as an issue",
    "feeling": "Steady cardio completed"
  },
  {
    "session": "Session 010",
    "date": "2026-04-28",
    "day": "Measurement Baseline",
    "type": "Check-In",
    "measurements": {
      "belly": "44 in at bellybutton",
      "neck": "~16 in",
      "calves": "16 in",
      "thigh": "24 in",
      "biceps": "13.5 in",
      "chest": "41 in"
    },
    "workout": [
      "Measurement baseline established",
      "BMI/body composition discussion",
      "Goal-weight projection discussed"
    ],
    "notes": "Official measurement baseline established. Belly measurement became the key non-scale marker.",
    "foot": "Not reported as an issue",
    "feeling": "Baseline established"
  },
  {
    "session": "Session 011",
    "date": "2026-04-29",
    "day": "Strength A",
    "type": "Treadmill + Strength A",
    "measurements": null,
    "workout": [
      "28 min treadmill",
      "Goblet squat — 3 x 10 @ 20 lb",
      "Bench press — 3 x 10 @ 40 lb",
      "Band row — 2 x 10 heavy band",
      "Kettlebell deadlift — 2 x 10 @ 20 lb",
      "Plank — 2 x 30 sec"
    ],
    "notes": "Moved to 3 sets on goblet squat and bench press. Plank improved to 30-second holds.",
    "foot": "Not reported as an issue",
    "feeling": "Progress dashboard requested after this session"
  },
  {
    "session": "Session 012",
    "date": "2026-04-30",
    "day": "Treadmill + Morel Walk",
    "type": "Cardio / Outdoor Activity",
    "measurements": null,
    "workout": [
      "35 min treadmill",
      "Short 1–2 km hike/walk while looking for morel mushrooms"
    ],
    "notes": "The extra mushroom walk added outdoor terrain exposure on top of the treadmill workout.",
    "foot": "Not reported that day",
    "feeling": "Additional outdoor movement"
  },
  {
    "session": "Session 013",
    "date": "2026-05-01",
    "day": "Strength B",
    "type": "Treadmill + Strength B",
    "measurements": null,
    "workout": [
      "30 min treadmill to start",
      "Strength B completed",
      "Step-ups, shoulder press, band pull-aparts, kettlebell deadlift/plank pattern"
    ],
    "notes": "Reported feeling gassed after the workout, one of the first signs of accumulated training fatigue.",
    "foot": "No specific foot note in workout report",
    "feeling": "Gassed after workout"
  },
  {
    "session": "Session 014",
    "date": "2026-05-01",
    "day": "Foot & Shoulder Limitation Identified",
    "type": "Issue Check-In",
    "measurements": null,
    "workout": [
      "Right foot soreness noted after walks of 15+ minutes",
      "Soreness located on right side of right foot",
      "Right shoulder limited to about 90° lateral raise",
      "Left arm could raise overhead normally"
    ],
    "notes": "This became a major programming constraint. Training shifted toward foot-friendly volume and shoulder mobility/rehab accessories.",
    "foot": "Sore after 15+ min walking",
    "feeling": "Important limitation identified"
  },
  {
    "session": "Session 015",
    "date": "2026-05-02",
    "day": "Rest Day",
    "type": "Rest",
    "measurements": null,
    "workout": [
      "No workout",
      "No walking pad",
      "No bike"
    ],
    "notes": "Full rest day after a strong early training week and discovery of foot/shoulder issues.",
    "foot": "Resting",
    "feeling": "Recovery day"
  },
  {
    "session": "Session 016",
    "date": "2026-05-03",
    "day": "Interrupted Treadmill",
    "type": "Treadmill",
    "measurements": null,
    "workout": [
      "10 min treadmill",
      "Stopped due to insoles hurting the arch of the foot"
    ],
    "notes": "Insoles were aggravating the foot. This helped identify footwear/insert setup as part of the issue.",
    "foot": "Arch discomfort from insoles",
    "feeling": "Stopped early"
  },
  {
    "session": "Session 017",
    "date": "2026-05-04",
    "day": "Strength A",
    "type": "Treadmill + Strength A",
    "measurements": null,
    "workout": [
      "26 min treadmill",
      "Slight incline",
      "No insoles",
      "Strength A completed",
      "Bench press adjusted to 30 lb",
      "Seated rows increased to extra-heavy band"
    ],
    "notes": "Feet felt good without insoles. This was an important footwear adjustment win.",
    "foot": "Good without insoles",
    "feeling": "Good"
  },
  {
    "session": "Session 018",
    "date": "2026-05-05",
    "day": "Longer Treadmill + Shoulder Work",
    "type": "Cardio + Shoulder Rehab",
    "measurements": null,
    "workout": [
      "40 min treadmill with varied speeds and incline",
      "Final minute at max speed 3.6 mph, no incline",
      "Light band pull-aparts",
      "Serratus punches with light band",
      "Shoulder blade angled push-ups"
    ],
    "notes": "New shoes seemed better until the final max-speed push. Shoulder accessory work became more regular.",
    "foot": "Better until final max-speed push",
    "feeling": "Good but foot noticed hard finish"
  },
  {
    "session": "Session 019",
    "date": "2026-05-06",
    "day": "Bike + Shoulder",
    "type": "Bike + Shoulder Rehab",
    "measurements": {
      "weight": "184.3 lb"
    },
    "workout": [
      "Bike ride completed; screenshot provided in original chat",
      "1 set of shoulder workouts",
      "Added banded arm lifts out to the side",
      "Travel constraints discussed for May 16–18 camping and June 1–17 vacation"
    ],
    "notes": "Weight reported at 184.3 lb. Travel alternatives became part of the plan around this time.",
    "foot": "Not specifically reported",
    "feeling": "Planning around travel"
  },
  {
    "session": "Session 020",
    "date": "2026-05-07",
    "day": "Strength A",
    "type": "Treadmill + Strength A",
    "measurements": null,
    "workout": [
      "21 min treadmill",
      "Strength A completed"
    ],
    "notes": "Foot felt great. Shoulder had manageable discomfort; banded lateral raises were the worst movement.",
    "foot": "Great",
    "feeling": "Shoulder discomfort manageable"
  },
  {
    "session": "Session 021",
    "date": "2026-05-08",
    "day": "Moderate Treadmill",
    "type": "Treadmill + Shoulder Rehab",
    "measurements": null,
    "workout": [
      "30 min treadmill at moderate pace",
      "Last 2 min at full incline",
      "Shoulder workouts afterward"
    ],
    "notes": "Continued building treadmill capacity with short full-incline exposure.",
    "foot": "Not specifically reported",
    "feeling": "Workout completed"
  },
  {
    "session": "Session 022",
    "date": "2026-05-09",
    "day": "Strength B",
    "type": "Treadmill + Strength B + Shoulder",
    "measurements": null,
    "workout": [
      "Strength B completed",
      "Serratus punches",
      "Wall slides",
      "30 min treadmill",
      "Treadmill: steady 2 mph",
      "First 10 min flat",
      "Remainder at max incline",
      "Band pull-aparts and serratus punches progressed from light 10 lb band to heavier 40 lb band"
    ],
    "notes": "Foot felt good overall but was felt near the end of step-ups. Step-up height/bench height became a concern.",
    "foot": "Good; mild sensation near end of step-ups",
    "feeling": "Gassed but good"
  },
  {
    "session": "Session 023",
    "date": "2026-05-10",
    "day": "Bike Ride",
    "type": "Bike",
    "measurements": null,
    "workout": [
      "Bike ride completed",
      "Stats were shared by screenshot in original chat"
    ],
    "notes": "Bike continued to be part of the conditioning mix, especially useful for lower-impact cardio.",
    "foot": "Not specifically reported",
    "feeling": "Bike conditioning day"
  },
  {
    "session": "Session 024",
    "date": "2026-05-11",
    "day": "Strength A + Monday Check-In",
    "type": "Treadmill + Strength A + Measurements",
    "measurements": {
      "weight": "186 lb",
      "belly": "41 in",
      "neck": "16 in",
      "biceps": "13 in",
      "thigh": "23 in"
    },
    "workout": [
      "20 min treadmill",
      "Workout A completed",
      "Band pull-aparts",
      "Wall slides",
      "Facing-wall band forearm slide/lift drill"
    ],
    "notes": "Weight hit 186 lb but belly was down to 41 in, showing body composition/measurement progress despite scale fluctuation.",
    "foot": "Not specifically reported",
    "feeling": "Progress mixed: scale up, belly down"
  },
  {
    "session": "Session 025",
    "date": "2026-05-12",
    "day": "Steady Treadmill",
    "type": "Treadmill",
    "measurements": null,
    "workout": [
      "43 min treadmill",
      "2.0 mph steady pace",
      "No incline"
    ],
    "notes": "A longer steady-state treadmill session with no incline.",
    "foot": "Not specifically reported",
    "feeling": "Steady cardio completed"
  },
  {
    "session": "Session 026",
    "date": "2026-05-13",
    "day": "Rest Day",
    "type": "Rest",
    "measurements": null,
    "workout": [
      "Full rest day"
    ],
    "notes": "Rest day before another strength/cardio day and before the upcoming camping weekend.",
    "foot": "Rest",
    "feeling": "Recovery day"
  },
  {
    "session": "Session 027",
    "date": "2026-05-14",
    "day": "Strength A",
    "type": "Treadmill + Strength A + Shoulder",
    "measurements": null,
    "workout": [
      "45 min treadmill",
      "Strength A completed",
      "Band pull-aparts",
      "Serratus punches"
    ],
    "notes": "Foot felt good with no flare-up or pain. Shoulder remained consistent without much perceived improvement.",
    "foot": "Good; no flare-up",
    "feeling": "Good, drained in a good way"
  },
  {
    "session": "Session 028",
    "date": "2026-05-16 to 2026-05-18",
    "day": "Camping Weekend",
    "type": "Travel / No Training",
    "measurements": null,
    "workout": [
      "Camping Friday, Saturday, Sunday",
      "No formal workouts",
      "Routine planned to resume afterward"
    ],
    "notes": "Planned interruption in training.",
    "foot": "Not specifically reported",
    "feeling": "Travel break"
  },
  {
    "session": "Session 029",
    "date": "2026-05-18",
    "day": "Vest Ordered",
    "type": "Equipment Added",
    "measurements": null,
    "workout": [
      "10 lb weighted vest ordered",
      "Planned use for treadmill, step-ups, planks, and later pack/vest progression"
    ],
    "notes": "This added the first load-carrying training tool for hunting-specific conditioning.",
    "foot": "Pending vest response",
    "feeling": "Preparing for loaded conditioning"
  },
  {
    "session": "Session 030",
    "date": "2026-05-19",
    "day": "Fishing Day",
    "type": "No Formal Workout",
    "measurements": null,
    "workout": [
      "Went fishing instead of working out",
      "Plan to resume the next day"
    ],
    "notes": "Outdoor/lifestyle day rather than formal training.",
    "foot": "Not specifically reported",
    "feeling": "Routine paused for fishing"
  },
  {
    "session": "Session 031",
    "date": "2026-05-20",
    "day": "First Vest Workout",
    "type": "Weighted Vest Treadmill + Strength A",
    "measurements": null,
    "workout": [
      "35 min treadmill",
      "1.8 mph",
      "No incline",
      "10 lb vest",
      "Workout A completed",
      "Serratus punches",
      "Wall slides",
      "Banded wall slides",
      "Band pull-aparts",
      "Door pec stretches"
    ],
    "notes": "First meaningful weighted-vest integration. Very mild foot pain reported with the vest.",
    "foot": "Very mild pain with vest",
    "feeling": "Vest introduced carefully"
  },
  {
    "session": "Session 032",
    "date": "2026-05-21",
    "day": "Morel Hike",
    "type": "Outdoor Hike",
    "measurements": null,
    "workout": [
      "46 min hike",
      "Various terrain",
      "2.43 km",
      "3,630 steps",
      "No gym workout"
    ],
    "notes": "Outdoor terrain exposure was useful for hunting prep, but downhill terrain bothered the feet.",
    "foot": "Feet hurt primarily from downhill",
    "feeling": "Outdoor conditioning but foot irritated"
  },
  {
    "session": "Session 033",
    "date": "2026-05-22",
    "day": "Additional Hikes",
    "type": "Outdoor Hiking",
    "measurements": null,
    "workout": [
      "A few more hikes completed",
      "Stats shared via screenshot in original chat"
    ],
    "notes": "Continued outdoor terrain exposure after the Morel hike.",
    "foot": "Likely still managing soreness",
    "feeling": "Outdoor movement"
  },
  {
    "session": "Session 034",
    "date": "2026-05-23",
    "day": "Rest Day",
    "type": "Rest",
    "measurements": null,
    "workout": [
      "Full rest day"
    ],
    "notes": "Recovery after hiking/foot irritation.",
    "foot": "Recovery",
    "feeling": "Rest"
  },
  {
    "session": "Session 035",
    "date": "2026-05-24",
    "day": "Short Treadmill",
    "type": "Treadmill",
    "measurements": null,
    "workout": [
      "10–15 min treadmill",
      "No vest",
      "Flat",
      "2.0 mph",
      "Stopped because someone came to the door"
    ],
    "notes": "Also reported foot had been bothering you after walking to/from a hockey game the night before.",
    "foot": "Bothered from hockey-game walking",
    "feeling": "Short interrupted session"
  },
  {
    "session": "Session 036",
    "date": "2026-05-25",
    "day": "Vest Strength B + Measurement Check-In",
    "type": "Weighted Vest + Strength B + Measurements",
    "measurements": {
      "weight": "182.3 lb",
      "belly": "41 in",
      "neck": "16 in",
      "thigh": "23.5 in",
      "biceps": "12.5 in"
    },
    "workout": [
      "15 min treadmill",
      "Slight incline",
      "10 lb vest",
      "Workout B completed",
      "Vest worn for step-ups",
      "Vest worn for crunches",
      "Vest worn for planks",
      "Band pull-aparts",
      "Wall slides",
      "Banded wall slides",
      "Pec stretches"
    ],
    "notes": "12-inch workout platform added for step-ups and felt much more controlled/stable. Foot soreness was lingering from mushroom hunting plus long hockey-game walk in poor footwear.",
    "foot": "Slight lingering soreness but overall good",
    "feeling": "Better control with 12-inch platform"
  },
  {
    "session": "Session 037",
    "date": "2026-05-26",
    "day": "60-Min Treadmill",
    "type": "Treadmill + Shoulder Rehab",
    "measurements": null,
    "workout": [
      "60 min treadmill",
      "No vest",
      "2.0 mph",
      "Moderate incline",
      "Last 10 min full incline",
      "2 sets band pull-aparts",
      "Banded wall slides",
      "Serratus punches",
      "Pec stretches"
    ],
    "notes": "Foot felt good and like it could have done more. Overall felt good, energized, and not gassed.",
    "foot": "Good",
    "feeling": "Energized; strong conditioning sign"
  },
  {
    "session": "Session 038",
    "date": "2026-05-30",
    "day": "Export / Migration Prep",
    "type": "Admin / Training Log",
    "measurements": null,
    "workout": [
      "Requested export log of each training day",
      "Asked to use the submitted date as calendar date",
      "Training history prepared for migration into project/dashboard"
    ],
    "notes": "This led to the dashboard Training Log rebuild and the current project setup.",
    "foot": "Not applicable",
    "feeling": "Organizing history"
  },
  {
    "session": "Session 039",
    "date": "2026-05-25",
    "day": "Monday",
    "type": "Active Recovery",
    "measurements": null,
    "workout": [
      "5–10 min Biktrix Juggernaut FS ST test ride",
      "10–15 min walk from truck to hockey arena",
      "10–15 min walk back to truck"
    ],
    "notes": "Not a formal workout, but meaningful low-intensity movement. Included early e-bike testing, partly using throttle.",
    "foot": "Good",
    "feeling": "Easy movement day"
  },
  {
    "session": "Session 040",
    "date": "2026-05-26",
    "day": "Tuesday",
    "type": "Weighted Vest Incline Walk",
    "measurements": null,
    "workout": [
      "58 min treadmill total",
      "10 lb weighted vest entire session",
      "10 min @ 1.8 mph flat",
      "38 min @ 2.0 mph, 1–2° incline",
      "Final 10 min full incline @ 2.5 mph"
    ],
    "notes": "Major hunting-specific conditioning milestone. Longest weighted vest walk so far and foot felt good afterward.",
    "foot": "Good",
    "feeling": "Strong conditioning win"
  },
  {
    "session": "Session 041",
    "date": "2026-05-27",
    "day": "Wednesday",
    "type": "Modified Conditioning",
    "measurements": null,
    "workout": [
      "10 min treadmill walk with vest",
      "Foot started bothering you",
      "Switched to bike",
      "10 min steady bike @ 26% resistance"
    ],
    "notes": "Good decision-making session. You changed the workout instead of pushing through foot irritation.",
    "foot": "Minor flare / managed",
    "feeling": "Smart adjustment"
  },
  {
    "session": "Session 042",
    "date": "2026-05-28",
    "day": "Thursday",
    "type": "Rest Day",
    "measurements": null,
    "workout": [
      "No formal workout",
      "Recovery day"
    ],
    "notes": "Full rest day after the big vest walk and the following day’s foot irritation.",
    "foot": "Recovery",
    "feeling": "Rest / reset"
  },
  {
    "session": "Session 043",
    "date": "2026-05-29",
    "day": "Friday",
    "type": "Active Recovery",
    "measurements": null,
    "workout": [
      "5–10 min Biktrix test ride",
      "10–15 min walk to hockey arena",
      "10–15 min walk back to truck"
    ],
    "notes": "Light movement day. Useful low-level activity without forcing a structured workout.",
    "foot": "Good",
    "feeling": "Good"
  },
  {
    "session": "Session 044",
    "date": "2026-05-30",
    "day": "Saturday",
    "type": "Biktrix Conditioning Ride",
    "measurements": null,
    "workout": [
      "6.91 km ride",
      "17:30 moving time",
      "61 m elevation gain",
      "24.7 km/h average speed",
      "Power Level 3",
      "0 throttle"
    ],
    "notes": "First meaningful conditioning ride on the Biktrix Juggernaut FS ST. Used pedal assist level 3 but no throttle, making it a useful low-moderate conditioning session.",
    "foot": "Good",
    "feeling": "Comfortable ride; good addition to conditioning toolbox"
  },
  {
    "session": "Session 045",
    "date": "2026-05-31",
    "day": "Sunday",
    "type": "Rest Day",
    "measurements": null,
    "workout": [
      "No formal workout",
      "Recovery day",
      "Focused on rest and recovery"
    ],
    "notes": "Recovery day following weighted vest treadmill work, modified conditioning day, and Biktrix conditioning ride.",
    "foot": "Good",
    "feeling": "Recovered and ready for travel phase"
  },
  {
    "session": "Session 046",
    "date": "2026-06-01",
    "day": "Monday",
    "type": "Travel Conditioning + Measurements",
    "measurements": {
      "weight": "183.4 lb",
      "belly": "41 in",
      "thigh": "23 in",
      "biceps": "13.5 in"
    },
    "workout": [
      "30 min treadmill",
      "Flat",
      "2.2 mph",
      "No vest",
      "Weekly weigh-in and measurements"
    ],
    "notes": "Travel-phase daily log. Completed 30 minutes flat on the treadmill at 2.2 mph and recorded measurements the same day. Waist maintained at 41 inches.",
    "foot": "Good",
    "feeling": "Workout completed successfully with no foot issues"
  },
  {
    "session": "Session 047",
    "date": "2026-06-02",
    "day": "Tuesday",
    "type": "Travel Day / Active Recovery",
    "measurements": null,
    "workout": [
      "Travel day",
      "8,462 steps",
      "88 active minutes",
      "6.41 km active distance",
      "329 activity calories",
      "1,767 total calories burned"
    ],
    "notes": "Travel day with no structured workout. Activity remained high through walking and travel-related movement.",
    "foot": "Good",
    "feeling": "Stayed active despite travel"
  },
  {
    "session": "Session 048",
    "date": "2026-06-03 to 2026-06-06",
    "day": "Travel Week 1",
    "type": "Travel Walking / Maintenance",
    "measurements": null,
    "workout": [
      "57,473 total steps",
      "8,210 steps/day average",
      "6.21 km/day average",
      "326 activity calories/day average",
      "2.8 floors/day average",
      "No structured workout focus — vacation walking and general activity"
    ],
    "notes": "Travel activity stayed meaningful even without a normal home-gym routine.",
    "foot": "Not specifically reported",
    "feeling": "Maintained movement during travel"
  },
  {
    "session": "Session 049",
    "date": "2026-06-07 to 2026-06-13",
    "day": "Travel Week 2",
    "type": "Travel Walking / Maintenance",
    "measurements": null,
    "workout": [
      "52,569 total steps",
      "7,509 steps/day average",
      "5.67 km/day average",
      "307 activity calories/day average",
      "3.4 floors/day average",
      "Structured workouts were lower than planned, but walking volume continued"
    ],
    "notes": "Useful maintenance week while away. The key takeaway was to return home without trying to overcorrect.",
    "foot": "Not specifically reported",
    "feeling": "Travel maintenance"
  },
  {
    "session": "Session 050",
    "date": "2026-06-14 to 2026-06-16",
    "day": "Final Travel Days",
    "type": "Travel Walking / Maintenance",
    "measurements": null,
    "workout": [
      "16,505 total steps",
      "5,501 steps/day average",
      "4.21 km/day average",
      "229 activity calories/day average",
      "4.3 floors/day average",
      "Final lower-activity travel stretch"
    ],
    "notes": "Travel wind-down period. Activity was lower than the earlier travel weeks but still logged.",
    "foot": "Not specifically reported",
    "feeling": "Ready to return to routine"
  },
  {
    "session": "Session 051",
    "date": "2026-06-17",
    "day": "Return Home",
    "type": "Travel Day / Reset",
    "measurements": null,
    "workout": [
      "Returned home from vacation",
      "No formal workout",
      "Prepared to restart normal routine"
    ],
    "notes": "Transition day after travel. No need to make up missed workouts; the goal was to restart cleanly.",
    "foot": "Not specifically reported",
    "feeling": "Ready for Phase 2 restart"
  },
  {
    "session": "Session 052",
    "date": "2026-06-18",
    "day": "Thursday",
    "type": "Return Home Conditioning",
    "measurements": null,
    "workout": [
      "35 min treadmill",
      "Flat",
      "2.0 mph",
      "No vest"
    ],
    "notes": "First workout after returning home from vacation. Intentionally easy session to re-establish routine and evaluate foot response before resuming full Phase 2 training.",
    "foot": "Good",
    "feeling": "Successful return-to-routine session"
  },
  {
    "session": "Session 053",
    "date": "2026-06-20",
    "day": "Saturday",
    "type": "Rest Day",
    "measurements": null,
    "workout": [
      "No formal workout",
      "Recovery day"
    ],
    "notes": "Rest day before the longer Biktrix ride.",
    "foot": "Not specifically reported",
    "feeling": "Rest / reset"
  },
  {
    "session": "Session 054",
    "date": "2026-06-21",
    "day": "Sunday",
    "type": "Biktrix Mountain Bike Ride",
    "measurements": null,
    "workout": [
      "38.90 km mountain bike ride",
      "Moving time: 1:52:26",
      "Total time: 1:56:19",
      "Elevation gain: 653 m",
      "Average pace: 2:53/km",
      "Calories: 1,381",
      "Location: Kelowna, BC",
      "Major new Biktrix distance, time, and elevation PR"
    ],
    "notes": "Big conditioning ride and a major endurance milestone. This becomes the new longest Biktrix ride, longest ride time, and highest ride elevation gain.",
    "foot": "Not specifically reported",
    "feeling": "Strong endurance win"
  },
  {
    "session": "Session 055",
    "date": "2026-06-22",
    "day": "Monday",
    "type": "Trail Camera Field Conditioning",
    "measurements": null,
    "workout": [
      "Checked trail cameras in the bush",
      "About 4 separate hikes",
      "Each hike was approximately 10–15 min",
      "Estimated 40–60 min total hiking",
      "Uneven terrain and repeated start/stop field movement"
    ],
    "notes": "Useful hunting-specific field conditioning day with real terrain exposure while checking trail cameras.",
    "foot": "Not specifically reported",
    "feeling": "Productive outdoor conditioning"
  },
  {
    "session": "Session 056",
    "date": "2026-06-23",
    "day": "Tuesday",
    "type": "Weighted Vest Incline Endurance",
    "measurements": null,
    "workout": [
      "60 min treadmill",
      "10 lb weighted vest",
      "2.0 mph and flat to start",
      "At 48 min increased to max incline",
      "At 55 min increased to 2.5 mph",
      "Finished gassed but good"
    ],
    "notes": "Strong post-vacation momentum session. Foot felt good; back of knees were noticeable during higher speed and incline but nothing was sore.",
    "foot": "Good",
    "feeling": "Gassed but good"
  },
  {
    "session": "Session 057",
    "date": "2026-06-29",
    "day": "Monday",
    "type": "Pack Conditioning + Monday Check-In",
    "measurements": {
      "weight": "181.6 lb",
      "waist": "41.5 in",
      "thigh": "22 in",
      "biceps": "13 in"
    },
    "workout": [
      "45 min treadmill",
      "Moderate incline",
      "20 lb total pack load",
      "10 lb pack plus 10 lb vest inside pack",
      "Speed varied from 2.0 mph to 3.0 mph",
      "First true hunting pack progression session"
    ],
    "notes": "Pack progression officially started. Foot felt good with no discomfort; workout burn was muscular rather than pain.",
    "foot": "Good; no discomfort",
    "feeling": "Strong hunting-specific conditioning milestone"
  }
];

export const huntingMilestones = [
  { label: "Program started", status: "Done" },
  { label: "Measurement baseline established", status: "Done" },
  { label: "First workout completed", status: "Done" },
  { label: "First 30 min walk", status: "Done" },
  { label: "First 45 min walk", status: "Done" },
  { label: "First 10 lb vest walk", status: "Done" },
  { label: "First 45 min vest walk", status: "Done" },
  { label: "58 min weighted vest treadmill session", status: "Done" },
  { label: "First 60 min vest walk", status: "Next" },
  { label: "Start hunting pack progression", status: "Done" },
  { label: "30 lb pack session", status: "Pending" },
  { label: "2 hr outdoor hike", status: "Pending" },
  { label: "Fall hunting-ready conditioning block", status: "Pending" },
];

export const personalRecords = [
  { metric: "Highest weight loss from peak", value: "4.4 lb" },
  { metric: "Latest Conditioning Session", value: "20 lb pack / 45 min" },
  { metric: "Program start date", value: "Apr 20, 2026" },
  { metric: "Longest treadmill session", value: "60 min" },
  { metric: "Longest weighted vest walk", value: "58 min" },
  { metric: "Current vest load", value: "10 lb" },
  { metric: "Current pack load", value: "20 lb" },
  { metric: "Next pack milestone", value: "25 lb" },
  { metric: "Best recent incline finish", value: "10 min full incline @ 2.5 mph" },
  { metric: "Step platform", value: "12 in" },
  { metric: "Lowest belly measurement", value: "41 in" },
  { metric: "Current weight", value: "181.6 lb" },
  { metric: "Highest recorded weight", value: "186 lb" },
  { metric: "Longest Biktrix ride", value: "38.90 km" },
  { metric: "Longest Biktrix ride time", value: "1:52:26" },
  { metric: "Most Biktrix elevation gain", value: "653 m" },
];

export const strengthTracker = [
  {
    name: "Goblet Squat",
    current: "20 lb",
    target: "30–40 lb",
    notes: "Build control and depth before heavier loading.",
    progress: 45,
  },
  {
    name: "Bench Press",
    current: "30 lb",
    target: "50–70 lb",
    notes: "Focus on clean reps and shoulder stability.",
    progress: 42,
  },
  {
    name: "Band Row",
    current: "Heavy Band",
    target: "Barbell Row Progression",
    notes: "Prioritize posture and upper back strength.",
    progress: 55,
  },
  {
    name: "Kettlebell Deadlift",
    current: "20 lb",
    target: "40–60 lb",
    notes: "Key movement for hunting durability and posterior chain.",
    progress: 40,
  },
  {
    name: "Shoulder Press",
    current: "30 lb",
    target: "40–60 lb",
    notes: "Maintain strict control and avoid compensation.",
    progress: 50,
  },
  {
    name: "Band Pull-Aparts",
    current: "20 lb Band",
    target: "Higher volume + control",
    notes: "Excellent for posture and shoulder health.",
    progress: 65,
  },
  {
    name: "Band Wall Slides",
    current: "Extra Light Band",
    target: "Smooth controlled reps",
    notes: "Mobility and shoulder mechanics focus.",
    progress: 60,
  },
  {
    name: "Serratus Punches",
    current: "20 lb Band",
    target: "Higher rep endurance",
    notes: "Important for shoulder stability and scapular control.",
    progress: 58,
  },
  {
    name: "Step-ups",
    current: "12-inch Platform",
    target: "Weighted vest progression",
    notes: "Critical for hunting-specific leg endurance.",
    progress: 52,
  },
  {
    name: "Plank",
    current: "Bodyweight",
    target: "60+ sec holds",
    notes: "Core stability carries into everything.",
    progress: 68,
  },
];

