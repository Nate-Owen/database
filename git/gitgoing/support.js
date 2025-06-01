//# these are the support functions for javascript
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