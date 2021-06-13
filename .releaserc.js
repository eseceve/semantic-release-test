module.exports = {
  branches: [{
    name: "master
  }, {
    name: "release",
    channel: "rc",
    prerelease: "rc"
  }],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/git"
  ],
};
