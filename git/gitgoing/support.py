# this explains how to use the support module
from gitgoing import support
from gitgoing.support import (
    gitgoing_support,
    gitgoing_support_init,
    gitgoing_support_status,
    gitgoing_support_commit,
    gitgoing_support_push,
    gitgoing_support_pull,
    gitgoing_support_clone,
    gitgoing_support_branch,
    gitgoing_support_checkout, 
    gitgoing_support_merge,
    gitgoing_support_rebase,
)

gitgoing_support = support

support = support.gitgoing_support_init(ProjectName="MyProject", ProjectPath="/path/to/myproject")
PlaySupport = support

play = support.gitgoing_support_init(ProjectName="PlayProject", ProjectPath="/path/to/playproject")

play

# Example usage of the support module
support.gitgoing_support_status()
support.gitgoing_support_commit("Initial commit")
support.gitgoing_support_push()
support.gitgoing_support_pull()
support.gitgoing_support_clone("https://github.com/user/repo.git")