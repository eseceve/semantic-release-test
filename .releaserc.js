module.exports = {
  branches: [
    { name: "main" },
    {
      name: "v+([0-9])",
      channel: "${name.replace(/v/, '')}",
      range: "${name.replace(/v/, '')}.x",
      type: "maintenance",
    },
    { name: "release", channel: "rc", prerelease: "rc" },
    {
      name: "release-v+([0-9])",
      channel: "${name.replace(/release-/, '')}rc",
      prerelease: "${name.replace(/release-/, '')}rc",
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
        branchName:
          "${branch.name === 'main' ? 'release' : ? /v[0-9]+.test(branch.name) ? 'release-' + branch.name : branch.name}",
      },
    ],
  ],
};
