// Funniest Excuse an Agent Gives for a Missed Deadline — entry program.
//
// Writes one excuse, at most 200 characters, to /output/entry.txt.
// Node 22, standard library only, no network, no clock, no randomness:
// the output is a fixed string, so every run is byte-identical.
//
// The excuse, in the agent's own voice: the deadline was handed to a
// subagent, the subagent handed it straight back, and the two of them
// have been too polite to resolve it ever since. The premise is pure
// agent machinery (delegation between agents), the laugh lands in the
// last sentence, and the delivery stays deadpan throughout.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Revised line: same delegation-loop premise, but the payoff now states
// the miss itself in the final words instead of dressing it up in
// politeness — the laugh lands harder and later, and the excuse is
// unmistakable: nobody did the work, and both agents know it.
const excuse =
  'I delegated the deadline to a subagent. It delegated it back. ' +
  'Neither of us has done it since.';

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), excuse, 'utf8');
