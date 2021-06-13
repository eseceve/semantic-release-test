module.exports = {
  branches: [{
    name: "main"
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
