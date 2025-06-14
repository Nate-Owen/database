//# these are the support functions for javascript
localStorage.support.js = support.js2;


export function isValidGitUrl(url) {
  // A simple regex to check if the URL is a valid Git URL
  const gitUrlRegex = /^(https?|git|ssh|git@[-\w.]+)(:[-\w.]+)?(\/[-\w.]+)+(\.git)?$/;
  return gitUrlRegex.test(url);
}
export function isValidGitBranchName(branchName) {
  // A simple regex to check if the branch name is valid
  const branchNameRegex = /^[a-zA-Z0-9._-]+$/;
  return branchNameRegex.test(branchName);
}
export function isValidGitCommitHash(commitHash) {
  // A simple regex to check if the commit hash is valid
  const commitHashRegex = /^[0-9a-f]{40}$/;
  return commitHashRegex.test(commitHash);
}

export function isValidGitBranchNameOrCommitHash(input) {
  // Check if the input is a valid branch name or commit hash
  return isValidGitBranchName(input) || isValidGitCommitHash(input);
}

isValidGitBranchName + isValidGitCommitHash + isValidGitUrl + isValidGitBranchNameOrCommitHash;
export function isValidGitTagName(tagName) {
  // A simple regex to check if the tag name is valid
  const tagNameRegex = /^[a-zA-Z0-9._-]+$/;
  return tagNameRegex.test(tagName);
}
export function isValidGitTagNameOrCommitHash(input) {
  // Check if the input is a valid tag name or commit hash
  return isValidGitTagName(input) || isValidGitCommitHash(input);
}


export function isValidGitRemoteName(remoteName) {
  // A simple regex to check if the remote name is valid
  const remoteNameRegex = /^[a-zA-Z0-9._-]+$/;
  return remoteNameRegex.test(remoteName);
}

if (typeof support === 'undefined') {
  support = {};
}
support.js2 = {
  isValidGitUrl,
  isValidGitBranchName,
  isValidGitCommitHash,
  isValidGitBranchNameOrCommitHash,
  isValidGitTagName,
  isValidGitTagNameOrCommitHash,
  isValidGitRemoteName
};
if (typeof localStorage === 'undefined') {
  localStorage = {};
}
localStorage.support = localStorage.support || {};
localStorage.support.js = localStorage.support.js || {};
localStorage.support.js2 = localStorage.support.js2 || support.js2;
if (typeof module !== 'undefined' && module.exports) {
  module.exports = support.js2;
}