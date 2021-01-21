const core = require('@actions/core');
const github = require('@actions/github');
const matchAll = require("match-all");
const unique = require('array-unique');

const body = github.context.payload.pull_request.body
const title = github.context.payload.pull_request.title
const merge_commit_sha = github.context.payload.pull_request.merge_commit_sha
const littlestring = ' ';
const bigstring = title + littlestring + body;

const start = async () => {
    const listOfIds = unique( matchAll(bigstring,  /((([A-Z]+)|([0-9]+))+-\d+)/g).toArray());
    if (listOfIds.length == 0) return;
    const result = listOfIds.join(',');
    core.setOutput("jira-keys", result);
    core.setOutput("merge-commit-sha", merge_commit_sha);
  }
  start(); 