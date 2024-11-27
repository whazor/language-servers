export const releaseConfig = tagFormat => ({
    extends: 'semantic-release-monorepo',
    branches: ['release_improvements'],
    plugins: [
        [
            '@semantic-release/commit-analyzer',
            {
                preset: 'conventionalcommits',
            },
        ],
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        [
            '@semantic-release/npm',
            {
                npmPublish: false,
                tarballDir: 'out',
            },
        ],
        // '@semantic-release/github', // Creates new Github Release
        '@semantic-release/git',
    ],
    tagFormat: tagFormat,
    dryRun: true,
})
