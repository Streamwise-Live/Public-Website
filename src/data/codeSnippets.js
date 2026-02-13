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
  ],
  [
    { type: 'punctuation', value: '})' },
  ],
  [],
  [
    { type: 'comment', value: '// Send audio in, get clean audio back' },
  ],
  [
    { type: 'default', value: 'engine.' },
    { type: 'function', value: 'send' },
    { type: 'punctuation', value: '(' },
    { type: 'default', value: 'inputStream' },
    { type: 'punctuation', value: ')' },
  ],
  [
    { type: 'keyword', value: 'const' },
    { type: 'default', value: ' cleanAudio = engine.' },
    { type: 'function', value: 'receive' },
    { type: 'punctuation', value: '()' },
  ],
  [],
  [
    { type: 'comment', value: '// Listen for moderation events' },
  ],
  [
    { type: 'default', value: 'engine.' },
    { type: 'function', value: 'on' },
    { type: 'punctuation', value: '(' },
    { type: 'string', value: "'event'" },
    { type: 'punctuation', value: ', ' },
    { type: 'punctuation', value: '(' },
    { type: 'default', value: 'e' },
    { type: 'punctuation', value: ') ' },
    { type: 'keyword', value: '=>' },
    { type: 'punctuation', value: ' {' },
  ],
  [
    { type: 'default', value: '  console.' },
    { type: 'function', value: 'log' },
    { type: 'punctuation', value: '(' },
    { type: 'default', value: 'e.' },
    { type: 'property', value: 'type' },
    { type: 'punctuation', value: ', ' },
    { type: 'default', value: 'e.' },
    { type: 'property', value: 'confidence' },
    { type: 'punctuation', value: ')' },
  ],
  [
    { type: 'punctuation', value: '})' },
  ],
]
