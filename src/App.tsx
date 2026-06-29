import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Dumbbell, Footprints, HeartPulse, Mountain, Ruler, Scale, Search, TrendingDown, Bike, CheckCircle2, AlertTriangle, Box, Activity } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { stats, progressData, conditioningData, readinessSummary, readinessMilestones, workouts, equipment, priorities, phasePlan, trackerRows, workoutLog, huntingMilestones, personalRecords, strengthTracker } from "./fitnessData";

type BasicProps = {
  children?: React.ReactNode;
  className?: string;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Card({ children, className = "" }: BasicProps) {
  return <div className={cn("rounded-2xl border bg-white shadow-sm", className)}>{children}</div>;
}

function CardContent({ children, className = "" }: BasicProps) {
  return <div className={className}>{children}</div>;
}

function Badge({
  children,
  className = "",
  variant = "default",
}: BasicProps & { variant?: "default" | "outline" | "secondary" }) {
  const base = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors";
  const styles =
    variant === "outline"
      ? "border border-slate-300 bg-white text-slate-700"
      : variant === "secondary"
      ? "bg-slate-100 text-slate-800"
      : "bg-slate-900 text-white";
  return <span className={cn(base, styles, className)}>{children}</span>;
}

function Button({
  children,
  className = "",
  variant = "default",
  size = "default",
  onClick,
}: BasicProps & {
  variant?: "default" | "outline";
  size?: "default" | "sm";
  onClick?: () => void;
}) {
  const styles =
    variant === "outline"
      ? "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50"
      : "bg-slate-900 text-white hover:bg-slate-800";
  const sizing = size === "sm" ? "px-3 py-1 text-xs" : "px-4 py-2 text-sm";
  return (
    <button onClick={onClick} className={cn("inline-flex items-center justify-center rounded-md font-medium", styles, sizing, className)}>
      {children}
    </button>
  );
}

function Progress({ value = 0, className = "" }: { value?: number; className?: string }) {
  const safeValue = Math.max(0, Math.min(100, value));
  return (
    <div className={cn("h-3 w-full overflow-hidden rounded-full bg-slate-200", className)}>
      <div className="h-full rounded-full bg-emerald-600 transition-all" style={{ width: `${safeValue}%` }} />
    </div>
  );
}

function Input({
  value,
  onChange,
  placeholder,
  className = "",
}: {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={cn("h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300", className)}
    />
  );
}

function SimpleSelect({
  value,
  onChange,
  children,
  className = "",
}: {
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className={cn("h-10 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300", className)}
    >
      {children}
    </select>
  );
}

function Tabs({ defaultValue, children, className = "" }: BasicProps & { defaultValue: string }) {
  const [activeTab, setActiveTab] = useState(defaultValue);
  const enhanced = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    return React.cloneElement(child as React.ReactElement<any>, { activeTab, setActiveTab });
  });
  return <div className={className}>{enhanced}</div>;
}

function TabsList({
  children,
  className = "",
  activeTab,
  setActiveTab,
}: BasicProps & { activeTab?: string; setActiveTab?: (value: string) => void }) {
  const enhanced = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    return React.cloneElement(child as React.ReactElement<any>, { activeTab, setActiveTab });
  });
  return <div className={className}>{enhanced}</div>;
}

function TabsTrigger({
  value,
  children,
  className = "",
  activeTab,
  setActiveTab,
}: BasicProps & {
  value: string;
  activeTab?: string;
  setActiveTab?: (value: string) => void;
}) {
  const isActive = activeTab === value;
  return (
    <button
      type="button"
      onClick={() => setActiveTab?.(value)}
      className={cn(
        "px-3 py-2 text-sm font-medium transition-colors",
        isActive ? "bg-slate-900 text-white shadow-sm" : "text-slate-600 hover:bg-slate-100",
        className
      )}
    >
      {children}
    </button>
  );
}

function TabsContent({
  value,
  children,
  className = "",
  activeTab,
}: BasicProps & { value: string; activeTab?: string }) {
  if (activeTab !== value) return null;
  return <div className={className}>{children}</div>;
}


function MetricCard({
  title,
  value,
  sub,
  icon: Icon,
  tone = "default",
}: {
  title: string;
  value: string | number;
  sub?: string;
  icon: React.ElementType;
  tone?: string;
}) {
  return (
    <Card className="rounded-2xl shadow-sm border bg-white/90">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm text-slate-500">{title}</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">{value}</p>
            <p className="mt-1 text-sm text-slate-500">{sub}</p>
          </div>
          <div className={`rounded-2xl p-3 ${tone === "good" ? "bg-emerald-50" : tone === "warn" ? "bg-amber-50" : "bg-slate-100"}`}>
            <Icon className={`h-5 w-5 ${tone === "good" ? "text-emerald-700" : tone === "warn" ? "text-amber-700" : "text-slate-700"}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function StatusPill({ status }: { status: string }) {
  const cls = status === "Today"
    ? "bg-blue-100 text-blue-800"
    : status === "Completed"
    ? "bg-emerald-100 text-emerald-800"
    : status === "Recovery"
    ? "bg-emerald-100 text-emerald-800"
    : status === "Optional"
    ? "bg-amber-100 text-amber-800"
    : status === "Upcoming"
    ? "bg-violet-100 text-violet-800"
    : "bg-slate-100 text-slate-700";
  return <span className={`rounded-full px-3 py-1 text-xs font-medium ${cls}`}>{status}</span>;
}

export default function HuntingPrepDashboard() {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [footStatus, setFootStatus] = useState("good");

  const bellyLoss = stats.bellyStart - stats.bellyCurrent;
  const weightFromHigh = stats.highestWeight - stats.currentWeight;
  const phaseProgress = Math.min(100, Math.round((stats.weeksCompleted / 15) * 100));
  const packProgress = Math.min(100, Math.round((stats.packCurrent / stats.packGoal) * 100));

  const filteredWorkouts = useMemo(() => {
    return workouts.filter((w) => {
      const matchesFilter = filter === "all" || w.status.toLowerCase() === filter;
      const search = `${w.day} ${w.type} ${w.focus} ${w.intensity}`.toLowerCase();
      return matchesFilter && search.includes(query.toLowerCase());
    });
  }, [filter, query]);

  const vestAdvice = footStatus === "good" ? "Vest is okay for controlled walking or planks. Keep it conservative." : footStatus === "sore" ? "Skip vest today. Keep incline and duration easy." : "Recovery day. No vest, no hard intervals, prioritize foot care.";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-stone-50 to-emerald-50 p-4 text-slate-900 md:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="overflow-hidden rounded-3xl bg-slate-950 p-6 text-white shadow-xl md:p-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-3 flex flex-wrap gap-2">
                <Badge className="bg-emerald-600 hover:bg-emerald-600">{stats.currentPhase}</Badge>
                <Badge variant="secondary" className="bg-white/10 text-white hover:bg-white/10">Hunting Prep</Badge>
                <Badge variant="secondary" className="bg-white/10 text-white hover:bg-white/10">Okanagan / Central BC</Badge>
              </div>
              <h1 className="text-3xl font-bold tracking-tight md:text-5xl">Fitness & Hunting Prep Dashboard</h1>
              <p className="mt-3 max-w-3xl text-slate-300">Track weight, belly measurements, conditioning, foot status, pack progression, and readiness for elk and mule deer season.</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <p className="text-sm text-slate-300">Current block</p>
              <div className="mt-1 flex items-center gap-2 text-xl font-semibold"><Dumbbell className="h-5 w-5" /> Phase 2 Restart</div>
              <p className="mt-1 text-sm text-slate-300">Back home — building consistency, vest conditioning, and foot-safe progression</p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <MetricCard title="Current Weight" value={`${stats.currentWeight} lb`} sub={`${weightFromHigh.toFixed(1)} lb down from high`} icon={Scale} tone="good" />
          <MetricCard title="Belly" value={`${stats.bellyCurrent}\"`} sub={`${bellyLoss}\" down from start`} icon={TrendingDown} tone="good" />
          <MetricCard title="Training Completed" value={`${stats.weeksCompleted} weeks`} sub="Phase 2 restart" icon={CalendarDays} />
          <MetricCard title="Current Focus" value="Pack conditioning" sub="Hunting-specific endurance" icon={HeartPulse} tone="good" />
          <Card className="rounded-2xl shadow-sm border bg-white/90">
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="w-full">
                  <p className="text-sm text-slate-500">Pack Progress</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">{stats.packCurrent} lb</p>
                  <p className="mt-1 text-sm text-slate-500">Goal: {stats.packGoal} lb · Next: {stats.packNext} lb</p>
                  <div className="mt-3">
                    <div className="mb-1 flex justify-between text-xs text-slate-500">
                      <span>Current load</span>
                      <span>{packProgress}%</span>
                    </div>
                    <Progress value={packProgress} className="h-2" />
                  </div>
                </div>
                <div className="rounded-2xl bg-emerald-50 p-3">
                  <Mountain className="h-5 w-5 text-emerald-700" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-5">
          <TabsList className="grid h-auto w-full grid-cols-2 rounded-2xl bg-white p-1 shadow-sm md:grid-cols-6">
            <TabsTrigger value="overview" className="rounded-xl">Overview</TabsTrigger>
            <TabsTrigger value="plan" className="rounded-xl">15-Week Plan</TabsTrigger>
            <TabsTrigger value="week" className="rounded-xl">This Week</TabsTrigger>
            <TabsTrigger value="log" className="rounded-xl">Training Log</TabsTrigger>
            <TabsTrigger value="equipment" className="rounded-xl">Equipment</TabsTrigger>
            <TabsTrigger value="readiness" className="rounded-xl">Readiness</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-5">
            <div className="grid gap-5 lg:grid-cols-3">
              <Card className="rounded-2xl shadow-sm lg:col-span-2">
                <CardContent className="p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-bold">Body Progress</h2>
                      <p className="text-sm text-slate-500">Weight and belly trend</p>
                    </div>
                    <Badge variant="outline">Best signal: belly -3\"</Badge>
                  </div>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={progressData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="week" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="weight" strokeWidth={3} dot={{ r: 4 }} />
                        <Line type="monotone" dataKey="belly" strokeWidth={3} dot={{ r: 4 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-sm">
                <CardContent className="p-5">
                  <h2 className="text-xl font-bold">Phase Progress</h2>
                  <p className="mt-1 text-sm text-slate-500">Overall 12–15 week hunting prep arc</p>
                  <div className="mt-6 space-y-4">
                    <div>
                      <div className="mb-2 flex justify-between text-sm"><span>Completed</span><span>{phaseProgress}%</span></div>
                      <Progress value={phaseProgress} className="h-3" />
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <p className="font-semibold">Current phase</p>
                      <p className="text-sm text-slate-600">Phase 2 restart after travel — rebuild consistency without overcorrecting.</p>
                    </div>
                    <div className="rounded-2xl bg-emerald-50 p-4">
                      <p className="font-semibold text-emerald-900">Main win so far</p>
                      <p className="text-sm text-emerald-800">Belly measurement is moving in the right direction while conditioning is improving.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              <Card className="rounded-2xl shadow-sm">
                <CardContent className="p-5">
                  <h2 className="text-xl font-bold">Personal Records</h2>
                  <p className="mt-1 text-sm text-slate-500">Best markers so far in this hunting prep block.</p>
                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    {personalRecords.map((record) => (
                      <div key={record.metric} className="rounded-2xl border bg-white p-4 shadow-sm">
                        <p className="text-sm text-slate-500">{record.metric}</p>
                        <p className="mt-1 text-lg font-bold text-slate-900">{record.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-sm">
                <CardContent className="p-5">
                  <h2 className="text-xl font-bold">Hunting Milestones</h2>
                  <p className="mt-1 text-sm text-slate-500">Completed markers and next targets.</p>
                  <div className="mt-4 grid gap-2">
                    {huntingMilestones.map((milestone) => (
                      <div key={milestone.label} className="flex items-center justify-between gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm">
                        <span className="font-medium text-slate-700">{milestone.label}</span>
                        <Badge variant={milestone.status === "Done" ? "default" : "outline"}>{milestone.status}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="plan" className="space-y-5">
            <Card className="rounded-2xl bg-slate-950 text-white shadow-sm">
              <CardContent className="p-5 md:p-6">
                <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div>
                    <h2 className="text-2xl font-black uppercase tracking-tight md:text-3xl">CorePlan: 15-Week Hunting Fitness Plan</h2>
                    <p className="mt-2 text-slate-300">Dashboard version of your poster plan: phases, weekly structure, progression, trackers, and key reminders.</p>
                  </div>
                  <div className="flex gap-2 text-sm">
                    <Badge className="bg-sky-600">Sets</Badge>
                    <Badge className="bg-sky-600">Reps</Badge>
                    <Badge className="bg-sky-600">Time</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {phasePlan.map((phase) => {
              const theme = phase.color === "blue" ? "border-sky-500 bg-sky-50 text-sky-950" : phase.color === "green" ? "border-lime-600 bg-lime-50 text-lime-950" : "border-orange-600 bg-orange-50 text-orange-950";
              const header = phase.color === "blue" ? "bg-sky-600" : phase.color === "green" ? "bg-lime-600" : "bg-orange-600";
              return (
                <Card key={phase.phase} className={`overflow-hidden rounded-2xl border-2 shadow-sm ${theme}`}>
                  <CardContent className="p-0">
                    <div className="flex flex-col gap-2 bg-white/70 p-4 md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-2xl font-black uppercase"><span>{phase.phase}: </span>{phase.title} <span className="text-base">({phase.weeks})</span></h3>
                        <p className="mt-1 text-sm font-semibold">Goal: {phase.goal}</p>
                      </div>
                      <Badge variant="outline" className="w-fit bg-white">{phase.weeks}</Badge>
                    </div>
                    <div className="grid gap-px bg-slate-300 md:grid-cols-6">
                      {phase.days.map((day) => (
                        <div key={`${phase.phase}-${day.day}`} className="bg-white">
                          <div className={`${header} p-3 text-center text-white`}>
                            <p className="text-sm font-black uppercase">{day.day}</p>
                            <p className="text-xs font-bold uppercase">{day.label}</p>
                            <p className="text-xs">{day.time}</p>
                          </div>
                          <div className="min-h-48 space-y-2 p-3">
                            {day.work.map((item) => (
                              <div key={item} className="rounded-xl bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700">{item}</div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className={`${header} p-3 text-sm font-bold text-white`}>★ Focus: {phase.focus}</div>
                  </CardContent>
                </Card>
              );
            })}

            <div className="grid gap-5 lg:grid-cols-3">
              <Card className="rounded-2xl shadow-sm lg:col-span-2">
                <CardContent className="p-5">
                  <h3 className="text-xl font-bold">Progress Tracking Dashboard</h3>
                  <p className="mt-1 text-sm text-slate-500">Use this as the interactive version of the poster tracker.</p>
                  <div className="mt-4 overflow-hidden rounded-2xl border">
                    <div className="grid grid-cols-16 bg-slate-100 text-xs font-bold text-slate-600">
                      <div className="col-span-3 border-r p-2">Weekly Check-in</div>
                      {Array.from({ length: 13 }, (_, i) => <div key={i} className="border-r p-2 text-center">{i + 1}</div>)}
                    </div>
                    {trackerRows.map((row) => (
                      <div key={row.label} className="grid grid-cols-16 border-t text-xs">
                        <div className="col-span-3 border-r bg-white p-2 font-semibold">{row.label}</div>
                        {row.values.map((value, i) => (
                          <div
                            key={i}
                            className={`min-h-8 border-r p-2 ${value ? "bg-emerald-50 text-emerald-950 font-medium" : "bg-slate-50"}`}
                          >
                            {value}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-sm">
                <CardContent className="p-5">
                  <h3 className="text-xl font-bold">How to Use</h3>
                  <div className="mt-4 space-y-3 text-sm text-slate-700">
                    <p>✓ Follow the daily plan and check off each workout when completed.</p>
                    <p>✓ Use trackers weekly to measure progress and adjust as needed.</p>
                    <p>✓ Add reps or weight when the target feels easier.</p>
                    <p>✓ Stay consistent — progress comes from showing up.</p>
                  </div>
                  <div className="mt-5 rounded-2xl bg-slate-950 p-4 text-white">
                    <p className="font-bold">Intensity Guide</p>
                    <p className="mt-2 text-sm text-slate-300">Light 3–4, moderate 5–6, hard 7–8, very hard 9, max 10.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-5">
                <h3 className="text-xl font-bold">Strength Tracker</h3>
                <p className="mt-1 text-sm text-slate-500">Log working weights for the exercises that repeat across phases.</p>
                <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {strengthTracker.map((item) => (
                    <div key={item.name} className="rounded-2xl border bg-white p-4 shadow-sm">
                      <div className="flex items-start justify-between gap-3">
                        <p className="font-semibold">{item.name}</p>
                        <Badge variant="outline">{item.current}</Badge>
                      </div>

                      <div className="mt-4">
                        <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
                          <span>Progression</span>
                          <span>{item.progress}%</span>
                        </div>
                        <Progress value={item.progress} className="h-2" />
                      </div>

                      <div className="mt-4 space-y-2 text-sm">
                        <div>
                          <span className="font-medium text-slate-700">Current:</span>
                          <span className="ml-2 text-slate-600">{item.current}</span>
                        </div>
                        <div>
                          <span className="font-medium text-slate-700">Goal:</span>
                          <span className="ml-2 text-slate-600">{item.target}</span>
                        </div>
                      </div>

                      <div className="mt-4 rounded-xl bg-slate-50 p-3 text-xs text-slate-600">
                        {item.notes}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="week" className="space-y-5">
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-5">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-xl font-bold">Weekly Plan — Return Home Restart</h2>
                    <p className="text-sm text-slate-500">Back home after travel. Restarting routine conservatively with foot-aware Phase 2 progression.</p>
                  </div>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <div className="relative">
                      <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                      <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search workouts..." className="pl-9" />
                    </div>
                    <SimpleSelect value={filter} onChange={setFilter} className="w-full sm:w-44">
                      <option value="all">All</option>
                      <option value="today">Today</option>
                      <option value="completed">Completed</option>
                      <option value="upcoming">Upcoming</option>
                      <option value="optional">Optional</option>
                      <option value="recovery">Recovery</option>
                    </SimpleSelect>
                  </div>
                </div>

                <div className="mt-5 overflow-hidden rounded-2xl border">
                  <div className="grid grid-cols-12 bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-600">
                    <div className="col-span-2">Day</div>
                    <div className="col-span-3">Workout</div>
                    <div className="col-span-2">Duration</div>
                    <div className="col-span-2">Intensity</div>
                    <div className="col-span-2">Focus</div>
                    <div className="col-span-1">Status</div>
                  </div>
                  {filteredWorkouts.map((w) => (
                    <div key={w.day} className="grid grid-cols-12 items-center gap-2 border-t bg-white px-4 py-4 text-sm">
                      <div className="col-span-2 font-semibold">{w.day}</div>
                      <div className="col-span-3">{w.type}</div>
                      <div className="col-span-2 text-slate-600">{w.duration}</div>
                      <div className="col-span-2 text-slate-600">{w.intensity}</div>
                      <div className="col-span-2 text-slate-600">{w.focus}</div>
                      <div className="col-span-1"><StatusPill status={w.status} /></div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-5">
                <h2 className="text-xl font-bold">Foot / Vest Decision</h2>
                <p className="mt-1 text-sm text-slate-500">Use this before incline walks, step-ups, and vest work.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button variant={footStatus === "good" ? "default" : "outline"} onClick={() => setFootStatus("good")}>Feels good</Button>
                  <Button variant={footStatus === "sore" ? "default" : "outline"} onClick={() => setFootStatus("sore")}>Slight soreness</Button>
                  <Button variant={footStatus === "flared" ? "default" : "outline"} onClick={() => setFootStatus("flared")}>Flared up</Button>
                </div>
                <div className="mt-4 rounded-2xl bg-slate-50 p-4">
                  <div className="flex gap-3">
                    {footStatus === "good" ? <CheckCircle2 className="h-5 w-5 text-emerald-700" /> : <AlertTriangle className="h-5 w-5 text-amber-700" />}
                    <p className="text-sm font-medium">{vestAdvice}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="log" className="space-y-5">
            <Card className="rounded-2xl bg-slate-950 text-white shadow-sm">
              <CardContent className="p-5 md:p-6">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">Training Log</h2>
                    <p className="mt-2 text-slate-300">Chronological training journal from the beginning of this hunting prep journey. New workouts should be appended as new sessions, not summarized over old entries.</p>
                  </div>
                  <Badge className="bg-emerald-600">{workoutLog.length} Entries</Badge>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {workoutLog.map((entry, index) => (
                <Card key={`${entry.session}-${index}`} className="rounded-2xl border bg-white shadow-sm">
                  <CardContent className="p-5">
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="outline">{entry.session}</Badge>
                          <Badge>{entry.type}</Badge>
                          <span className="text-sm text-slate-500">{entry.date}</span>
                        </div>
                        <h4 className="mt-3 text-xl font-bold text-slate-900">{entry.day}</h4>
                        <p className="mt-1 text-sm text-slate-600">{entry.notes}</p>
                      </div>
                      <div className="rounded-xl bg-slate-50 px-4 py-3 text-sm">
                        <p className="font-semibold text-slate-700">Foot</p>
                        <p className="text-slate-600">{entry.foot}</p>
                      </div>
                    </div>

                    {entry.measurements && (
                      <div className="mt-4 rounded-2xl bg-emerald-50 p-4">
                        <p className="mb-3 font-semibold text-emerald-950">Measurements / Check-In</p>
                        <div className="grid gap-2 text-sm md:grid-cols-3">
                          {Object.entries(entry.measurements).map(([key, value]) => (
                            <div key={key} className="rounded-xl bg-white px-3 py-2">
                              <span className="font-medium capitalize text-slate-700">{key}: </span>
                              <span className="text-slate-600">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-4 grid gap-2 md:grid-cols-2">
                      {entry.workout.map((item) => (
                        <div key={item} className="rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-700">{item}</div>
                      ))}
                    </div>

                    <div className="mt-4 rounded-xl border bg-white px-3 py-2 text-sm text-slate-600">
                      <span className="font-medium text-slate-700">Feeling / takeaway: </span>{entry.feeling}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="equipment" className="space-y-5">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {equipment.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.name} className="rounded-2xl shadow-sm">
                    <CardContent className="p-5">
                      <div className="mb-4 inline-flex rounded-2xl bg-slate-100 p-3"><Icon className="h-5 w-5" /></div>
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-bold">{item.name}</h3>
                        <Badge variant="outline" className="shrink-0">{item.category}</Badge>
                      </div>
                      <p className="mt-2 text-sm text-slate-600">{item.use}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="readiness" className="space-y-5">
            <Card className="rounded-2xl bg-slate-950 text-white shadow-sm">
              <CardContent className="p-5 md:p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">Hunting Readiness</h2>
                    <p className="mt-2 text-slate-300">
                      Field-readiness estimate based on conditioning, leg strength, pack tolerance, foot health, and shoulder health.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4 text-center">
                    <p className="text-sm text-slate-300">Overall readiness</p>
                    <p className="mt-1 text-4xl font-black">6.9/10</p>
                    <p className="mt-1 text-sm text-slate-300">Good base, pack work still ahead</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-5 lg:grid-cols-2">
              <Card className="rounded-2xl shadow-sm">
                <CardContent className="p-5">
                  <h2 className="text-xl font-bold">Hunting Readiness Radar</h2>
                  <p className="mt-1 text-sm text-slate-500">Quick visual estimate based on recent training notes.</p>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={conditioningData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="area" />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} />
                        <Radar name="Readiness" dataKey="score" strokeWidth={2} fillOpacity={0.25} />
                        <Tooltip />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-sm">
                <CardContent className="p-5">
                  <h2 className="text-xl font-bold">Conditioning Snapshot</h2>
                  <p className="mt-1 text-sm text-slate-500">Simple score view for what to build next.</p>
                  <div className="mt-4 h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={conditioningData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="area" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Bar dataKey="score" radius={[10, 10, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-5">
                <h2 className="text-xl font-bold">Readiness Breakdown</h2>
                <p className="mt-1 text-sm text-slate-500">
                  What each score means, what supports it, and what moves it up next.
                </p>
                <div className="mt-5 grid gap-4 lg:grid-cols-2">
                  {readinessSummary.map((item) => (
                    <div key={item.area} className="rounded-2xl border bg-white p-4 shadow-sm">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-bold">{item.area}</h3>
                          <p className="mt-1 text-sm text-slate-500">{item.status}</p>
                        </div>
                        <Badge className="shrink-0">{item.rating}</Badge>
                      </div>

                      <div className="mt-4">
                        <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
                          <span>Current score</span>
                          <span>{item.score}%</span>
                        </div>
                        <Progress value={item.score} className="h-2" />
                      </div>

                      <div className="mt-4 rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
                        <span className="font-semibold">Evidence: </span>{item.evidence}
                      </div>

                      <div className="mt-3 rounded-xl bg-emerald-50 p-3 text-sm text-emerald-900">
                        <span className="font-semibold">Next move: </span>{item.next}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-5 lg:grid-cols-2">
              <Card className="rounded-2xl shadow-sm">
                <CardContent className="p-5">
                  <h2 className="text-xl font-bold">Next Readiness Milestones</h2>
                  <p className="mt-1 text-sm text-slate-500">The specific checkpoints that move you from 6.5/10 toward 8+/10.</p>
                  <div className="mt-4 grid gap-2">
                    {readinessMilestones.map((milestone) => (
                      <div key={milestone.label} className="flex items-center justify-between gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm">
                        <span className="font-medium text-slate-700">{milestone.label}</span>
                        <Badge variant={milestone.status === "Done" ? "default" : "outline"}>{milestone.status}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-sm">
                <CardContent className="p-5">
                  <h2 className="text-xl font-bold">Priority Rules</h2>
                  <p className="mt-1 text-sm text-slate-500">Keep these as your guardrails through the transition phase.</p>
                  <div className="mt-5 space-y-3">
                    {priorities.map((p, index) => (
                      <div key={p} className="flex gap-3 rounded-2xl bg-slate-50 p-4">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">{index + 1}</div>
                        <p className="text-sm text-slate-700">{p}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
