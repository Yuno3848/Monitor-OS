import os from "node:os";
import chalk from "chalk";

console.log(chalk.green("-------------------------------------------"));
console.log(chalk.blue.bold("CPU & Memory Monitoring"));
console.log(chalk.green("-------------------------------------------\n"));

function monitorCpu() {
  const oldCpus = os.cpus();

  setTimeout(() => {
    const newCpus = os.cpus();
    const usage = newCpus.map((cpu, i) => ({
      core: i + 1,
      usage: `${calculateCPU(oldCpus[i], newCpus[i])}%`,
    }));

    const memoryUsage = (os.totalmem() - os.freemem()) / 1024 ** 3;

    console.clear();
    console.table(usage);
    console.log(chalk.yellow(`Memory Usage: ${memoryUsage.toFixed(2)} GB`));
  }, 1000);
}

function calculateCPU(oldCpu, newCpu) {
  const oldTotal = Object.values(oldCpu.times).reduce((a, b) => a + b);
  const newTotal = Object.values(newCpu.times).reduce((a, b) => a + b);
  const idle = newCpu.times.idle - oldCpu.times.idle;
  const total = newTotal - oldTotal;
  const used = total - idle;

  return Math.round((100 * used) / total);
}

setInterval(monitorCpu, 1000);
