# extract-jira-issue-keys

This action made for:

* Finding issue number(s) in PR body and title, set findings in output

How to use:

      - name: Extract jira-issue-keys
        uses: the-real-mpgames/extract-jira-issue-keys@v1
      
Output value
jira-keys - All of the keys found in the commit.
    If is-pull-request was true, then it has all of the keys from all of the commits that were found in the pull request.

merge-commit-sha - SHA of merge commit
