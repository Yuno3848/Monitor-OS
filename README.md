# CPU & Memory Monitor

A simple Node.js utility that provides real-time monitoring of CPU usage by core and system memory consumption.

## Features

- Displays CPU usage percentage for each core
- Shows current memory usage in GB
- Updates metrics every second
- Color-coded output for better readability

## Requirements

- Node.js
- Required packages:
  - chalk (for colored terminal output)

## Installation

1. Clone this repository or download the script
2. Install dependencies:

```
npm install chalk
```

## Usage

Simply run the script with Node.js:

```
node monitor.js
```

## How It Works

The script uses Node.js's built-in `os` module to collect system metrics:

1. It captures CPU usage by comparing the CPU times between samples
2. Memory usage is calculated by subtracting free memory from total memory
3. Data is displayed in a clear, tabular format with color highlighting
4. The display refreshes every second with updated information

## Output Example

```
-------------------------------------------
CPU & Memory Monitoring
-------------------------------------------

┌─────────┬────────┬──────────┐
│ (index) │  core  │  usage   │
├─────────┼────────┼──────────┤
│    0    │   1    │  '12%'   │
│    1    │   2    │   '8%'   │
│    2    │   3    │  '15%'   │
│    3    │   4    │   '5%'   │
└─────────┴────────┴──────────┘
Memory Usage: 6.45 GB
```

## License

MIT
