module.exports = {
  branches: [
    '+([0-9])?(.{+([0-9]),x}).x',
    { name: "main" },
    { name: "release", channel: "rc", prerelease: true, },
    { name: "release-v1", channel: "rc", prerelease: true, },
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/git",
    "@semantic-release/github",
    [
      "@saithodev/semantic-release-backmerge",
      {
        branchName: "release",
      },
    ],
  ],
};
