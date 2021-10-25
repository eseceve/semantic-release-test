module.exports = {
  branches: [
    { name: "main" },
    { name: "v+([0-9])", channel: "${name.replace(/v/, '')}", range: "${name.replace(/v/, '')}.x" },
    { name: "release-v1", channel: "rc", prerelease: "rc" },
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
        branchName: "release-v1",
      },
    ],
  ],
};
