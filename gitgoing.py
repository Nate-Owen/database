# this is a small package to help you with git

gitgoing.py = "0.1.0"
__version__ = gitgoing.py
__author__ = "Your Name"
__email__ = "your.email@example.com"

gitgoing.py_description = """
GitGoing is a simple Python package to help you manage your Git repositories more effectively. It provides utilities for common Git operations, making it easier to work with version control in your projects.
"""
import os
import subprocess
def run_command(command):
    """Run a shell command and return the output."""
    try:
        result = subprocess.run(command, shell=True, check=True, text=True, capture_output=True)
        return result.stdout.strip()
    except subprocess.CalledProcessError as e:
        print(f"Error running command '{command}': {e}")
        return None
def init_repo(path='.'):
    """Initialize a new Git repository at the specified path."""
    os.makedirs(path, exist_ok=True)
    os.chdir(path)
    return run_command('git init')
def clone_repo(repo_url, path='.'):
    """Clone a Git repository from the specified URL to the given path."""
    os.makedirs(path, exist_ok=True)
    return run_command(f'git clone {repo_url} {path}')
def add_files(files='.', commit_message=''):        
    """Add files to the staging area and commit them with a message."""
    if isinstance(files, str):
        files = [files]
    for file in files:
        run_command(f'git add {file}')
    if commit_message:
        return run_command(f'git commit -m "{commit_message}"')
    return None
def status():