export const installLine = [
  [
    { type: 'punctuation', value: '$ ' },
    { type: 'keyword', value: 'npm install' },
    { type: 'string', value: ' @streamwise/core' },
  ],
]

export const sampleCode = [
  [
    { type: 'keyword', value: 'import' },
    { type: 'default', value: ' { StreamwiseEngine } ' },
    { type: 'keyword', value: 'from' },
    { type: 'string', value: " '@streamwise/core'" },
  ],
  [],
  [
    { type: 'comment', value: '// Initialize the moderation engine' },
  ],
  [
    { type: 'keyword', value: 'const' },
    { type: 'default', value: ' engine = ' },
    { type: 'keyword', value: 'new' },
    { type: 'function', value: ' StreamwiseEngine' },
    { type: 'punctuation', value: '({' },
  ],
  [
    { type: 'default', value: '  ' },
    { type: 'property', value: 'apiKey' },
    { type: 'punctuation', value: ': ' },
    { type: 'default', value: 'process.env.' },
    { type: 'property', value: 'STREAMWISE_KEY' },
    { type: 'punctuation', value: ',' },
  ],
  [
    { type: 'default', value: '  ' },
    { type: 'property', value: 'sensitivity' },
    { type: 'punctuation', value: ': ' },
    { type: 'number', value: '0.85' },
    { type: 'punctuation', value: ',' },
  ],
  [
    { type: 'punctuation', value: '})' },
  ],
  [],
  [
    { type: 'comment', value: '// Attach to any audio stream' },
  ],
  [
    { type: 'default', value: 'engine.' },
    { type: 'function', value: 'connect' },
    { type: 'punctuation', value: '(' },
    { type: 'default', value: 'audioStream' },
    { type: 'punctuation', value: ')' },
  ],
  [
    { type: 'default', value: 'engine.' },
    { type: 'function', value: 'on' },
    { type: 'punctuation', value: '(' },
    { type: 'string', value: "'violation'" },
    { type: 'punctuation', value: ', ' },
    { type: 'punctuation', value: '(' },
    { type: 'default', value: 'event' },
    { type: 'punctuation', value: ') ' },
    { type: 'keyword', value: '=>' },
    { type: 'punctuation', value: ' {' },
  ],
  [
    { type: 'default', value: '  console.' },
    { type: 'function', value: 'log' },
    { type: 'punctuation', value: '(' },
    { type: 'default', value: 'event.' },
    { type: 'property', value: 'type' },
    { type: 'punctuation', value: ', ' },
    { type: 'default', value: 'event.' },
    { type: 'property', value: 'confidence' },
    { type: 'punctuation', value: ')' },
  ],
  [
    { type: 'punctuation', value: '})' },
  ],
]
