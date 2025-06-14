// this helps to keep the code clean and organized
import { getGitStatus } from './gitStatus.js';
import { getGitBranches } from './gitBranches.js';
import { getGitTags } from './gitTags.js';
import { getGitRemotes } from './gitRemotes.js';
import { getGitConfig } from './gitConfig.js';
import { getGitLog } from './gitLog.js';
import { getGitDiff } from './gitDiff.js';
import { getGitStash } from './gitStash.js';
import { getGitBlame } from './gitBlame.js';
import { getGitShow } from './gitShow.js';
import { getGitCherryPick } from './gitCherryPick.js';
import { getGitRebase } from './gitRebase.js';
import { getGitMerge } from './gitMerge.js';

// Export all functions for external use
export {
  getGitStatus,
  getGitBranches,
  getGitTags,
  getGitRemotes,
  getGitConfig,
  getGitLog,
  getGitDiff,
  getGitStash,
  getGitBlame,
  getGitShow,
  getGitCherryPick,
  getGitRebase,
  getGitMerge
};
// This file serves as an entry point for all Git-related functionalities in the application.
// It imports all the necessary functions from their respective modules and exports them for use in other parts of the application.
// This modular approach helps in maintaining a clean and organized codebase, making it easier to manage and extend functionalities in the future.

play: export function playExample() {
  console.log("GitGoing example function executed.");
  // You can add more example code here to demonstrate the functionalities
}