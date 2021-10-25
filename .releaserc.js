module.exports = {
  branches: [
    { name: "main" },
    {
      name: "v+([0-9])",
      range: "${name.replace(/v/, '')}.x",
      type: "maintenance"
    },
    { name: "release", channel: "rc", prerelease: "rc" },
    {
      name: "release-v+([0-9])",
      channel: "${name}-rc",
      prerelease: "${name}-rc",
      type: "maintenance",
    },
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
