export const nodes = [
  {
    id: 'trigger',
    label: 'Audio Input',
    subtitle: 'Stream: Live Mic',
    column: 0,
    row: 0,
    type: 'input',
  },
  {
    id: 'detect-intent',
    label: 'Detect Intent',
    subtitle: 'Confidence: 94.2%',
    column: 1,
    row: 0,
    type: 'process',
  },
  {
    id: 'detect-word',
    label: 'Detect Word',
    subtitle: 'Flagged: 3 terms',
    column: 1,
    row: 1,
    type: 'process',
  },
  {
    id: 'webhook',
    label: 'Webhook',
    subtitle: 'POST /api/alert',
    column: 2,
    row: 0,
    type: 'output',
  },
  {
    id: 'play-sound',
    label: 'Play Sound',
    subtitle: 'alert_beep.wav',
    column: 2,
    row: 1,
    type: 'output',
  },
]

export const connections = [
  { from: 'trigger', to: 'detect-intent' },
  { from: 'trigger', to: 'detect-word' },
  { from: 'detect-intent', to: 'webhook' },
  { from: 'detect-word', to: 'play-sound' },
]

// Desktop positions (percentages of container)
export const nodePositions = {
  'trigger':       { x: 5,  y: 35 },
  'detect-intent': { x: 37, y: 15 },
  'detect-word':   { x: 37, y: 58 },
  'webhook':       { x: 70, y: 15 },
  'play-sound':    { x: 70, y: 58 },
}

export const NODE_WIDTH = 200
export const NODE_HEIGHT = 80
